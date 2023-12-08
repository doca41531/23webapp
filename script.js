"use strict"

import express from "express";
const app = express()
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", "./views")
app.set("view engine", "ejs")

app.get("https://port-0-node-express-dr3h12alpwsgmv9.sel4.cloudtype.app/", (req,res) => {
    res.render("home/main")
})
app.get("2023webapp/seoul", (req,res) => {
    res.render("home/seoul")
})
app.get("2023webapp/busan", (req,res) => {
    res.render("home/busan")
})
app.get("2023webapp/chungcheongbukdo", (req,res) => {
    res.render("home/chungcheongbukdo")
})
app.get("2023webapp/chungcheongnamdo", (req,res) => {
    res.render("home/chungcheongnamdo")
}) 
app.get("2023webapp/daegu", (req,res) => {
    res.render("home/daegu")
})
app.get("2023webapp/Daejeon", (req,res) => {
    res.render("home/Daejeon")
})
app.get("2023webapp/gangwondo", (req,res) => {
    res.render("home/gangwondo")
})
app.get("2023webapp/gwangju", (req,res) => {
    res.render("home/gwangju")
})
app.get("2023webapp/gyeonggido", (req,res) => {
    res.render("home/gyeonggido")
})
app.get("2023webapp/gyeongsangbukdo", (req,res) => {
    res.render("home/gyeongsangbukdo")
})
app.get("2023webapp/gyeongsangnamdo", (req,res) => {
    res.render("home/gyeongsangnamdo")
})
app.get("2023webapp/jejudo", (req,res) => {
    res.render("home/jejudo")
})
app.get("2023webapp/Incheon", (req,res) => {
    res.render("home/Incheon")
})
app.get("2023webapp/jeollabukdo", (req,res) => {
    res.render("home/jeollabukdo")
})
app.get("2023webapp/jeollanam_do", (req,res) => {
    res.render("home/jeollanamdo")
})
app.get("2023webapp/sejong", (req,res) => {
    res.render("home/sejong")
})
app.get("2023webapp/ulsan", (req,res) => {
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