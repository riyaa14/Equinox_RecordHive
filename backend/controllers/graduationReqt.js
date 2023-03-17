import User from "../models/User.js";
import GraduationReqt from "../models/GraduationReqt.js";
import ApiFeatures from "../utils/apiFeatures.js";

//Create Graduation Requirement
export const createGR = async (req, res) => {
  try {
    //console.log(req.body);
    const newGRData = {
      name: req.body.name,
      creditsRequired: req.body.creditsRequired,
      courses: req.body.courses,
    };

    const gr = await GraduationReqt.create(newGRData);

    res.status(201).json({
      success: true,
      message: "Created",
      gr,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
