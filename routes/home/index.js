
const express = require("express")
const router = express.Router()
const request = require('request');

let site_data;

const url = "http://openapi.seoul.go.kr:8088/4645426745646f6335377173626443/JSON/ListAirQualityByDistrictService/1/25/";
fetch(url)
  .then(res => res.json()) // .json() 메서드는 JSON 응답을 JavaScript 객체 리터럴로 구문분석합니다.
  .then(data => site_data = data["ListAirQualityByDistrictService"]["row"]["MSRSTENAME"]);
  //

  console.log(site_data);



module.exports = router;