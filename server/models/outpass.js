import mongoose from "mongoose";

// TOKEN , ASN_DATE , HTNO , STUDENT_NAME ,BLOCK , ROOM , FROM , TO , REASON , APPROVED , USED , BATCH 
const outPassSchema =  mongoose.Schema({
    ASN_DATE : {
        type : "String"
    },
    HTNO : {
        type : "String"
    },
    STUDENT_NAME : {
        type : "String"
    },
    BLOCK : {
        type : "String"
    },
    ROOM : {
        type : "String"
    },
    FROM : {
        type : "String"
    },
    TO : {
        type : "String"
    },
    REASON : {
        type : "String"
    },
    APPROVED : {
        type : "String"
    },
    USED : {
        type : "String"
    },
    BATCH : {
        type : "String"
    }
})

export default mongoose.model("Outpass" , outPassSchema)