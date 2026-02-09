let dabba = {
        charger: "samsung",
        earphone: "levis",
        spec: {
            ram: "8gb",
            rom: "256gb"
        },
        random: ['1', '2', 3]
    }
    /* console.log(dabba);
    console.log(dabba.charger)
    console.log(dabba['earphone']);
    console.log(Object.keys(dabba));
    console.log(Object.values(dabba));
    console.log(Object.entries(dabba)); */
let copy = {...dabba, skills: "Mern Stack" }
console.log(copy);

//optional chaining

/* console.log(dabba ? .spec ? .ram); */


//destructuring
let { charger, earphone } = {
    charger: "samsung",
    earphone: "levis",
    spec: {
        ram: "8gb",
        rom: "256gb"
    },
    random: ['1', '2', 3]
}

console.log(charger);