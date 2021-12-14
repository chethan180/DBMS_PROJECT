import staff from "../models/staff.js";
import mess_remarks from "../models/mess_remarks.js";

export const fd = async (req,res) => {
    const x = req.body;
    try{
        console.log(x.Date_Of_Issue);
        const z= x.noon;
        var data;
             data = await mess_remarks.find({ noon : x.noon ,Date_Of_Issue : x.Date_Of_Issue });
        let sum = 0;

        data.forEach((rev) => {
            let rating = parseFloat(rev.Rating);
            sum += rating;
          });

          const avg= sum / data.length;



        // const cnt = await mess_remarks.find();
        const cnt = await mess_remarks.aggregate(
            [
                {$match : { noon : x.noon,Date_Of_Issue : x.Date_Of_Issue  }},
                {$group : {_id : "$Rating", "count" : {$sum : 1}}},
            ]);
        const result  = {Bar : cnt , Avg : avg ,  review : data};

          return res.json(result);

    }
    catch(error){
        res.status(500).json({message :error.message});
    }
}

// db.purchase.aggregate(
//     [
//         {$match : {customer :{$in :["Mike" ,"Karen"]}}},
//         {$group : {_id : "$product" ,total : {$sum : "$total"}}},
            // {$sort : {total :-1}}
//     ]
// )


