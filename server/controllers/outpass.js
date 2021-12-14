import Outpass from "../models/outpass.js";

//TOKEN , ASN_DATE , HTNO , STUDENT_NAME ,BLOCK , ROOM , FROM , TO , REASON , APPROVED , USED , BATCH

// var token = 0;

export const createOutpass = async (req, res) => {
  const { HTNO,  BLOCK, ROOM, FROM, TO, REASON } = req.body;
try{
    const pass = {
        ASN_DATE: Date.now(),
        HTNO,
        // STUDENT_NAME,
        BLOCK,
        ROOM,
        FROM,
        TO,
        REASON,
        APPROVED: "",
        USED: "False"
        // BATCH 
      }
    
      const x = await Outpass.create( pass);
    
    //   token = token + 1 ;
    
      return res.json(x).status(200)
}
catch(error){
    console.log(error.message);
    return res.status(500).json({message : error.message});
}


}



// module.exports = {
//     createOutpass : createOutpass
// }