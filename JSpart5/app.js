/* Creating Object Literals */

// const student = {
//     name: "Shabin",
//     age: 20,
//     branch: "CE"
// };

// const item = {
//     price: 100.93,
//     discount: 50,
//     colors: ['red', 'orange']
// };

/* Creating a Post and getting a value*/

const user = {
    username: "@shabinfrancis",
    content: "My first post",
    likes: 150,
    reposts: 5,
    tags: ['@darshini', '@anime']
};
console.log(user.content);
console.log(user.likes);

let prop = "reposts";  //getting values of a property of object through declaring a variable 'prop'.
console.log(user[prop]);

/* Add/Update Values */

// const clgStudent = {
//     name: "Shabin",
//     age: 20,
//     marks: 90,
//     city: "Mumbai"
// }
// console.log(clgStudent);
// clgStudent.city = "Delhi";  //Updating property
// console.log(clgStudent);
// clgStudent.gender = "Male";  //Adding new property
// console.log(clgStudent);  
// delete clgStudent.gender;
// console.log(clgStudent);

/* Object of objects */

// const classInfo = {
//     shabin: {
//         age: 20,
//         gender: "Male"
//     },
//     rakesh: {
//         age: 19,
//         gender: "Male"
//     },
//     rohan: {
//         age: 20,
//         gender: "Male"
//     }
// };

/* Array of objects */

// const classinfo = [
//     {
//         name: "Shabin",
//         age: 20,
//         gender: "Male"
//     },
//     {
//         name: "Rakesh",
//         age: 19,
//         gender: "Male"
//     },
//     {
//         name: "Rohan",
//         age: 20,
//         gender: "Male"
//     }
// ];

/* Random Integers */

// let numb = Math.floor(Math.random() * 10) + 1;
// console.log(numb);

/* Guessing Game */

// const max = prompt("Select a max number:");
// let random = Math.floor(Math.random() * max) + 1;
// let guess = prompt("Guess the number");
// while(true){
//     if(guess == "quit"){
//         console.log("USER QUITS");
//     }
//     if(guess == random){
//         console.log("CORRECT! The random number is", random);
//         break;
//     }
//     else if(guess < random){
//         guess = prompt("Entered number is small.Try again");
//     }
//     else{
//         guess = prompt("Entered number is large.Try again");
//     }
// }

/* ***ASSIGNMENT*** */

/* 1.Dice */
// let play = prompt("Enter 'roll' to roll the dice");
// while(true){
//     if(play == "quit"){
//         console.log("Dice passed to next player");
//         break;
//     }
//     else if(play == "roll"){
//         let dice = Math.floor(Math.random() * 6) + 1;
//         console.log(dice);
//     }
//     else{
//         play = prompt("WRONG ENTRY!!");
//     }
// }

// /* 2.CAR */
// let car ={
//     Name: "Benz",
//     Model:"yghdfj",
//     color:"black"
// }
// console.log(car.Name);

// /* 3.Data */
// let data = {
//     Name:'Shabin',
//     Age:20,
//     City:'Mumbai'
// }
// console.log(data);
// data.City='New York';
// console.log(data);
// data.country='United States';
// console.log(data);