let today = new Date();

let year = today.getFullYear();
let month = ('0' + (today.getMonth() + 1)).slice(-2);
let day = ('0' + today.getDate()).slice(-2);
let data = `${year}${month}${day}`
data = Number(data)
let hours = ('0' + today.getHours()).slice(-2);
const url = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=VLRChp1oR%2BEhpUBq2PAX%2FrEubZIdjeV03oECYaWYrrEtF1XAlKd9iba%2FcLlkprU0aSTNw%2FD5WZkHNUhBEacrXQ%3D%3D&pageNo=1&numOfRows=12&dataType=json&base_date="+data+"&base_time=0500&nx=38&ny=128"

let weather_temperature = document.querySelector(".local-weather-now-temperature")
let weather_humidity = document.querySelector(".local-weather-now-humidity")
let weather_today = document.querySelector(".local-weather-today-now")

const api  = async ()  => {
    await fetch(url)
    .then(res => res.json())
    .then(console.log(url))
    .then(res => {weather_temperature.innerHTML = `현재 기온 ${res["response"]["body"]["items"]["item"][0]["fcstValue"]}도`})
    await fetch(url)
    .then(res => res.json())
    .then(res => {weather_humidity.innerHTML = `현재 습도 ${res["response"]["body"]["items"]["item"][10]["fcstValue"]}%`})
    await fetch(url)
    .then(res => res.json())
    .then(res => {
          if(res["response"]["body"]["items"]["item"][6]["fcstValue"] == 0){
            if(res["response"]["body"]["items"]["item"][5]["fcstValue"] == 1){
                weather_today.innerHTML = `현재 날씨 : 맑음`
            }else if(res["response"]["body"]["items"]["item"][5]["fcstValue"] == 3){
                weather_today.innerHTML = `현재 날씨 : 구름 많음`
            }else if(res["response"]["body"]["items"]["item"][5]["fcstValue"] == 4){
                weather_today.innerHTML = `현재 날씨 : 흐림`
            }
          }else if(res["response"]["body"]["items"]["item"][6]["fcstValue"] == 1){
            weather_today.innerHTML = `현재 날씨 : 비`
          }else if(res["response"]["body"]["items"]["item"][6]["fcstValue"] == 2){
            weather_today.innerHTML = `현재 날씨 : 비/눈`
          }else if(res["response"]["body"]["items"]["item"][6]["fcstValue"] == 3){
            weather_today.innerHTML = `현재 날씨 : 눈`
          }else if(res["response"]["body"]["items"]["item"][6]["fcstValue"] == 4){
            weather_today.innerHTML = `현재 날씨 : 소나기`
          }else{
            weather_today.innerHTML = `error`
          }
        })
}
api()