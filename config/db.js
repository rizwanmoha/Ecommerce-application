import mongoose from 'mongoose'

const connectDB = async() =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected To MongoDB database ${conn.connection.host}`);
    }catch(error){
        console.log(`Error in MongoDB ${error}`)
    }
}
export default connectDB;