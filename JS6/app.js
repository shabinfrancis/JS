/* Function */

function rollDice(){
    let random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
}
rollDice();

/* Functions with arguments */

function multTable(n){
    let product=n;
    for(let i=1;i<=10;i++){
        product=n*i;
        console.log(product);
    }
}
multTable(5);

/* Using 'return' keyword */

function sumOfN(n) {
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum=sum+i;
    }
    return sum;
    
}

let str=['hello','hi','bye','!!'];
function concat(str) {
    let result="";
    for(let i=0;i<str.length;i++){
        result=result+str[i];
    }
    return result;
    
}

/* Scope */

let sum = 55 //Global Scope

function calSum(a, b) {
    let sum = a+b;  //Function Scope
    console.log(sum);
}
calSum(1, 2);
console.log(sum);

/* Lexical Scope */

function outerFunc() {
    let x = 5;
    let y = 4;
    function innerFunc() {
        let a = 10;
        console.log(x);
    }
    console.log(a);
    innerFunc();
}

/* Higher Order Functions */

function multipleGreet(func, n) {  //This function is the higher order function as it takes another function as an argument.
    for(let i=0; i<n; i++) {
        func();
    }
};
let greet = function() {
    console.log("Hello");
};
multipleGreet(greet, 10);

/* Higher Order Functions(returns). */

function oddOrEvenFactory(request) {
    if(request =='odd'){
        let odd = function(n) {
            console.log(!(n%2 == 0));
        }
        return odd;
    }
    else if(request =='even'){
        let even = function(n) {
            console.log(n%2 == 0);
        }
        return even;
    }
    else{
        console.log("Wrong request");
    }
}
let request = 'odd';

/* Methods */

const calculator = {  //Object
    PI: 3.147,
    add: function(a, b) {
        return a+b;
    },
    sub: function(a, b) {
        return a-b;
    },
    mul: function(a, b) {
        return a*b;
    }
};
/* Methods (Shorthand) */
const Calculator = {  //Object
    add(a, b) {
        return a+b;
    },
    sub(a, b) {
        return a-b;
    },
    mul(a, b) {
        return a*b;
    }
};


/* ***ASSIGNMENT*** */

// let arr = [5,4,8,9];
// let num = 6;
// function getElements(arr,num){
//     for(let i=0;i<=arr.length-1;i++){
//         if(arr[i]> num){
//             console.log(arr[i]);
//         }
//     }
// }

// getElements(arr,num);



// let str="abcdabcdefgggh";
// function getUnique(str){
//     let ans="";
//     for(let i=0; i<str.length; i++){
//         let currChar = str[i];
//         if(ans.indexOf(currChar) == -1){
//             ans+=currChar;
//         }
//     }
//     return ans;
// }
// getUnique(str);



// let country=["Australia","Germany","United States of America"];
// let ansIdx=0;
// function Country(country) {
//     for(let i=0;i<country.length;i++){
//         let ansLen=country[ansIdx].length;
//         let currLen=country[i].length;
//         if(currLen > ansLen){
//             ansIdx = i;
//         }
//     }
//     return country[ansIdx];
// }

// Country(country);



// let str="apnacollege";
// function vowels(str){
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         if(str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i)  == 'o' || str.charAt(i)  == 'u'){
//             ++count;
//         }
//     }
//     return count;
// }
// vowels(str);


// let num = Math.floor(Math.random()*10)+91;
// console.log(num);