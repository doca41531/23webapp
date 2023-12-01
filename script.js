const express = require("express");
const app = express()

app.set("views", "./views")
app.set("view engine", "ejs")

app.get("/", (req,res) => {
    res.render("home/index")
})

const home = require("./routes/home")
app.use("/", home); // use == 미들 웨어를 등록해주는 메서드ㄴ

app.listen(3001, () => {
    console.log("서버가동")
})

module.exports = app