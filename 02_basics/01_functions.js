
function sayMyname(){
console.log("R");
console.log("A");
console.log("J");
console.log("P");
console.log("R");
console.log("A");
console.log("s");
console.log("A");
console.log("D");

}
//sayMyname()

// function addtwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addtwoNumbers(number1, number2){
   let result = number1 + number2
   return result
}
 const result = addtwoNumbers(3, 4)
//console.log("result:" , result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Rajprasad"))
//console.log(loginUserMessage())

function calculateCartPrice(...num1){//...rest operater,spred operater
       return num1
}
//console.log(calculateCartPrice(200, 400, 500,700,300))

const user ={
    username:"Rajprasad",
    price:199
}

function handleObject(anyobject){
       console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)






