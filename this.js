console.log("this keyword");

//in global scope
console.log(this.alert);

//in normal function scope
function thisKiValue() {
    console.log(this);
}
thisKiValue()

//es5:function_name(){}
//es6:let fun=()=>{}

let person = {
    name: 'abhishek',
    greet: function() {
        console.log(this.name);
    }
}
person.greet()

let obj = {
    name: 'coding'
}

function a(x, y, z) {
    console.log(this, x, y, z);
}
a.call(obj, 1, 2, 3)
a.apply(obj, [1, 2, 3])

let newFunction = a.bind(obj)
newFunction()