import express from "express";
const app = express();
import bodyParser from "body-parser";

import {PORT} from './config/serverConfig.js';
import connect from './config/db-Config.js';
import v1ApiRoutes from './routes/index.js';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', v1ApiRoutes);

const startServer = async () => {
    app.listen(PORT, () => {
        console.log(`Server Started on ${PORT}`);
    });
    connect();
}

startServer();