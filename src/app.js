const express = require("express");
const app = express();
const port = process.env.port || 8000;
const path = require("path");
const hbs = require("hbs");
const StatPage = path.join(__dirname, "../public")
const viewspath = path.join(__dirname, "../templates/views")
const partiaPlsath = path.join(__dirname, "../templates/partials")

app.use(express.static(StatPage))
app.set("view engine", "hbs")
app.set("views", viewspath);
hbs.registerPartials(partiaPlsath);
app.get("/", (req, res)=>{
    res.render("index")
});
app.get("/about", (req, res)=>{
    res.render("about")
});
app.get("/weather", (req, res)=>{
    res.render("weather")
});
app.get("*", (req, res)=>{
    console.log(req.url)
    res.render("404",{
        errormsg: `Oops ${req.url} Not Found`
    })
});








// Server Setup

app.listen(port, ()=>{
    console.log("Server is Running");
})