import mongoose from "mongoose";


const TranscriptSchema = new mongoose.Schema(
    {
      studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
      },
      courseId: [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
      }],
      semesterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Semester',
      },
      status: {
        type: String,                                     //official or unofficial
        default: "unofficial",
      },
      issuedAt: {
        type: Date,
        default: Date.now,
      },
      message:{
        type:String,
        //required: [true, "Enter your reson for issuing transcript"],
      }
  
    }
  );


  export default mongoose.model("Transcript", TranscriptSchema);