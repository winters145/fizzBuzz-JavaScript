const candies = [
  { name: 'Aero', price: 1.99 },
  { name: 'skitties', price: 2.99 },
  { name: 'Mars', price: 1.49 },
  { name: 'Maltesers', price: 3.49 },
  { name: 'skittles', price: 1.49 },
  { name: 'starburst', price: 5.99 },
  { name: 'Ricola', price: 1.99 },
  { name: 'Polkagris', price: 5.99 },
  { name: 'Pastila', price: 4.99 },
  { name: 'Mentos', price: 8.99 },
  { name: 'Raffaello', price: 7.99 },
  { name: 'Gummi bears', price: 10.99 },
  { name: 'Fraise Tagada', price: 5.99 }
];

const searchCandies = (search, price) => {
  return candies
  .filter(candy => candy.name.startsWith(search))
  .filter(candy => candy.price < price)
  .map(candy => candy.name)
}
console.log(searchCandies('Ma', 10))

module.exports = (searchCandies)
