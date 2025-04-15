import connectDB from "@/util/connectDB";
import form from "@/models/form";

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.json();

    const newForm = new form(data);
    await newForm.save();

    return Response.json({ message: "Form submitted successfully!" });
  } catch (err) {
    return Response.json({ message: "Submission failed!", error: err }, { status: 500 });
  }
}
