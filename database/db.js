import mongoose from 'mongoose';  //It is a special library which helps us to connect the MongoDB with the server


// Mongoose has a special fxn called "connect" using which we can make connection with the MongoDB



const connect = async (URL) => {

    // const URL = `mongodb+srv://${userName}:${password}@cluster0.vizhg6m.mongodb.net/?retryWrites=true&w=majority`;
    // const URL = `mongodb+srv://aniket:aniket@cluster0.vizhg6m.mongodb.net/?retryWrites=true&w=majority`;


    try{
         await mongoose.connect(URL, {useNewUrlParser: true});
         console.log("Server is connected to the DB");
    } catch(error){
        console.log("Error while connecting with the database ",error);
    }
}

export default connect;