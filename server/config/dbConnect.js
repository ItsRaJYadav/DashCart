import mongoose from "mongoose";
import chalk from "chalk";

const dbConnect = () => {
    if (mongoose.connection.readyState >= 1) {
        console.log(chalk.yellow("Database connection already established"));
        return;
    }
    mongoose.set("strictQuery", false); // Use mongoose instead of Mongoose
    mongoose.connect(process.env.DB_URL);
    console.log(chalk.green("Connected to database"));
};

export default dbConnect;
