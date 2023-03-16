import mongoose from "mongoose";


const SemesterSchema = new mongoose.Schema(
    {
      semNo: {
        type: String,
        required: [true, "Please enter semester Number"],
      },
      semStart: {
          type: String,
          required: [true, "Please enter semester starting date"],
      },
      semEnd: {
        type: String,
        required: [true, "Please enter semester ending date"],
    },
    courses: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course",
        },
      ],
      semType:{
        type:String,                  //odd/even sem
      }
    },
  );


  export default mongoose.model("Semester", SemesterSchema);