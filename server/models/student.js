import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  institution: String,
  career: String,
  program: String,
  semester: String,
  email: String,
  phone: String,
  address: {
    house: String,
    street: String,
    area: String,
    city: String,
  },
  role: {
    type: String,
    enum: ["faculty", "student", "admin"],
    default: "student",
  },
});

const Student =
  mongoose.models.Student || mongoose.model("Student", StudentSchema);

export default Student;
