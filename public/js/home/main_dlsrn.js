const allUrl = "https://sgisapi.kostat.go.kr/OpenAPI3/stats/population.json?accessToken=e862dd05-e919-48e2-9d2f-001831f9b5a4&year=2022&low_search=1"
const menUrl = "https://sgisapi.kostat.go.kr/OpenAPI3/stats/searchpopulation.json?year=2022&gender=1&accessToken=e862dd05-e919-48e2-9d2f-001831f9b5a4"
const ditjdUrl = "https://sgisapi.kostat.go.kr/OpenAPI3/stats/searchpopulation.json?year=2022&gender=2&accessToken=e862dd05-e919-48e2-9d2f-001831f9b5a4";
const population_gkq = document.querySelector(".population-gkq > span")
const population_male = document.querySelector(".population-male > span")
const population_female = document.querySelector(".population-female > span")
const population_wnxor = document.querySelector(".population-wnxor > span")
const dlsrnapi = async () => {
    let tatel = 0;
await fetch(allUrl)
.then(res => res.json())
.then(res => tatel += Number(res["result"][0]["tot_ppltn"]))
console.log(tatel);
await fetch(allUrl)
.then(res => res.json())
.then(res => tatel += Number(res["result"][1]["tot_ppltn"]))
console.log(tatel);
await fetch(allUrl)
.then(res => res.json())
.then(res => tatel += Number(res["result"][2]["tot_ppltn"]))
console.log(tatel);
await fetch(allUrl)
.then(res => res.json())
.then(res => tatel += Number(res["result"][3]["tot_ppltn"]))
console.log(tatel);
await fetch(allUrl)
.then(res => res.json())
.then(res => tatel += Number(res["result"][4]["tot_ppltn"]))
console.log(tatel);
await fetch(allUrl)
.then(res => res.json())
.then(res => tatel += Number(res["result"][5]["tot_ppltn"]))
console.log(tatel);
await fetch(allUrl)
.then(res => res.json())
.then(res => tatel += Number(res["result"][6]["tot_ppltn"]))
console.log(tatel);
await fetch(allUrl)
.then(res => res.json())
.then(res => tatel += Number(res["result"][7]["tot_ppltn"]))
console.log(tatel);
await fetch(allUrl)
.then(res => res.json())
.then(res => tatel += Number(res["result"][8]["tot_ppltn"]))
console.log(tatel);
await fetch(allUrl)
.then(res => res.json())
.then(res => tatel += Number(res["result"][9]["tot_ppltn"]))
console.log(tatel);
await fetch(allUrl)
.then(res => res.json())
.then(res => tatel += Number(res["result"][10]["tot_ppltn"]))
console.log(tatel);
await fetch(allUrl)
.then(res => res.json())
.then(res => tatel += Number(res["result"][11]["tot_ppltn"]))
console.log(tatel);
await fetch(allUrl)
.then(res => res.json())
.then(res => tatel += Number(res["result"][12]["tot_ppltn"]))
console.log(tatel);
console.log(tatel);
await fetch(allUrl)
.then(res => res.json())
.then(res => tatel += Number(res["result"][13]["tot_ppltn"]))
console.log(tatel);
await fetch(allUrl)
.then(res => res.json())
.then(res => tatel += Number(res["result"][14]["tot_ppltn"]))
console.log(tatel);
await fetch(allUrl)
.then(res => res.json())
.then(res => tatel += Number(res["result"][15]["tot_ppltn"]))
console.log(tatel);
await fetch(allUrl)
.then(res => res.json())
.then(res => tatel += Number(res["result"][16]["tot_ppltn"]))
console.log(tatel);
const ctatel = tatel.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
population_gkq.innerHTML = `대한민국 총 인구수 : ${ctatel} 명`
}
const wnxorapi = async () => {
    let tatel = 0;
    await fetch(allUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][0]["tot_house"]))
    console.log(tatel);
    await fetch(allUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][1]["tot_house"]))
    console.log(tatel);
    await fetch(allUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][2]["tot_house"]))
    console.log(tatel);
    await fetch(allUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][3]["tot_house"]))
    console.log(tatel);
    await fetch(allUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][4]["tot_house"]))
    console.log(tatel);
    await fetch(allUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][5]["tot_house"]))
    console.log(tatel);
    await fetch(allUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][6]["tot_house"]))
    console.log(tatel);
    await fetch(allUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][7]["tot_house"]))
    console.log(tatel);
    await fetch(allUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][8]["tot_house"]))
    console.log(tatel);
    await fetch(allUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][9]["tot_house"]))
    console.log(tatel);
    await fetch(allUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][10]["tot_house"]))
    console.log(tatel);
    await fetch(allUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][11]["tot_house"]))
    console.log(tatel);
    await fetch(allUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][12]["tot_house"]))
    console.log(tatel);
    console.log(tatel);
    await fetch(allUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][13]["tot_house"]))
    console.log(tatel);
    await fetch(allUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][14]["tot_house"]))
    console.log(tatel);
    await fetch(allUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][15]["tot_house"]))
    console.log(tatel);
    await fetch(allUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][16]["tot_house"]))
    console.log(tatel);
    const ctatel = tatel.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    population_wnxor.innerHTML = `대한민국 총 자택수 : ${ctatel} 호`
}
const dutjdapi = async () => {
    let tatel = 0;
    await fetch(menUrl)
    .then(res => res.json())
    .then(res => {tatel += Number(res["result"][0]["population"]);})
    console.log(tatel);
    await fetch(menUrl)
    .then(res => res.json())
    .then(res => {tatel += Number(res["result"][1]["population"]);})
    console.log(tatel);
    await fetch(menUrl)
    .then(res => res.json())
    .then(res => { tatel += Number(res["result"][2]["population"]);})
    console.log(tatel);
    await fetch(menUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][3]["population"]))
    console.log(tatel);
    await fetch(menUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][4]["population"]))
    console.log(tatel);
    await fetch(menUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][5]["population"]))
    console.log(tatel);
    await fetch(menUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][6]["population"]))
    console.log(tatel);
    await fetch(menUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][7]["population"]))
    console.log(tatel);
    await fetch(menUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][8]["population"]))
    console.log(tatel);
    await fetch(menUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][9]["population"]))
    console.log(tatel);
    await fetch(menUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][10]["population"]))
    console.log(tatel);
    await fetch(menUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][11]["population"]))
    console.log(tatel);
    await fetch(menUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][12]["population"]))
    console.log(tatel);
    console.log(tatel);
    await fetch(menUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][13]["population"]))
    console.log(tatel);
    await fetch(menUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][14]["population"]))
    console.log(tatel);
    await fetch(menUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][15]["population"]))
    console.log(tatel);
    await fetch(menUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][16]["population"]))
    console.log(tatel);
    const ctatel = tatel.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    population_male.innerHTML = `대한민국 총 남성 인구 수 : ${ctatel} 명`
}
const skatjdapi = async () => {
    let tatel = 0;
    await fetch(ditjdUrl)
    .then(res => res.json())
    .then(res => {tatel += Number(res["result"][0]["population"]);})
    console.log(Number(tatel));
    await fetch(ditjdUrl)
    .then(res => res.json())
    .then(res => { tatel += Number(res["result"][1]["population"]);})
    console.log(tatel);
    await fetch(ditjdUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][2]["population"]))
    console.log(tatel);
    await fetch(ditjdUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][3]["population"]))
    console.log(tatel);
    await fetch(ditjdUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][4]["population"]))
    console.log(tatel);
    await fetch(ditjdUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][5]["population"]))
    console.log(tatel);
    await fetch(ditjdUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][6]["population"]))
    console.log(tatel);
    await fetch(ditjdUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][7]["population"]))
    console.log(tatel);
    await fetch(ditjdUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][8]["population"]))
    console.log(tatel);
    await fetch(ditjdUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][9]["population"]))
    console.log(tatel);
    await fetch(ditjdUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][10]["population"]))
    console.log(tatel);
    await fetch(ditjdUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][11]["population"]))
    console.log(tatel);
    await fetch(ditjdUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][12]["population"]))
    console.log(tatel);
    console.log(tatel);
    await fetch(ditjdUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][13]["population"]))
    console.log(tatel);
    await fetch(ditjdUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][14]["population"]))
    console.log(tatel);
    await fetch(ditjdUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][15]["population"]))
    console.log(tatel);
    await fetch(ditjdUrl)
    .then(res => res.json())
    .then(res => tatel += Number(res["result"][16]["population"]))
    console.log(Number(tatel));
    const ctatel = tatel.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    population_female.innerHTML = `대한민국 총 여성 인구수 : ${ctatel} 명`
    }
dlsrnapi()
wnxorapi()
skatjdapi()
dutjdapi()