import staff from "../models/staff.js";
import hst_complaints from "../models/hst_complaints.js";
import hst_details from "../models/hst_details.js";

export const empty = async (req,res) => {
    const x = req.body;
    try{

        // const result = await hst_complaints.create({Emp_Id : x.Emp_Id ,Sroom : x.Sroom ,Sblock : x.Sblock , Type : x.Type ,Complained_Date : x.Complained_Date, Comments : x.Comments });
        const cnt = await hst_details.aggregate(
            [
                {$match : { }},
                {$group : {_id : "$Room", "count" : {$sum : 1}}},
            ]);
        
        // console.log(result);
        // const cnti =  cnt.filter(
        //     [

        //     ]);
        return res.status(200).json(cnt);

        // const result = await leave.find({ 'Emp_Id': x.Emp_Id }).exec();


    }
    catch(error){
        res.status(500).json({message :error.message});
    }
}
