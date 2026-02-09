let arr = [1, 2, true, 'array hai', { name: "abhishek" }, function() {}]

console.log(arr.length);
console.log(arr);

for (let i = 0; i < length.arr; i++) {
    console.log(arr[i]);
}

//for of loop

for (let items of arr) {
    console.log(items);
}

//mutating method

let arr1 = [];
arr1.push(12) //last me add
arr1.pop(); // remove element from last
arr1.shift(); //remove from first
arr1.unshift(); //add from first
arr1.push('code ki pathshala')
console.log(arr.splice(1, 2)); //print arr element between specific range
console.log(arr1);

//non-mutating method

let newArr = arr1.map(function(value, index, arr) {
    console.log(value);
    return arr1 * 2
})
console.log(newArr);
console.log(arr1);

let newArr1 = arr1.filter(function(value, index, arr) {
    return value * 2
})

let total = arr1.reduce(function(sum, curr) {
    return sum + curr
}, 0)
console.log(total);

let findValue = arr1.find(function(value, index, arr) {
    return value == 7
})
console.log(findValue);

let findValue1 = arr1.some(function(value, index, arr) {
    return value == 7
})
console.log(findValue1);
console.log(arr1.includes(2));
console.log(arr1.slice(1, 3));;