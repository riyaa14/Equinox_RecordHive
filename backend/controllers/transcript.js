import User from "../models/User.js";
import Transcript from "../models/Transcript.js";
import ApiFeatures from "../utils/apiFeatures.js";
import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

//Generate Unofficial Transcript --- student
export const generateUnofficialTranscript = async (req, res) => {
  try {
    const student = await User.findById(req.user.id).populate({
      path: "courseTrack",
      populate: {
        path: "course",
        match: { semesterId: req.params.semeId },
      },
    });

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    //console.log(student)
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const stack = [];

    for (let i = student.courseTrack.length - 1; i >= 0; i--) {
      const course = student.courseTrack[i].course;
      const creditSecured = student.courseTrack[i].creditSecured;
      const marks = student.courseTrack[i].marks;

      stack.push({ course, creditSecured, marks });
    }
    //console.log(stack);

    const totalCredits = student.courseTrack.reduce(
      (total, course) => total + course.creditSecured,
      0
    );
    let gpa = 0;
    while (stack.length > 0) {
      const item = stack.pop();
      const marks = item.marks;
      const marksNumber = marksToNumber(marks);

      gpa += (item.creditSecured / totalCredits) * marksNumber;
    }

    //console.log(student.courseTrack);
    const transcript = new Transcript({
      studentId: student.id,
      courseId: student.courseTrack.map((item) => item.course._id),
      semesterId: req.params.semesterId,
      message: req.body.message,
    });

    // Save the transcript to the database
    await transcript.save();

    const ss = await User.findById(student._id);
    ss.transcript.unshift(transcript._id);
    await ss.save();

    // Create a new PDF document
    const doc = new PDFDocument();

    const fileName = `${student.name.replace(" ", "_")}_transcript.pdf`;
    //const filePath = path.join(__dirname, '..', 'public', 'pdf', fileName);
    const filePath =
      "C:/Users/deepak kumar/OneDrive/Documents/GitHub/SMP/public/pdf/";

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);

    doc.pipe(res);

    // Add student information to the PDF
    doc.fontSize(20).text(`${student.name} Transcript`, { align: "center" });
    doc.moveDown();
    doc.fontSize(12).text(`Enrollment Number: ${student.enrollNo}`);
    doc.moveDown();
    doc.fontSize(12).text(`GPA: ${gpa.toFixed(2)}`);

    // Add course information to the PDF
    doc.moveDown();
    doc.fontSize(14).text("Courses");
    doc.moveDown();
    for (let i = 0; i < student.courseTrack.length; i++) {
      const item = student.courseTrack[i];
      doc
        .fontSize(12)
        .text(
          `${i + 1}. ${item.course.name} (${item.course.code}) - ${item.marks}`
        );
      doc.moveDown();
    }

    // End the PDF document and save it to the file system
    doc.end();
    doc.on("end", () => {
      // Send the file as a response
      const stream = fs.createReadStream(filePath);
      stream.pipe(res);
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

//Request Official Transcript --- student
export const requestOfficialTranscript = async (req, res) => {
  try {
    const student = await User.findById(req.user._id);

    const transcript = new Transcript({
      studentId: student._id,
      courseId: student.courseTrack.map((item) => item.course._id),
      semesterId: req.params.semesterId,
      status: "official",
      issuedAt: new Date(),
      message: req.body.message,
    });

    await transcript.save();

    res.status(201).json({
      success: true,
      message: "Request Send for Official Transcript",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//Get All Student Requests for Official transcripts
export const getAllStudentTranscripts = async (req, res) => {
  const apiFeatures = new ApiFeatures(
    Transcript.find({ status: "official" }),
    req.query
  );
  try {
    const transcript = await apiFeatures.query;
    //const users = await User.find();
    res.status(200).json({
      success: true,
      transcript,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
