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