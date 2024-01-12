from pymongo import MongoClient
import pandas as pd
from faker import Faker
import random

# Initialize Faker for generating random data
fake = Faker()

# Generate sample data
num_students = 20_000
num_saus = 250
schools_per_sau = random.randint(1, 3)

# Enhanced data generation functions

# Generate Students DataFrame with names
def generate_students(num_students):
    students = [{'StudentID': i, 
                 'FirstName': fake.first_name(),
                 'LastName': fake.last_name(),
                 'Age': random.randint(6, 18), 
                 'Gender': random.choice(['Male', 'Female', 'Other']), 
                 'Ethnicity': random.choice(['Caucasian', 'African American', 'Hispanic', 'Asian', 'Other'])}
                for i in range(1, num_students + 1)]
    return pd.DataFrame(students)

# Generate SAUs and Schools DataFrame with names
def generate_saus_and_schools(num_saus, schools_per_sau):
    saus = [{'SAUID': i, 'SAUName': fake.company() + ' School District'} for i in range(1, num_saus + 1)]
    schools = []
    school_id_counter = 1
    for sau in saus:
        for _ in range(schools_per_sau):
            schools.append({
                'SchoolID': school_id_counter,
                'SAUID': sau['SAUID'],
                'SchoolName': fake.company() + ' ' + random.choice(['Elementary', 'Middle', 'High']) + ' School',
                'SchoolType': random.choice(['Elementary', 'Middle', 'High'])
            })
            school_id_counter += 1
    return pd.DataFrame(saus), pd.DataFrame(schools)

# Generate Enrollments DataFrame with unique IDs
def generate_enrollments(students_df, schools_df):
    enrollments = []
    enrollment_id = 1
    for _ in range(len(students_df)):
        enrollments.append({
            'EnrollmentID': enrollment_id,
            'StudentID': random.choice(students_df['StudentID'].tolist()),
            'SchoolID': random.choice(schools_df['SchoolID'].tolist()),
            'GradeLevel': random.randint(1, 12),
            'EnrollmentStatus': random.choice(['Active', 'Graduated', 'Transferred'])
        })
        enrollment_id += 1
    return pd.DataFrame(enrollments)

# Generate data
students = generate_students(num_students)
saus, schools = generate_saus_and_schools(num_saus, schools_per_sau)
enrollments = generate_enrollments(students, schools)

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['NEO']

# Insert data into MongoDB
db.students.insert_many(students.to_dict('records'))
db.saus.insert_many(saus.to_dict('records'))
db.schools.insert_many(schools.to_dict('records'))
db.enrollments.insert_many(enrollments.to_dict('records'))

students.to_json('testdata\\test_students.json', orient='records', lines=False, indent=4)
saus.to_json('testdata\\test_saus.json', orient='records', lines=False, indent=4)
schools.to_json('testdata\\test_schools.json', orient='records', lines=False, indent=4)
enrollments.to_json('testdata\\test_enrollments.json', orient='records', lines=False, indent=4)

