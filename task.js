//Get all the countries from the Asia continent /region using the Filter function
/* let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload =function(){
    let data = request.response
    let result = JSON.parse(data);
    let res = result.filter((ele)=>ele.continents=="Asia")
    console.log(res);
    let res1 = res.map((ele)=>ele.name.common)
    console.log(res1);
}  */

//Get all the countries with a population of less than 2 lakhs using Filter function
/* let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload =function(){
    let data = request.response
    let result = JSON.parse(data);
    let res = result.filter((ele)=>ele.population<200000)
    //console.log(res);
    let res1 = res.map((ele)=>ele.name.common)
    console.log(res1);
}  */

//Print the following details name, capital, flag using forEach function
/* let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload =function(){
    let data = request.response
    let result = JSON.parse(data);
    let res = result.forEach((ele)=>{console.log(`${ele.name.common} ${ele.capital} ${ele.flag}`)})
}  */

//Print the total population of countries using reduce function
/* let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload =function(){
    let data = request.response
    let result = JSON.parse(data);
    let res = result.reduce((acc,cv)=>acc+cv.population,0)
    console.log(res);
} */

//Print the country which uses US Dollars as currency
let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload =function(){
    let data = request.response
    let result = JSON.parse(data);
    let res = result.filter((ele)=>ele?.currencies?.USD).map((value) => value.name.common);
    console.log(res)
}   


