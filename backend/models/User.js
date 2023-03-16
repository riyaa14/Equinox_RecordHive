import crypto from "crypto";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your First name"],
    },
    email: {
      type: String,
      required: [true, "Enter your EmailID"],
      unique: true,
      validate: [validator.isEmail, "Enter a valid Email"],
    },

    password: {
      type: String,
      required: [true, "Enter your Password"],
      minlength: [6, "Password should be greater than 6 characters"],
    },

    enrollNo: {
        type: Number,
        required: [true, "Enter your Enrollment Number"],
        unique: true,
        minlength: [10, "Enrollment number should not be less than 10 digits"],
        maxlength: [11, "Enrollment number should not be greater than 11 digits"],

    },
    branch: {
          type: String,      
    },
    graduation_year: {
        type: Number,         
    },
    courseTrack: [{
        semesterId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Semester",
        },
        course: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course",
        },
        marks: {
            type: Number,
        },
        creditSecured:{
            type: Number,
        }
    }],
    transcript:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Transcript"
        }
    ],
    role:{
        type: String,                             ///admin, student
        required: true,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 7);
  }

  next();
});

UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.generateToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
};

//Generating Password Reset Token
UserSchema.methods.getResetPasswordToken = function () {
  //Generating Tokeb
  const resetToken = crypto.randomBytes(20).toString("hex");
  //Hashing and adding resetPasswordToken to userSchema
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
  return resetToken;
};

export default mongoose.model("User", UserSchema);
