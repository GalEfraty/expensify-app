/* 
 >>> OBJECT DESTRUCTURING  <<<

const person = {
    name: 'Gal',
    age: 26,
    location: {
        city: 'Tel Aviv',
        temp: 32
    }
};

const {name = 'Anonymous', age} = person;
const {temp: temprature, city} = person.location;

console.log(`${name} is ${age}`);
console.log(`It's ${temprature} in ${city}`);

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publishername = "self"} = book.publisher;

console.log(publishername);
*/

/* ARRAY DESTRUCTURING */

const adress = ['12 Fikus Street', 'Tel Aviv', 'Israel', '123456']
const [street, city, state, zip] = adress

console.log(`You are in ${city} ${state}`)

const item = ['Cofee (hot)', '$2.00', '$2.50', '$2.75']
const [itemName, , medium] = item
console.log(`A medium ${itemName} cost ${medium}`)