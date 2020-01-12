const express = require("express");
require("dotenv").config({ path: "../.env" });
const app = express();
app.use(express.urlencoded());
app.use(express.json());
app.use('/', express.static('./src'));

app.use("/", require("./route"));
app.enable("trust proxy");

const port = process.env.PORT || 4000;

app.listen(port, "0.0.0.0");
