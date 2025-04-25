import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const ConnectionDB = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`\n MongoDB connected to ${ConnectionDB.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1);
    }
}

export default connectDB;