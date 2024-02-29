let score="33abc"
console.log(typeof score);
console.log(typeof(score));

let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); //it will give NaN ,its a special datatype (NaN)

//"33" ==>to converti it into number,it can be easily convertible
// "33abc" ==>it will be converted into NaN if we try to convert it into numbers
// true ==>1; false ==>0

// let isloggedIn=1
// let BooleanIsLoggedIn=Boolean(isloggedIn)
// console.log(BooleanIsLoggedIn);

// let isloggedIn="naman"
// let BooleanIsLoggedIn=Boolean(isloggedIn)
// console.log(BooleanIsLoggedIn);

let isloggedIn=""
let BooleanIsLoggedIn=Boolean(isloggedIn)
console.log(BooleanIsLoggedIn);

//1 ==> true;0 ==> false
//"" ==>false
// "naman" => true
let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof(stringNumber))

