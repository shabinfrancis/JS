let url="https://catfact.ninja/fact";
/* API Request */

fetch(url)  // fetch() method
  .then((res) =>{
    console.log(res);
    return res.json();  // .json() method is used to convert the response data readable
  })
  .then((data) =>{
    console.log(data.fact);
  })
  .catch((err) =>{
    console.log("ERROR: ",err);
  })

/* API Request with async-await */

async function getFacts(){
  try{
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);
  } catch(err){
    console.log("Error: ", err);
  }
  console.log("Bye");
}

/* await keyword */

function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
      resolve();
    }, 1000);
  });
}

async function demo() {
  await getNum();
  await getNum();
  await getNum();
}

h1 = document.querySelector("h1");
function changeColor(color, delay) {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            h1.style.color = color;
            console.log(`Color changed to ${color}`);
            resolve(`Color changed`);
        }, delay)
    });
}

async function demo() {
  await changeColor("red", 1000);
  await changeColor("orange", 1000);
  await changeColor("green", 1000);
  await changeColor("blue", 1000);
}

/* Handling Rejections */

h1 = document.querySelector("h1");
function changeColor(color, delay) {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            if(num > 3) {
              reject("promise rejected");
            }

            h1.style.color = color;
            console.log(`Color changed to ${color}`);
            resolve(`Color changed`);
        }, delay)
    });
}

async function demo() {
  try {
    await changeColor("red", 1000);
    await changeColor("orange", 1000);
    await changeColor("green", 1000);
    await changeColor("blue", 1000);
  } catch(err) {
    console.log("error caught: ", err);
  }

  let a = 5;
  console.log(a);
  console.log("new number = ", a + 3);
}

/* Accessing JSON data */

let jsonRes = 
  '{"fact":"The first cat show was in 1871 at the Crystal Palace in London.","length":63}'

let validRes = JSON.parse(jsonRes);  //JSON.parse(data) Method
console.log(validRes.fact);  

let student = {
  name: "Shabin",
  marks: 100
}

let json = JSON.stringify(student);  //JSON.stringify(json) Method
console.log(student);