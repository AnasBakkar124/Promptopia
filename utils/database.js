import mongoose from "mongoose";

let isConnected = false;  //track the connection status


export const connectToDB = async () => {
    mongoose.set('strictQuery', true)
    if (isConnected) {
        console.log('MongoDb is already Connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbname: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        isConnected = true
        console.log('MondoDB connected')
    } catch (error) {
        console.log(error)
    }
}