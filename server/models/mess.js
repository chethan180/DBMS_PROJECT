import mongoose from "mongoose";

const MessSchema = mongoose.Schema({
    Emp_Id: { type: String, required:  true  },
    Date_Of_Issue: { type: String, required: true },
    Remarks: { type: String, required: true },
});

export default mongoose.model("mess", MessSchema);