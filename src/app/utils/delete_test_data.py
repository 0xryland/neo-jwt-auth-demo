from pymongo import MongoClient

# Connect to MongoDB (Update URI as needed)
client = MongoClient('mongodb://localhost:27017/')
db = client['NEO']

# Delete existing data
db.students.delete_many({})
db.saus.delete_many({})
db.schools.delete_many({})
db.enrollments.delete_many({})

