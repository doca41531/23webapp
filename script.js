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
app.get("/busan", (req,res) => {
    res.render("home/busan")
})
app.get("/chungcheongbukdo", (req,res) => {
    res.render("home/chungcheongbukdo")
})
app.get("/chungcheongnamdo", (req,res) => {
    res.render("home/chungcheongnamdo")
}) 
app.get("/daegu", (req,res) => {
    res.render("home/daegu")
})
app.get("/Daejeon", (req,res) => {
    res.render("home/Daejeon")
})
app.get("/gangwondo", (req,res) => {
    res.render("home/gangwondo")
})
app.get("/gwangju", (req,res) => {
    res.render("home/gwangju")
})
app.get("/gyeonggido", (req,res) => {
    res.render("home/gyeonggido")
})
app.get("/gyeongsangbukdo", (req,res) => {
    res.render("home/gyeongsangbukdo")
})
app.get("/gyeongsangnamdo", (req,res) => {
    res.render("home/gyeongsangnamdo")
})
app.get("/jejudo", (req,res) => {
    res.render("home/jejudo")
})
app.get("/Incheon", (req,res) => {
    res.render("home/Incheon")
})
app.get("/jeollabukdo", (req,res) => {
    res.render("home/jeollabukdo")
})
app.get("/jeollanam_do", (req,res) => {
    res.render("home/jeollanamdo")
})
app.get("/sejong", (req,res) => {
    res.render("home/sejong")
})
app.get("/ulsan", (req,res) => {
    res.render("home/ulsan")
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