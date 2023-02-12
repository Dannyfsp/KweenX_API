// import mongoose to enable us connect to mongodb
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connect to database successfully 🚀🚀🚀");
  } catch (error) {
    console.log(error.message);
  }
};

// export connectDB
module.exports = connectDB;
