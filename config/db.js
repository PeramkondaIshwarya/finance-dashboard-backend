const mongoose=require('mongoose');

const connectToDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connection successfully");

    }catch(e){
        console.log("MongoDB connection failed");
        process.exit(1);
    }
}

module.exports=connectToDB;