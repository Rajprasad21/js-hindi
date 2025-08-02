const accountId = 144335
let accountEmail = "Raj@2005.com"
var accountpassword = "12345"
accountcity = "Bhubaneswer"
let accountstate;
// accountId = 2 // not allowed


accountEmail = "raj@raj.com"
accountpassword = "21212112"
accountcity = "Berampur"

console.log(accountId);
/*
prefer not to use var
because of issue in bolck scope and functional scope
*/
console.table([accountId,accountEmail,accountpassword,accountcity])