import mongoose from "mongoose";

const hstdetailsSchema = mongoose.Schema({
    Emp_Id: { type: String, required:  true  },
    Staff_Name: { type: String, required: true },
    Batch: { type: String, required: true },
    Block : {type :String } ,
    Room : {type :String } 
});

export default mongoose.model("hstdetails", hstdetailsSchema );


