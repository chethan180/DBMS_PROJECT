import hst_details from "../models/hst_details.js";


export const al = async (req,res) => {
    const x = req.body;
    try{
        const z = x.Emp_Id;
        console.log("x= " ,x);
        const oldrooms = await hst_details.findOne({ 'Block': x.Block , 'Room': x.Room});
        // const oldStaff = await staff.find();
        console.log(oldrooms);
        // return res.json(oldStaff);
        if (!oldrooms) return res.status(404).json({message : "Room doesn't exist"});

        // const result = await hst_allocation.create({Emp_Id : x.Emp_Id ,Sroom : x.Room ,Sblock : x.Block , Empty_rooms: x.Empty_rooms , Filled_rooms: x.Filled_rooms});
        // console.log(result);
        return res.status(200).json(oldrooms);
        // const result = await leave.find({ 'Emp_Id': x.Emp_Id }).exec();


    }
    catch(error){
        res.status(500).json({message :error.message});
    }
}