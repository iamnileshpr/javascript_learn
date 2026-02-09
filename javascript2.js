//js mainly have2 two data-type

//primitive


//number
let number = 12;

//string- '', "", ``
let name = 'hello'

//boolean
let canHumanFly = false


//null or undefined

let x; //declare kiya hai bs
console.log(x); //undefined: variable hai pr value nahi pata

let abc = null
console.log(abc); //null:hume hi nahi pata value, humkhud se bata rahe hai ki var ki koi value nahi hogi


//non-primitive

//() - function, {}-object, []- array

let arr = [1, 2, null, true, "code ki duniya"]
console.log(arr);

let chintuKIdetail = {
    key: "value",
    gharKaNaame: String,
    age: 12,
    skills: ['c', 'c++', 'ReactJS']
}
console.log(typeof chintuKIdetail);

let sayname = function() {

}


//typeof: size of data type

//+,-,/,//,%
console.log(12 % 8);