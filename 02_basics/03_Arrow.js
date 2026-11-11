const user = {
    username:"Rajprasad",
    price: 999,

    welcomwMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }
}
//  user.welcomwMessage()
//  user.username="sami"
//  user.welcomwMessage()

const chai = () => {
    let username = "Rajprasad"
    console.log(this);
}
//chai()
// const addTwo =(num1, num2) => {
//     return num1 + num2
// }
//const addTwo =(num1, num2) => num1 + num2  //implisive return 
//const addTwo =(num1, num2) => (num1 + num2)
const addTwo =(num1, num2) => ({username:"Rajprasad"})

console.log(addTwo(3, 4));


//const myArray = [1, 2, 3, 4, 5]

