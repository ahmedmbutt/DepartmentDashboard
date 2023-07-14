import Notification from "../models/notification.js";

export const postNotification = async (req, res) => {
  try {
    const notification = req.body;
    const result = await Notification.create(notification);
    res.status(201).json(result)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
