//MRF (Map Reduce Filter)
//Map
//Example:
/* var arr = [12,14,15,50];
//expected output = [24,28,30,100] ====> multiply by 2
var res = arr.map((element)=>element*2)
console.log(res) */
//map(class task)
/* var arr = ["apple","orange","mangoe"]
//expected output = ["apples","oranges","mangoes"]
var res = arr.map((element)=>element+'s');
console.log(res); */
//XMLHttpRequest (mapping)
/* let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload =function(){
    let data = request.response
    let result = JSON.parse(data);
    let res = result.map((ele)=>ele.name.common)
    console.log(res)
} */

//filter
//Example 1
/* var arr = [12,13,14,16];
//expected output = [12,14] ====> %2 == 0
var res = arr.filter((ele)=>ele%2 == 0)
console.log(res) */
//Example2
/* let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload =function(){
    let data = request.response
    let result = JSON.parse(data);
    let res = result.filter((ele)=>ele.population<30000)
    console.log(res);
} */

//Reduce
//Example
/* let arr = [10,20,30,40];
let res = arr.reduce((acc,cv)=>acc+cv);
console.log(res); */
//without initial value
/* let arr = [10,20,30,40];
let res = arr.reduce(()=>);
console.log(res); */
//with initial value
/* let arr = [10,20,30,40];
let res = arr.reduce((acc,cv)=>acc+cv,100);
console.log(res); */
//XMLHttpRequest (print total population using reduce)
/* let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload =function(){
    let data = request.response
    let result = JSON.parse(data);
    let res = result.reduce((acc,cv)=>acc+cv.population,0);
    console.log(res);
}  */

//forEach method
//Example
/* let arr = [12,13,14,15]
let res = arr.forEach((ele)=> console.log(ele)) */
//Example using XMLHttpRequest
/* let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload =function(){
    let data = request.response
    let result = JSON.parse(data);
    let res = result.forEach((ele)=>{console.log(`${ele.name.common} ${ele.capital} ${ele.region}`)})
} */

//Destructuring
//Example
/* let arr = ["selva","kumaran","vijay"]
let [Fname,Mname,Lname] = arr;
console.log(Fname);
console.log(Mname);
console.log(Lname); */



