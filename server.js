const express = require("express");
const busboy = require("busboy");
const fs = require("fs")
const ass = express()

const port = 8000

ass.get("/", (req, res)=>{
    const html = fs.createReadStream(__dirname + "/landing/landing.html")
    res.writeHead(200, {"Content-Type": "text/html"});
    html.pipe(res)
});

ass.listen(port, () => console.log(`eating ass on port ${port}`));