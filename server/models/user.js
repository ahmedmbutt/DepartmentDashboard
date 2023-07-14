import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  role: {
    type: String,
    enum: ["faculty", "student", "admin"],
    default: "student",
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
