import mongoose from 'mongoose';
import {URL} from './serverConfig.js';
const connect = async () => {
    await mongoose.connect(URL);
    console.log("Connected to DB Successfully...");
}

export default connect;