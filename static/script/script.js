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