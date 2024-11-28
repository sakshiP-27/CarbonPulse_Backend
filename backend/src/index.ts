import bodyParser from "body-parser";
import express, { Express } from "express";

import apiRouter from "./routes";
import serverConfig from "./config/serverConfig";

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.text());

app.use("/api", apiRouter);

app.listen(serverConfig.PORT, () => {
    console.log(`Server started at PORT ${serverConfig.PORT}`);
});