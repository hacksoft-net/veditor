const express = require("express");
const path = require("path");
const app = express();
const port = 3000;


app.get("/", (req, res) => {
    let path = path.join(__dirname, "/pages/index.html");
    res.sendFile(path);
});
app.use(express.static("public"));
app.listen(port);