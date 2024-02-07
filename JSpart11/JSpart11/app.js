h1 = document.querySelector("h1");
function changeColor(color, delay) {
    return new Promise((resolve, _reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("Color changed")
        }, delay)
    });
}

/* Promises */

changeColor("red", 1000)
  .then(() => {
    console.log("red color");
    return changeColor("orange", 1000);
  })
  .then(() => {
    console.log("orange color");
    return changeColor("green", 1000);
  })
  .then(() => {
    console.log("green color");
    return changeColor("blue", 1000);
  })
  .then(() => {
    console.log("blue color");
  })
  .catch((error) => {
    console.log("color unchanged");
    console.log(error);
  })

/* Callback Hell */

function saveToDB(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        success();
    }
    else {
        failure();
    }
}

saveToDB(
    "apnaClg",
    () => {
        console.log("Success");
        saveToDB(
            "Hello",
            () => {
                console.log("Success1");
                saveToDB(
                    "Hello world",
                    () => {
                        console.log("Success2");
                        saveToDB(
                            "Namaste",
                            () => {
                                console.log("Success3");
                            },
                            () => {
                                console.log("Failure3");
                            }
                        )
                    },
                    () => {
                        console.log("Failure2");
                    }
                );
            },
            () => {
                console.log("Failure1");
            }
        );
    },
    () => {
        console.log("Failure");
    }
);


function saveToDB(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("Data saved");
        }
        else {
            reject("Data not saved");
        }
    });  
}

saveToDB("apna college") //request --> promise object 
  .then((result) => {
    console.log("Promise resolved");
    console.log("result of promise: ", result);
    return saveToDB("helloworld");
  })
  .then((result) => {
    console.log("Promise resolved");
    console.log("result of promise: ", result);
    return saveToDB("Shabin");
  })
  .then((result) => {
    console.log("Promise resolved");
    console.log("result of promise: ", result);
  })
  .catch((error) => {
    console.log("Promise rejected");
    console.log("error of promise: ", error);
  });