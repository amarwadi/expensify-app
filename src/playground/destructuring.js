
// const person = {
//     name : "Anup",
//     age : 40,
//     location : {
//         "city" : "San Diego",
//         "temp" : "75"
//     }
// }
// const {name: firstName = "Anonymous", age} = person;

// console.log(`${firstName} is ${age} years old`);

// const {temp: temperature, city} = person.location;

// if (city && temperature) {
//     console.log(`Its ${temperature} in ${city}.`);
// }

// const book = {
//     title : "Ego is the enemy",
//     author : "Ryan Holiday",
//     publisher : {
//         "name" : "Penguin Books"
//     }
// }

// const {title} = book;
// const {name: publisherName = "Self Published"} = book.publisher; 

// console.log(`${publisherName} published ${title}`)

const address = ["500 Front St", "San Diego", "CA", "92103"];
const [, city, state, zip] = address;
console.log(`${city} is in ${state}`);

const menuItems = ["Coffee", "$2", "$2.50", "$2.75"];
const [name, , medium] = menuItems;
console.log(`A medium ${name} costs ${medium}`);