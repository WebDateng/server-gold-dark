import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Route from "./Route.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
mongoose.connect("mongodb+srv://webdateng:8ZhWCdYzT97xCGhI@undangan.r1mihqf.mongodb.net/gold-dark", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected..."));

app.use(cors());
app.use(express.json());
app.use(Route);

app.listen(process.env.PORT || 5000, () => console.log("Server up and running..."));
