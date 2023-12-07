"use strict"

import express from "express";
const app = express()
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", "./views")
app.set("view engine", "ejs")

app.get("/", (req,res) => {
    res.render("home/main")
})
app.get("/seoul", (req,res) => {
    res.render("home/seoul")
})

// import home from "./public/js/home"

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

// app.use("/", home); // use == 미들 웨어를 등록해주는 메서드

app.listen(3001, () => {
    console.log("서버가동")
})

export default app;