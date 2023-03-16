import User from "../models/User.js";
import Course from "../models/Course.js";
import GraduationTracker from "../models/GraduationTracker.js";
import GraduationReqt from "../models/GraduationReqt.js";
import ApiFeatures from "../utils/apiFeatures.js";



//Create Course --- admin
export const createCourse = async (req,res) => {
    try{
      const newCourseData = {
        desc: req.body.desc,
        name: req.body.name,
        code: req.body.code,
        credit: req.body.credit,
      };
  
      const course = await Course.create(newCourseData);
  
      res.status(201).json({
        success: true,
        message: "Course created",
        course
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
};




//Delete Course ---admin
export const deleteCourse = async (req,res) => {
    try {
        const course = await Course.findById(req.params.courseId);
    
        if (!course) {
          return res.status(404).json({
            success: false,
            message: "Course not found",
          });
        }
    
        await course.remove();
    
        res.status(200).json({
          success: true,
          message: "Course deleted",
        });
    } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
    }
};



//Edit Course Details --- admin
export const updateCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.courseId);
    
        const { desc, name , code, credit } = req.body;

        if (!course) {
            return res.status(404).json({
              success: false,
              message: "Course not found",
            });
        }
    
        if (desc) {
          course.desc = desc;
        }
        if (name) {
          course.name = name;
        }
        if (code) {
            course.code = code;
        }
        if (credit) {
          course.credit = credit;
        }

        await course.save();
        res.status(200).json({
          success: true,
          message: "Course Edited",
          post
        });
    } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
    }
};


//GetAll Courses --- admin
export const getallCourses= async (req,res)=>{
    const apiFeatures = new ApiFeatures(Course.find(), req.query).search().filter();
    try{
      const courses = await apiFeatures.query;
        //const users = await User.find();
        res.status(200).json({
          success: true,
          courses,
        });
    } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
    }
};


//Get Single Course ---admin
export const getCourse = async (req, res) => {
  try {
    const course = await Semester.findById(req.params.id);
    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }
    res.status(200).json({
      success: true,
      course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


//add course to student's course track
export const addCourse = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const course = await Course.findById(req.params.courseId);

    const courseIndex = user.courseTrack.findIndex(c => c.course.toString() === req.params.courseId);

    if (courseIndex !== -1) {
      return res.status(400).json({msg: 'Course already exists in student course track'});
    }



    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Add course to user's course track
    user.courseTrack.push({
      course: course._id,
      marks: 0,
      creditSecured: 0,
      semesterId: req.body.semesterId
    });

    await user.save();

    return res.status(200).json({
        success: true,
        res: user.courseTrack,
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


//remove course from student's course track
export const removeCourse = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

const courseIndex = user.courseTrack.findIndex(c => c.course.toString() === req.params.courseId);

if (courseIndex === -1) {
  return res.status(400).json({msg: 'Course does not exist in student course track'});
}

user.courseTrack.splice(courseIndex, 1);

await user.save();

    return res.status(200).json({
        success: true,
        res: user.courseTrack,
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



//calculate gpa
export const gpaCalc = async (req, res) => {
  try {
    const user = await User.findById(req.params.sid).populate('courseTrack.course');
    
    ///////////////////////////////////////////////////////////////////////////////////////////////
    const stack = [];
    let totalCredits = 0;
    let totalMarksPoints = 0;

    for (let i = 0; i < user.courseTrack.length; i++) {
      const course = user.courseTrack[i].course;
      const marks = user.courseTrack[i].marks;
      const creditSecured = user.courseTrack[i].creditSecured;

      if (marks !== 0 && creditSecured > 0) {
        stack.push({
          marks: marks,
          credit: course.credit,
        });

        totalCredits += course.credit;
        totalMarksPoints += (marksToNumber(marks) * course.credit);
      }
    }

    let gpa = 0;

    while (stack.length > 0) {
      const item = stack.pop();
      const marksPoint = marksToNumber(item.marks);

      gpa += (item.credit / totalCredits) * marksPoint;
    }

    gpa = gpa.toFixed(2);


    return res.status(200).json({
        success: true,
        gpa: gpa,
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
function marksToNumber(marks) {
    if (marks >= 90) {
        return 10;
      } else if (marks >= 80 && marks < 90) {
        return 9;
      } else if (marks >= 70 && marks < 80) {
        return 8;
      } else if (marks >= 60 && marks < 70) {
        return 7;
      } else if (marks >= 45 && marks < 60) {
        return 6;
      } else if (marks >= 40 && marks < 45) {
        return 4;
      } else {
        return 0;
      }
}



//add marks of student for each course
export const addStudentMarks = async (req, res) => {
    const { courseId, marks, creditSecured } = req.body;
    const userId = req.params.sid;
  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "Student not found" });
    }
    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    const courseIndex = user.courseTrack.findIndex((course) => course.course.toString() === courseId);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (courseIndex >= 0) {
      user.courseTrack[courseIndex].marks = marks;
      user.courseTrack[courseIndex].creditSecured = creditSecured;
    } else {
      user.courseTrack.push({
        course: courseId,
        marks: marks,
        creditSecured: creditSecured,
      });
    }
    await user.save();

    // Update GraduationTracker if student has completed enough credits for the course
    const graduationReqt = await GraduationReqt.findOne({
      courses: courseId,
    });

    //console.log(graduationReqt);
    if (graduationReqt && user.courseTrack[courseIndex].creditSecured >= graduationReqt.creditsRequired) {
      const graduationTracker = await GraduationTracker.findOne({
        studentId: userId,
        graduationRequirementId: graduationReqt._id,
      });

      if (!graduationTracker) {
        await GraduationTracker.create({
          studentId: userId,
          graduationRequirementId: graduationReqt._id,
          coursesCompleted: [courseId],
        });
      } else {
        graduationTracker.coursesCompleted.push(courseId);
        await graduationTracker.save();
      }
    }

    return res.status(200).json({
        success: true,
        message: "Course marks added",
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};