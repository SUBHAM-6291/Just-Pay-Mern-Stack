import mongoose from "mongoose";
import { Schema, model } from "mongoose";

// Define Payment Schema
const paymentSchema = new Schema({
  name: { type: String, required: true },        // Name of the payer
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User model
  message: { type: String, default: "" },       // Optional message
  amount: { type: Number, required: true },     // Payment amount
  createdAt: { type: Date, default: Date.now }, // Payment creation timestamp
  updatedAt: { type: Date, default: Date.now }, // Last updated timestamp
  done: { type: Boolean, default: false }       // Status of payment (completed or not)
});

// Create Payment Model
const Payment = mongoose.models.Payment || model("Payment", paymentSchema);

export default Payment;
