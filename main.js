const express = require('express')
const app = express()
const path = require("path")

app.use(express.urlencoded({extended: false}))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

function getWeather(req, res, next){
    req.visitorWeather = false
    next()
}

app.get('/', getWeather, (req, res) => {
    res.render("home", {
        isRaining: req.visitorWeather
    })
})


app.get('/about', getWeather, (req, res) => {
    res.send("About Page")
})

app.post("/result", (req,res) => {
    if(req.body.color.trim().toUpperCase() === "BLUE"){
        res.send("Correct")
    } else {
        res.send("incorrect")
    }
})


app.listen(3000)