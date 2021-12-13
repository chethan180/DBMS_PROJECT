import staff from "../models/staff.js";
import hst_complaints from "../models/hst_complaints.js"

export const hs = async (req,res) => {
    const x = req.body;
    try{
        const z = x.Emp_Id;
        console.log("x= " ,x);
        const oldStaff = await staff.findOne({ 'Emp_Id': x.Emp_Id });
        // const oldStaff = await staff.find();
        console.log(oldStaff);
        // return res.json(oldStaff);
        if (!oldStaff) return res.status(404).json({message : "User dosen't exist"});

        const result = await hst_complaints.create({Emp_Id : x.Emp_Id ,Sroom : x.Sroom ,Sblock : x.Sblock , Type : x.Type ,Complained_Date : x.Complained_Date, Comments : x.Comments });
        // console.log(result);
        return res.status(200).json(result);
        // const result = await leave.find({ 'Emp_Id': x.Emp_Id }).exec();


    }
    catch(error){
        res.status(500).json({message :error.message});
    }
}
