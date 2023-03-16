import mongoose from "mongoose";


const GraduationTrackerSchema = new mongoose.Schema(
    {
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
          },
          graduationRequirementId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'GraduationReqt',
            required: true,
          },
          coursesCompleted: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course',
          }],
    }
  );


  export default mongoose.model("GraduationTracker", GraduationTrackerSchema);