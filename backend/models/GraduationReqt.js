import mongoose from "mongoose";


const GraduationReqtSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
          },
          creditsRequired: {
            type: Number,
            required: true,
          },
          courses: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course',
          }],
    }
  );


  export default mongoose.model("GraduationReqt", GraduationReqtSchema);