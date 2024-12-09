const { MongoClient } = require("mongodb");

const mongoURI =
  "mongodb+srv://tamberohan995:rohan123@coursework.cs4lb.mongodb.net/CourseWork?retryWrites=true&w=majority";

const client = new MongoClient(mongoURI);

(async function testConnection() {
  try {
    await client.connect();
    console.log("Connected to MongoDB successfully!");
    const db = client.db("CourseWork");
    console.log("Database Name:", db.databaseName);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  } finally {
    await client.close();
  }
})();
