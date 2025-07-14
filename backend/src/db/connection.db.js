import mongo from 'mongoose';

const connectDB = async () =>{
    try{
        await mongo.connect(process.env.MONGO_URI)
    } catch(err){
        process.exit(1); 
    }
}
export default connectDB;