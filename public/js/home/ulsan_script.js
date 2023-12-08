const Daejeonurl = "https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=KPSLov8gfQ%2FH5CXnW0ZhjFMnEXhfVqo1Y62P2svRftGHlfiukyVPVRpk27VlCKHLVIQ8%2BqeBI9D3OHHuxUC%2FGw%3D%3D&returnType=json&numOfRows=1&pageNo=1&sidoName=%EB%8C%80%EC%A0%84&ver=1.0"
const density = document.querySelector(".local-fineDust-today-density");
const densityState = document.querySelector(".local-fineDust-today-state");

const api2 = async ()  => {
    let tatel = 0;
    await fetch(Daejeonurl)
        .then(res => res.json())
        .then(res => {
            
            if(res["response"]["body"]["items"][0]["pm10Value"] != "-" ){
                tatel += Number(res["response"]["body"]["items"][0]["pm10Value"])
            }
            console.log(tatel);
    })
    let atatel = tatel;
    density.innerHTML = `미세먼지 농도 : ${atatel} PM`
    if(atatel <= 15){
        densityState.innerHTML = `현재 미세먼지 상태 : 좋음`
    }else if (atatel > 16 && atatel <= 35){
        densityState.innerHTML = `현재 미세먼지 상태 : 보통`
    }else if (atatel > 36 && atatel <= 75){
        densityState.innerHTML = `현재 미세먼지 상태 : 나쁨`
    }else if (atatel >= 76){
        densityState.innerHTML = `현재 미세먼지 상태 : 매우나쁨`
    }
}
api2()