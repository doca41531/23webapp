const url = "https://www.daegufood.go.kr/kor/api/tasty.html?mode=json&addr=%EC%A4%91%EA%B5%AC"
const local_wrap = document.querySelector(".restaurant-scroll-wrap")

const api3 = async () => {
    await fetch(url)
    .then(res => res.json())
    .then(res => {local_wrap.innerHTML = `<div class="local-restaurant-wrap"><div class="local-restaurant-info"><p class="local-restaurant-name">${res["data"][0]["BZ_NM"]}</p><p class="local-restaurant-address">${res["data"][0]["GNG_CS"]}</p><p class="local-restaurant-time">운영시간 : ${res["data"][0]["MBZ_HR"]}</p><p class="local-restaurant-weather">날씨 : 맑음 미세먼지 상태 : 보통</p><button class="local-restaurant-goWay">길찾기</button> </div></div>`})
}
api3()