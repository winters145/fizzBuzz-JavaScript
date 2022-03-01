const generateMessages = (namesArr) => {
  return namesArr.map(namesObj => {
    return `Hi ${namesObj['name']}! ${namesObj['discount']} off our best sweets for you today!`;
  });
};

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];
console.log(generateMessages(namesAndDiscounts));




// const person = {
//   name: 'Maxine',
//   age: 32,
//   address: {
//     city: 'London',
//     postcode: 'E1 123'
//   },
//   hobbies: ['writing', 'tennis', 'cooking']
// };

// console.log(person['address']['city']);
// console.log(person['hobbies'][1])