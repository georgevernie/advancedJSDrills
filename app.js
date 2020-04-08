//Var vs Let
name = "Jon";
var name;
console.log(name);

//Function Hoisting
otherName = "Jon"
let otherName;
console.log(otherName);
setName();
function setName(){
    var name = "Covalence";
    console.log(name);
}

//More function hoisting
console.log("Some Text");
let avg = findAvg(2,6);
console.log("This is the avg: ", avg);
function findAvg(a,b){
    console.log("Some Text2");
    var answer = (a+b) / 2 
    return answer;
}

//Scope Practice
let fruits = ["Apple", "Orange", "Banana"];
let leastFav = [2];
//let favFruit;
function printFruits(){
    let favFruit = fruits[1];
    console.log(fruits[0]);

    function printFavFruit() {
        console.log(favFruit);
    }
    printFavFruit();
    console.log(leastFav[2]);
}

printFruits();


myFunc();
function myFunc(){
    console.log("Hello " + name)
}

let aFunction = function(){
    alert("Help the British are coming!");
}
aFunction();