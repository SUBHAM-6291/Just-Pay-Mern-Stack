import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  profilePic: { type: String, default: "" },
  coverPic: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Create the model
const User = mongoose.models.User || model("User", userSchema);

export default User;
