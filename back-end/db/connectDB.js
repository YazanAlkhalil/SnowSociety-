import mongoose from "mongoose";

async function connectDB(MONGO_URL){
  try {
    await mongoose.connect(MONGO_URL)
    console.log('MONGO CONNECTED!');
  } catch (error) {
    console.log(error.message);
  }
}

export default connectDB