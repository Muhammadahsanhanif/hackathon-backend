import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["student", "teacher", "admin"],
    default: "student",
  },

}, {
  timestamps: true, 
});

const userModel = mongoose.model("Users", userSchema);

export default userModel;
