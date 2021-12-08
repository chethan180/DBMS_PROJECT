import mongoose from "mongoose";

const MessRemarksSchema = mongoose.Schema({
    St_Id: { type: String, required:  true  },
    Rating: { type:Number, required: true },
    Remarks: { type: String, required: true },
    Date_Of_Issue: { type: String, required: true },
});

export default mongoose.model("mess_remarks", MessRemarksSchema);