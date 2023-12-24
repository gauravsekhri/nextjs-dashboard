import mongoose from "mongoose";

export async function connect() {
  try {
    //@ts-ignore
    mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URL);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Mongodb connected successfully!");
    });

    connection.on("error", () => {
      console.log("Mongodb connection error!");
    });
  } catch (err: any) {
    console.log("Something went wrong!");
    console.log(err);
  }
}
