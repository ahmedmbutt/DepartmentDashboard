import Student from "../models/student.js";
// import Faculty from "../models/faculty.js";
import Admin from "../models/admin.js";
import Notification from "../models/notification.js";

export const login = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    switch (role) {
      case "student":
        const user = await Student.findOne({ username });
        !user && res.status(401).json({ error: error.message });
        user.password === password
          ? res.status(200).json(user)
          : res.status(401).json({ error: error.message });
        break;

      // case "faculty":
      // loginToDashboard(Faculty, username, password);

      case "admin":
        const admin = await Admin.findOne({ username });
        !admin && res.status(401).json({ error: error.message });
        admin.password === password
          ? res.status(200).json(admin)
          : res.status(401).json({ error: error.message });
        break;

      default:
        res.status(401).json({ error: error.message });
        break;
    }
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export const getNotification = async (req, res) => {
  try {
    const notification = await Notification.find({}).sort({ time: -1 });
    res.status(200).json(notification);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
