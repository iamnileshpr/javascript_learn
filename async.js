/* let biryani = new Promise(function(resolve, reject) {
    kyaOrderAyyega = false;
    if (kyaOrderAyyega) {
        resolve("order aayega");
    } else {
        reject("Order nahi aayega");
    }
})

//now two condition:biryani.then().catch().finally()
biryani.then(function(result) {
        console.log("badhai ho..", result);
    })
    .catch(function(error) {
        console.log("order cancel...", error);
    })
    .finally(function() {
        console.log("ghar chala jaaunga"); //biryani aaye ya na aaye mein ghar chala jaaunga
    }) */

//fetch
/* fetch('https://dummyjson.com/products').then(function(result) {
        return result.json()
    }).then(function(data) {
        console.log(data.products);
    })
    .catch(function(error) {
        console.log("cancel error", error);

    }).finally(function() {
        console.log("kaam khaatam");
    }) */

//async await

async function getData() {
    try {
        let response = await fetch('https://dummyjson.com/products')
        let data = await response.json()
        console.log(data.products);

    } catch (error) {
        console.log('error', error);
    }
}
getData()