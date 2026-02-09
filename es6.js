let btn = document.querySelector('#btn')
btn.addEventListener('click', function() {
        alert('button click hua')
    })
    /* console.log(btn); */


//template literal : string ke beeche me logic likh sakte hai
let user = "abhishek"
    /* console.log("hey " + user + " welcome to world"); */

console.log(`hey ${user} welcome to coding ki duniya`);

//Destructring

let person = {
    name: 'Nilesh',
    age: '21',
    skills: ['webDev, Dsa, aws']
}

let { name, age, skills } = person
console.log(name, age, skills)
let [a, b, c] = skills
console.log(a, b, c);

//spread operator

let personDetail = {
    canCode: true,
    canfly: false
}
let newuser = {...person, ...personDetail }
console.log(newuser);


//arrow function
let arrow = () => {
    console.log("arrow function");
}
arrow()