import User from "../models/User.js";
import Semester from "../models/Semester.js";
import ApiFeatures from "../utils/apiFeatures.js";

//Create Semester --- admin
export const createSemester = async (req, res) => {
  try {
    const newSemesterData = {
      semNo: req.body.semNo,
      semStart: req.body.semStart,
      semEnd: req.body.semEnd,
      courses: null,
      semType: req.body.semType,
    };

    const sem = await Semester.create(newSemesterData);

    res.status(201).json({
      success: true,
      message: "Semester Added",
      sem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//Delete Semester ---admin
export const deleteSemester = async (req, res) => {
  try {
    const sem = await Semester.findById(req.params.semesterId);

    if (!sem) {
      return res.status(404).json({
        success: false,
        message: "Semester not found",
      });
    }

    await sem.remove();

    res.status(200).json({
      success: true,
      message: "Semester deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//Edit Semester Details --- admin
export const updateSemester = async (req, res) => {
  try {
    const sem = await Semester.findById(req.params.semesterId);

    const { semNo, semStart, semEnd, semType } = req.body;

    if (!sem) {
      return res.status(404).json({
        success: false,
        message: "Semester not found",
      });
    }

    if (semNo) {
      sem.desc = semNo;
    }
    if (semStart) {
      sem.semStart = semStart;
    }
    if (semEnd) {
      sem.semEnd = semEnd;
    }
    if (semType) {
      sem.semType = semType;
    }

    await sem.save();
    res.status(200).json({
      success: true,
      message: "Semester Edited",
      post,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//GetAll Semester --- admin
export const getallSemester = async (req, res) => {
  const apiFeatures = new ApiFeatures(Semester.find(), req.query)
    .search()
    .filter();
  try {
    const sems = await apiFeatures.query;
    //const users = await User.find();
    res.status(200).json({
      success: true,
      sems,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//Get Single Semester ---admin
export const getSemester = async (req, res) => {
  try {
    const sem = await Semester.findById(req.params.semesterId);
    if (!sem) {
      return res.status(404).json({
        success: false,
        message: "Semester not found",
      });
    }
    res.status(200).json({
      success: true,
      sem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
