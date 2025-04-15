import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phoneNumber: String,
});

export default mongoose.models.Form || mongoose.model("Form", FormSchema);
