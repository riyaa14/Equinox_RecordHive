import User from "../models/User.js";
import GraduationReqt from "../models/GraduationReqt.js";
import ApiFeatures from "../utils/apiFeatures.js";
import GraduationTracker from "../models/GraduationTracker.js";
import Course from "../models/Course.js";

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

// Get Graduation Tracker of a particular student
export const getGraduationTrackerByStudentId = async (req, res) => {
  const studentId = req.params.sid;
  console.log(studentId);

  try {
    const graduationTracker = await GraduationTracker.find({
      studentId: studentId,
    })
      .populate("graduationRequirementId")
      .populate("coursesCompleted");

    if (!graduationTracker) {
      return res.status(404).json({ error: "Graduation tracker not found" });
    }

    console.log(graduationTracker);

    const requiredCoursesIds = graduationTracker
      .map((document) => document.graduationRequirementId.courses)
      .flat();

    const coursesCompleted = graduationTracker[0].coursesCompleted;

    console.log(requiredCoursesIds);
    console.log(coursesCompleted);

    // Check if all required courses are completed

    const requiredCourseIds = requiredCoursesIds.map((course) =>
      course.toString()
    );
    const completedCourseIds = coursesCompleted.map((course) =>
      course._id.toString()
    );

    console.log(requiredCourseIds);
    console.log(completedCourseIds);

    if (
      requiredCourseIds.every((courseId) =>
        completedCourseIds.includes(courseId)
      )
    ) {
      // All required courses are completed
      res.json({ success: true, message: "All courses done" });
    } else {
      // Some required courses are not completed
      const missingCourseIds = requiredCourseIds.filter(
        (courseId) => !completedCourseIds.includes(courseId)
      );
      const missingCourses = await Promise.all(
        missingCourseIds.map((courseId) => Course.findById(courseId))
      );
      const missingCourseNames = missingCourses.map((course) => course.name);
      res.json({
        success: true,
        message: `Incomplete: ${missingCourseNames.join(", ")}`,
      });
      // res.json({
      //   success: true,
      //   message: "Courses missing",
      // });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server error" });
  }
};
