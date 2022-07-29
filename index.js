const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
app.use(cors);
const apiData = require("./data.json")
app.get("/", (req, res) => {
    res.send("Server is  Live");
});
app.get("/services", (req, res) => {
    res.send(apiData);
})
app.listen(port, () => {
    console.log('i am live');
});
