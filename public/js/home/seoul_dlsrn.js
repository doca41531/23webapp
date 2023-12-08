const url = "https://sgisapi.kostat.go.kr/OpenAPI3/startupbiz/mfratiosummary.json?accessToken=76ab0ccd-ebb8-420a-b2f7-19f7bb28dfa3&adm_cd=11040"
const allUrl = "https://sgisapi.kostat.go.kr/OpenAPI3/stats/population.json?accessToken=76ab0ccd-ebb8-420a-b2f7-19f7bb28dfa3&year=2022&low_search=1"
//accessToken 4시간마다 갱신해주기
const population_gkq = document.querySelector(".population-gkq > span")
const population_male = document.querySelector(".population-male > span")
const population_female = document.querySelector(".population-female > span")
const population_wnxor = document.querySelector(".population-wnxor > span")
const dlsrnapi = async () => {
    let tatel = 0;
await fetch(url)
.then(res => res.json())
.then(res => tatel += Number(res["result"][1]["total_ppl"]))
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
    const ctatel = tatel.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    population_wnxor.innerHTML = `대한민국 총 자택수 : ${ctatel} 호`
}
const dutjdapi = async () => {
    let tatel = 0;
    await fetch(url)
    .then(res => res.json())
    .then(res => {tatel += Number(res["result"][1]["m_ppl"]);})
    console.log(tatel);
    const ctatel = tatel.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    population_male.innerHTML = `대한민국 총 남성 인구 수 : ${ctatel} 명`
}
const skatjdapi = async () => {
    let tatel = 0;
    await fetch(url)
    .then(res => res.json())
    .then(res => {tatel += Number(res["result"][1]["f_ppl"]);})
    console.log(Number(tatel));
    const ctatel = tatel.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    population_female.innerHTML = `대한민국 총 여성 인구수 : ${ctatel} 명`
    }
dlsrnapi()
wnxorapi()
skatjdapi()
dutjdapi()