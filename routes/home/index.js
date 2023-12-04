
const express = require("express")
const router = express.Router()

let siteData = 0;

const url = "http://openapi.seoul.go.kr:8088/4645426745646f6335377173626443/JSON/ListAirQualityByDistrictService/1/25/";
const api  = () => {
   const a = fetch(url) 
  .then(res => res.json()) // .json() 메서드는 JSON 응답을 JavaScript 객체 리터럴로 구문분석합니다.
  .then(res => res["ListAirQualityByDistrictService"]["row"][0]["PM25"])

  return {PM : a["ListAirQualityByDistrictService"]}
}
  // .catch(console.log);
  // .then((data) => siteData = data["ListAirQualityByDistrictService"]["row"][0]["PM25"]);
api()

  
module.exports = router;