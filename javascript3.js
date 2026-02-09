//if condtion

//if (condition)
//if else if statment

let isRaining = false
let mobileMila = true

if (isRaining) {
    console.log("barish ho rahi hai");
} else if (mobileMila) {
    console.log("call krke auto wale ko batade raha ");
} else if (10 > 9) {
    console.log("greater");

} else {
    console.log("barish nahi ho rahi")
}


//nested if else

let user = {
    name: "abhishek",
    Admin: "developer"
}
if (user) {
    if (user.role == 'admin')
        console.log("user admin hai")
    else {
        console.log("admin koi or hai");
    }
} else {
    console.log("user hi nahi hai ");
}


//switch condition

switch (11) {
    case 1:
        console.log("case 1 chala");
        break;
    case 2:
        console.log("case 2 chala");
        break;
    default:
        console.log("ye tho default case hai");
}


//control statement

for (let x = 0; x <= 20; x++) {
    console.log("value hai", x);
}

let x = 0
while (x <= 20) {
    console.log(x);
    x++;
}

let i = 1;
do {
    if (i == 7) {
        break;
    }
    console.log(i);
    i++
}
while (i <= 20)


//function

function chalu() {
    console.log("function chal raha hai");
}

chalu()