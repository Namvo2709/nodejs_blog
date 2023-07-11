import mongoose from "mongoose";

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/f8_education_dev");
    console.log("connect successfully");
  } catch {
    console.log("connect failure");
  }
}

export { connect };
