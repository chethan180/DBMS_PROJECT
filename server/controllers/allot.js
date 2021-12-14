import staff from "../models/staff.js";
import hst_details from "../models/hst_details.js";

export const allotment = async (req,res) => {
    const x = req.body;
    try{
        const z = x.Emp_Id;
        console.log("x= " ,x);
        const oldStaff = await staff.findOne({ 'Emp_Id': x.Emp_Id });
        // if(oldStaff.Type !== "ADMIN"){
        //     return res.status(404).json({message : "User dosen't exist"});
        // }
        // const oldStaff = await staff.find();
        console.log(oldStaff);
        // return res.json(oldStaff);
        if (!oldStaff) return res.status(200).json({message : "room"});
        
        const room = await hst_details.find({ 'Room' : x.Room , 'Block' : x.Block  });
        console.log(room);
        // if(room.length > 1 ){ return res.status(404).json(room)};
        if(room.length > 1 ){ return res.status(200).json({message : "full"})};

        const result = await hst_details.create({Emp_Id : x.Emp_Id ,Staff_Name : oldStaff.Staff_Name ,Batch : oldStaff.Batch ,Room : x.Room ,Block : x.Block   });
        console.log("result" ,result);
        const xzc = [];
        xzc.push(result);
        console.log(xzc);

        const room2 = await hst_details.find({ 'Room' : x.Room , 'Block' : x.Block  });

        return res.status(200).json(room2);
        // // const result = await leave.find({ 'Emp_Id': x.Emp_Id }).exec();


    }
    catch(error){
        res.status(500).json({message :error.message});
    }
}
