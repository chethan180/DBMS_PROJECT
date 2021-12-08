import mongoose from "mongoose";

const WardenUpdatesSchema = mongoose.Schema({
    W_Id: { type: String, required:  true  },
    Comments: { type: String, required: true },
    Date_Of_Issue: { type: String, required: true },
});

export default mongoose.model("warden_updates", WardenUpdatesSchema);