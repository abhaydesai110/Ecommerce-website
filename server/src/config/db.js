const mongoose = require("mongoose")

// const mongodburl = "mongodb+srv://abhayecom:2U7c2c9rineB2mD7@cluster0.7rvkhzb.mongodb.net/?retryWrites=true&w=majority"
const mongodburl = "mongodb+srv://abhayecom:yZjqnV4oGaxcoHg0@cluster0.nvrzmsu.mongodb.net/"

const connectDb = async () => {
    const response = await mongoose.connect(mongodburl);
    if (response){
        console.log("Database Connected Successfully")
    }
}

module.exports = { connectDb }