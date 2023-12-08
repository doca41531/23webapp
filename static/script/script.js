const selectDown = document.querySelector('.map-select')
const selectUp = document.querySelector('.map-select-up')
const selectList = document.querySelector(".map-select-list")

selectDown.addEventListener('click',() => {
        selectList.className = "map-select-list"
        selectDown.className = "map-select hide"
        selectUp.className = "map-select-up"
})
selectUp.addEventListener('click',() => {
    selectList.className = "map-select-list hide"
    selectDown.className = "map-select"
    selectUp.className = "map-select-up hide"
})

const population = document.querySelector(".local-population")
const population_popup = document.querySelector(".population-popup")
const close = document.querySelector(".close")

population.addEventListener('click', () => {
    population_popup.classList = "population-popup flex"
})

close.addEventListener('click', () => {
    population_popup.classList = "population-popup hide"
})

// 미세먼지 팝업창
const finedustLeft = document.querySelector(".fineDust-popup-img-left")
const finedustRight = document.querySelector(".fineDust-popup-img-right")
const finedustImg = document.querySelector(".fineDust-popup-img")
const finedustWrap = document.querySelector(".fineDust-popup-wrap")
const localFinedust = document.querySelector(".local-fineDust")
const closeFinedust = document.querySelector(".close-finedust")
let fintdustImgItemNot = document.querySelector(".fineDust-popup-img>div:not(:nth-child(3))");
let finedustImgItemNotImg = document.querySelector(".fineDust-popup-img>div:not(:nth-child(3))>img");
let finedustImgItemCenter = document.querySelector(".fineDust-popup-img>div:nth-child(3)")
let finedustCount = 0;
let finedustslide = null;
let finedustCenter = 3;
finedustImgItemCenter.style.border = "2px solid black"

finedustLeft.addEventListener("click",()=>{
    finedustImgItemCenter.style.border = "none"
    finedustCount--
    finedustCenter--
    if(finedustCount === -3){
        finedustCount = 2;
        finedustslide = null;
        finedustCenter = 5;
    }
    finedustslide = finedustCount*20
    
    finedustImg.style.transform = `translate(${-1*finedustslide}%)`
    finedustImgItemCenter = document.querySelector(`.fineDust-popup-img>div:nth-child(${finedustCenter})`)
    fintdustImgItemNot = document.querySelector(`.fineDust-popup-img>div:not(:nth-child(${finedustCenter}))`);
    fintdustImgItemNot.style.border = "none"
    finedustImgItemCenter.style.border = "2px solid black"
})
finedustRight.addEventListener("click",()=>{ 
    finedustImgItemCenter.style.border = "none"
    finedustCount++
    finedustCenter++
    console.log(finedustCount)
    if(finedustCount === 3){
        finedustCount = -2;
        finedustslide = null;
        finedustCenter = 1;
    }
    finedustslide = finedustCount*20
    
    finedustImg.style.transform = `translate(${-1*finedustslide}%)`
    finedustImgItemCenter = document.querySelector(`.fineDust-popup-img>div:nth-child(${finedustCenter})`)
    fintdustImgItemNot = document.querySelector(`.fineDust-popup-img>div:not(:nth-child(${finedustCenter}))`);
    fintdustImgItemNot.style.border = "none"
    finedustImgItemCenter.style.border = "2px solid black"
    
})
localFinedust.addEventListener("click",()=>{
    finedustWrap.style.display = "flex"
})
closeFinedust.addEventListener('click', () => {
    finedustWrap.style.display = "none"
})
// 날씨 팝업창
// 날씨 팝업창
const weathertLeft = document.querySelector(".weather-popup-img-left")
const weatherRight = document.querySelector(".weather-popup-img-right")
const weatherImg = document.querySelector(".weather-popup-img")
const weatherWrap = document.querySelector(".weather-popup-wrap")
const localWeather = document.querySelector(".local-weather")
const closeWeather = document.querySelector(".close-weather")
let weatherImgItemNot = document.querySelector(".weather-popup-img>div:not(:nth-child(3))");
let weatherImgItemNotImg = document.querySelector(".weather-popup-img>div:not(:nth-child(3))>img");
let weatherImgItemCenter = document.querySelector(".weather-popup-img>div:nth-child(3)")
let weatherCount = 0;
let weatherslide = null;
let weatherCenter = 3;
weatherImgItemCenter.style.border = "2px solid black"

weathertLeft.addEventListener("click",()=>{
    weatherImgItemCenter.style.border = "none"
    weatherCount--
    weatherCenter--
    if(weatherCount === -3){
        weatherCount = 2;
        weatherslide = null;
        weatherCenter = 5;
    }
    weatherslide = weatherCount*20
    
    weatherImg.style.transform = `translate(${-1*weatherslide}%)`
    weatherImgItemCenter = document.querySelector(`.weather-popup-img>div:nth-child(${weatherCenter})`)
    weatherImgItemNot = document.querySelector(`.weather-popup-img>div:not(:nth-child(${weatherCenter}))`);
    weatherImgItemNot.style.border = "none"
    weatherImgItemCenter.style.border = "2px solid black"
})
weatherRight.addEventListener("click",()=>{ 
    weatherImgItemCenter.style.border = "none"
    weatherCount++
    weatherCenter++
    console.log(weatherCount)
    if(weatherCount === 3){
        weatherCount = -2;
        weatherslide = null;
        weatherCenter = 1;
    }
    weatherslide = weatherCount*20
    
    weatherImg.style.transform = `translate(${-1*weatherslide}%)`
    weatherImgItemCenter = document.querySelector(`.weather-popup-img>div:nth-child(${weatherCenter})`)
    weatherImgItemNot = document.querySelector(`.weather-popup-img>div:not(:nth-child(${weatherCenter}))`);
    weatherImgItemNot.style.border = "none"
    weatherImgItemCenter.style.border = "2px solid black"
    
})
localWeather.addEventListener("click",()=>{
    weatherWrap.style.display = "flex"
})
closeWeather.addEventListener('click', () => {
    weatherWrap.style.display = "none"
})