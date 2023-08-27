import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
dotenv.config();

const { PORT, DB_URI } = process.env;

app.use(cors())
app.use(express.json());

mongoose.connect(`${DB_URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "KaiCoffee",
})
  .then(() => {
    
    console.log("Database connection established!");
    app.use("/", router);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
    .catch((error) => {
      console.error("Database connection error:", error);
    });

