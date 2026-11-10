// singleton

//object litarals
//Object.create
const jaUser = {
    name:"Raj prasad",
    age: 22,
    location:"Bhubaneswer",
    email:"Rajprasad@google.com",
    isLoggedIn: false,
    lastloginDays:["Monday","Saturday"]

}

console.log(jaUser.email)
console.log(jsUser["email"])
jsUser.email ="Rajprasad@chatgpt.com"
Object.freeze(jsUser)
jsUser.email ="Rajprasad@microsoft.com"


