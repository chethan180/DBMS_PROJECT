import mongoose from "mongoose";

const WardenUpdatesSchema = mongoose.Schema({
    Emp_Id: { type: String },
    Batch: { type: String },
    Staff_Name: { type: String },
    Comments: { type: String, required: true },
    Date_Of_Issue: { type: String, required: true },
});

export default mongoose.model("warden_updates", WardenUpdatesSchema);