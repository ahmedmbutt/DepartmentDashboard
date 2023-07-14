import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  time: {
    type: Date,
    default: Date.now(),
  },
});

const Notification = mongoose.model("Notification", NotificationSchema);

export default Notification;
