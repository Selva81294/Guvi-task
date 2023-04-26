//1. Anonymous & IIFE Function
//a. Print odd numbers in an array
//Anonymous Function
let arr = [12,13,14,15,16,17,18,19,20];
let result = [];
let odd = function(arr) {
    for (i=0;i<arr.length;i++){
        if (arr[i]%2 != 0)
        {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(odd(arr));

//IIFE
(function odd(arr) {
    let result = [];
    for (i=0;i<arr.length;i++){
        if (arr[i]%2 != 0)
        {
            result.push(arr[i]);
        }
    }
    console.log(result);
})([2,3,4,5,6,7,8,9])

//Convert all the strings to title caps in a string array
//Anonymous Function
let titlecaps = function(str) {
    let sentence = str.toLowerCase().split(" ");
    for(i=0;i<sentence.length;i++)
    {
        sentence[i] = sentence[i][0].toUpperCase()+sentence[i].slice(1)
    }
    return sentence.join(" ")
}
console.log(titlecaps("guvi is best platform to learn"));

//IIFE
(function titlecaps(str) {
    let sentence = str.toLowerCase().split(" ");
    for(i=0;i<sentence.length;i++)
    {
        sentence[i] = sentence[i][0].toUpperCase()+sentence[i].slice(1)
    }
    console.log(sentence.join(" "));
})("guvi is best platform to learn");

// Sum of all number in an array
//Anonymous Function
let sum = function(arr){
    let b = 0;
    for(i=0;i<arr.length;i++)
    {
    b=b+arr[i];
    }
    return b
}
let b = [5,5,5,5];
console.log(sum(b));

//IIFE
(function(arr){
    let b = 0;
    for(i=0;i<arr.length;i++)
    {
    b=b+arr[i];
    }
    console.log(b);
})([1,2,3,4]) 

//Return all the prime numbers in an array
// Annonymous function
var primenum=function(arr){
    arr = arr.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
    }
    return true;
    });
   console.log(arr);
    }
    primenum([1,2,3,4,5,6,7,8])

//Return all Palindrome in an array
//Anonymous function
let ispalindrome = function (a){
    a = a.split('').reverse().join('');
    return a;
}
let palindrome = function (arr){
    let result = [];
    for (i=0;i<arr.length;i++){
        if(ispalindrome(arr[i]) === arr[i]){
            result.push(arr[i]);
        }
    }
    return result;
}

let arr1 = [ "madam", "car", "ada", "racecar", "cool"]
console.log(palindrome(arr1));

//IIFE Function
function ispalindromeIIFE(a){
    a = a.split('').reverse().join('');
    return a;
}
(function palindrome(arr){
    let result = [];
    for (i=0;i<arr.length;i++){
        if(ispalindrome(arr[i]) === arr[i]){
            result.push(arr[i]);
        }
    }
    console.log(result);
})([ "madam", "car", "ada", "racecar", "cool"])

//print median of two sorted same arrays
//Anonymous function
let median = function(arr){
    let len = arr.length;
    let mid = Math.floor(len/2);
    if(len % 2 != 0)
    {
        return arr[mid];
    }
    else {
        return (arr[mid-1] + arr[mid]) / 2;
    }
}
let arrA = [3,2,5];
let arrB = [10,13,11];
let arrC = [...arrA,...arrB];
let arrsort = arrC.sort(function(a,b) {return a-b});
console.log(arrsort);
console.log(median(arrsort));

//remove duplicates from an Array
function removeDuplicates(arr) {
    let result = [];
    let arrsort = arr.sort()
    for(i=0;i<arr.length;i++)
    {
        if(arrsort[i] !== arr[i+1]){
            result.push(arrsort[i]);
        }
    }
    return result
}
let a = [2,3,2,4,68,32,23,4,32]
console.log(removeDuplicates(a));
let a1 = removeDuplicates(a).sort(function(a,b){return a-b})
console.log(a1)

//Anonymous function
let removeDuplicatesAnon = function (arr) {
    let result = [];
    let arrsort = arr.sort()
    for(i=0;i<arr.length;i++)
    {
        if(arrsort[i] !== arr[i+1]){
            result.push(arrsort[i]);
        }
    }
    return result
}
let b1 = [2,3,2,4,68,32,23,4,32]
console.log(removeDuplicatesAnon(b1));
let b2 = removeDuplicatesAnon(a).sort(function(a,b){return a-b})
console.log(b2)

//rotate an array by k times
//Anonymous Function
let rotate = function(arr, k){
    for(i=0;i<k;i++){
        arr.unshift(arr.pop());
    }
    return arr;
}
console.log(rotate([1,2,3,4,5],4));

//IIFE
(function rotate(arr, k){
    for(i=0;i<k;i++){
        arr.unshift(arr.pop());
    }
    console.log(arr);
})([1,2,3,4,5],3);

//Arrow Function
//print odd numbers
let oddArrow = (arr)=>{
    let result = [];
    for (i=0;i<arr.length;i++){
        if (arr[i]%2 != 0)
        {
            result.push(arr[i]);
        }
    }
    return result;
}
let arrArrow = [2,3,4,5,6,7,8,9];
console.log(oddArrow(arrArrow));

//Convert all the strings to title caps in a string array
let titlecapsArrow = (str)=> {
    let sentence = str.toLowerCase().split(" ");
    for(i=0;i<sentence.length;i++)
    {
        sentence[i] = sentence[i][0].toUpperCase()+sentence[i].slice(1)
    }
    return sentence.join(" ")
}
console.log(titlecapsArrow("guvi is best platform to learn"));

//Sum of all numbers in an array
let sumArrow = (arr) =>{
    let b = 0;
    for(i=0;i<arr.length;i++)
    {
    b=b+arr[i];
    }
    return b
}
let value = [5,5,5,5];
console.log(sumArrow(value));

//Return all the prime numbers in an array
//Arrow function
var prime = (arr) => {
    arr = arr.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
    }
    return true;
    });

    console.log(arr);
}
    prime([1,2,3,4,5,6,7,8])

//Return all the palindromes in an array
let ispalindromeArrow = (a)=>{
    a = a.split('').reverse().join('');
    return a;
}
let palindromeArrow = (arr)=>{
    let result = [];
     for (i=0;i<arr.length;i++){
        if(ispalindrome(arr[i]) === arr[i]){
            result.push(arr[i]);
        }
    } 
    return result;
}

let arrval = [ "madam", "car", "ada", "racecar", "cool"]
console.log(palindromeArrow(arrval));
