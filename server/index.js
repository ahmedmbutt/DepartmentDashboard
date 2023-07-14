import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/user.js";
import facultyRoutes from "./routes/faculty.js";
import studentRoutes from "./routes/student.js";
import adminRoutes from "./routes/admin.js";

// import Admin from "./models/admin.js";
// import { dataAdmin } from "./data/index.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/user", userRoutes);
app.use("/faculty", facultyRoutes);
app.use("/student", studentRoutes);
app.use("/admin", adminRoutes);

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
      // Admin.create(dataAdmin);
    });
  })
  .catch((error) => {
    console.log(error);
  });
