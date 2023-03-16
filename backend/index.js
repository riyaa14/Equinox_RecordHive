
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user.js";
import semesterRouter from "./routes/semester.js";
import courseRouter from "./routes/course.js";
import transcriptRouter from "./routes/transcript.js";
import graduationReqtRouter from "./routes/graduationReqt.js";


const app = express();
dotenv.config();

mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("MongoDB connected");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));


// app.use(
//   cors({
//     origin: "*",
//   })
// );
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use("/api/user", userRouter);
app.use("/api/semester", semesterRouter);
app.use("/api/course", courseRouter);
app.use("/api/transcript", transcriptRouter);
app.use("/api/gr", graduationReqtRouter);



app.listen(process.env.PORT, () => {
  connect();
  console.log("Listening PORT...");
});