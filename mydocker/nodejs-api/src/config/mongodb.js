import { connect } from "mongoose";

const connectDB = async () => {
  try {

    await connect('mongodb://myuser:mypassword@172.18.1.2:27017/mydb');
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;