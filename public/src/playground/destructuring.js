// const person = {
//     name: 'Justin',
//     age: 29,
//     location: {
//         city: 'La Habra',
//         temp: 80
//     }
// };

// const { name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'House of Leaves',
//     author: 'Bert McCracken',
//     publisher: {
//         name: 'Heartwork'
//     }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

const address = ['1299 S Juniper Street', 'Los Angeles', 'California', '90631'];
const [ street, city, state = 'New York', zip] = address;

console.log(`You are in ${city} ${state}.`)

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ beverage, , medium, ] = item;

console.log(`A medium ${beverage} costs ${medium}.`);