import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connect() {
  // try {
  //   mongoose.connect(`sample`);
  //   const connection = mongoose.connection;
  //   connection.on("connected", () => {
  //     console.log("MongoDB connected successfully");
  //   });
  //   connection.on("error", (err) => {
  //     console.log("MongoDB error" + err);
  //     process.exit();
  //   });
  // } catch (error) {
  //   console.log(error);
  // }
}
