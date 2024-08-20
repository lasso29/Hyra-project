import mongoose from "mongoose";
import 'dotenv/config'; // Automatically loads environment variables

let connected = false;

export const dbConnection = async () => {
  mongoose.set('strictQuery', true); // Optional: removes deprecation warning
  if (connected) {
    console.log('MongoDB is already connected...');
    return;
  }
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    connected = true;
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1); // Optional: exit process on connection failure
  }
};

export default dbConnection;
