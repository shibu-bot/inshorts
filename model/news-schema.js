import mongoose from "mongoose";

// inorder to validate our data according to our schema

// We are giving structure to the collection/table
const newSchema  = new mongoose.Schema({
    title : {
        type:String,
        required : true, 
    }, 
    author : {
        type:String,
        required : true,
    },
    description : {
        type:String,
        required : true,  
    },
    url : {
        type:String,
        required : true,
    
    },
    timestamp : {
        type:String,
        required : true,  
    },
    link : {
        type:String,
        required : true,  
    },
    publisher : {
        type:String,
        required : true,  
    }
});


// creating collection(table) with the specified schema
const News= mongoose.model("news", newSchema);

export default News;