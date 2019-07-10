let loaf = {
  flour: 300,
  water: 210
};

console.log(loaf.flour);
console.log(loaf.water);

loaf.hydration = function() {
  return (this.water / this.flour) * 100;
};

console.log(loaf.hydration());

const obj = { foo: 1, bar: 2, fum: 3, quux: 4, spam: 5 };

const consoler = object => {
  for (let key in object) {
    console.log(`${key}: ${object[key]}`);
  }
};

consoler(obj);

const myObject = {meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']}; 

console.log(myObject.meals[3]);