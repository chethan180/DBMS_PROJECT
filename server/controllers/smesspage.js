import staff from "../models/staff.js";
import mess_remarks from "../models/mess_remarks.js";

export const sm = 
    async (req,res) => {
    const x = req.body;
    try{
        const z = x.Emp_Id;
        const oldStaff = await staff.findOne({ 'Emp_Id': x.Emp_Id });
        console.log(oldStaff);
        if (!oldStaff) return res.status(404).json({message : "User dosen't exist"});
        const Dateof = await mess_remarks.findOne({Emp_Id : x.Emp_Id , noon : x.noon , Date_Of_Issue : x.Date_Of_Issue});
        if(Dateof){
            Dateof.Rating = x.Rating;
            Dateof.Remarks = x.Remarks;
            Dateof.save();
            return res.status(200).json(Dateof);
        }

        else{
        const result = await mess_remarks.create({Emp_Id : x.Emp_Id ,Rating : x.Rating ,noon : x.noon , Remarks : x.Remarks , Date_Of_Issue : x.Date_Of_Issue });
        // console.log(result);
        return res.status(200).json(result);
        }
        // const result = await leave.find({ 'Emp_Id': x.Emp_Id }).exec();


    }
    catch(error){
        res.status(500).json({message :error.message});
    }
}
