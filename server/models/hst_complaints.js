import mongoose from "mongoose";

const hst_complaints = mongoose.Schema({
    Emp_Id: { type: String, required:  true  },
    Sroom: { type: String, required: true },
    Sblock: { type: String, required: true },
    Type: { type: String, required: true },
    Comments: { type: String, required: true },
    Complained_Date : {type : String , required : true},
    is_Solved: { type: Boolean},
});

export default mongoose.model("hst_complaints", hst_complaints);