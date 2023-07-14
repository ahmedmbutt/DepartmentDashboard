import Student from "../models/student.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findOne({ id });
    res.status(200).json(student);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
