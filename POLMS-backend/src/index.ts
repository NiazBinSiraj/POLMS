import * as express from "express";
import * as bodyParser from "body-parser";
import "reflect-metadata";
import { createConnection } from "typeorm";

const port = 4201;
const app = express();
app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }));

createConnection().then(async connection =>{
    app.listen(port, () => {
        console.log("Server is running on port", port);
    });
}).catch((err) => {
    console.log("Unable to connect to db", err);
    process.exit(1);
});
