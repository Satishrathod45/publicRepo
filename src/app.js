const express=require('express');
const bodyParser = require("body-parser");
const router = require("./Routes/routes");
require("dotenv").config({ path: "./config/dot.env" });
const app = express();
require("./db/mongoose");
app.use(bodyParser.json());
app.use(router);
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
