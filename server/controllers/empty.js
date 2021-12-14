import staff from "../models/staff.js";
import hst_complaints from "../models/hst_complaints.js";
import hst_details from "../models/hst_details.js";

export const empty = async (req,res) => {
    const x = req.body;
    try{
        const x = [];
        const cnt = await hst_details.aggregate(
            [
                {$match : { }},
                {$group : {_id : "$Room", "count" : {$sum : 1}}},
            ]);
            console.log(cnt);
            for (let i =0 ;i<cnt.length ;i++) {
                if(cnt[i].count==2)
                {
                    x.push(cnt[i]);
                    console.log(cnt[i]._id);
                }
              }
        // console.log(result);
        // const cnti =  cnt.filter(
        //     [

        //     ]);
        return res.status(200).json(x);

        // const result = await leave.find({ 'Emp_Id': x.Emp_Id }).exec();


    }
    catch(error){
        res.status(500).json({message :error.message});
    }
}
