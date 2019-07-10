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

const myObject = {
  meals: [
    "breakfast",
    "second breakfast",
    "elevenses",
    "lunch",
    "afternoon tea",
    "dinner",
    "supper"
  ]
};

console.log(myObject.meals[3]);

const arr = [
  { name: "matt", jobTitle: "owner" },
  { name: "bill", jobTitle: "coder", boss: "matt" },
  { name: "bob", jobTitle: "developer", boss: "matt" },
  { name: "will", jobTitle: "developer" },
  { name: "thorton", jobTitle: "dragon", boss: "matt" }
];

const flow = array =>
  array.map(({ name, jobTitle, boss }) => {
    boss = boss ? "reports to " + boss : "doesn't report to anyone";
    console.log(`${jobTitle} ${name} ${boss}.`);
  });

flow(arr);

const cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
};
const decode = (word, obj) => {
  return word[0] in cipher ? word[obj[word[0]] - 1] : " ";
};

const decodeWords = str => {
  return str
    .split(" ")
    .map(word => decode(word, cipher))
    .join("");
};

console.log(decodeWords("craft block argon meter bells brown croon droop"));

function createCharacter(
  name,
  nickName,
  race,
  origin,
  attack,
  defense,
  weapon
) {
  return {
    name,
    nickName,
    race,
    origin,
    attack,
    defense,
    weapon,
    describe() {
      return `${this.name} is a ${this.race} from ${this.origin} ${
        this.weapon ? `who uses ${this.weapon}` : ""
      }`;
    },
    evaluateFight(character) {
      return `Your opponent takes ${
        character.defense > this.attack ? 0 : this.attack - character.defense
      } damage and you receive ${character.attack - this.defense} damage`;
    }
  };
}

const characters = [
  createCharacter(
    "Gandalf the White",
    "gandalf",
    "Wizard ",
    "Middle Earth ",
    10,
    6,
    "wizard staff"
  ),
  createCharacter(
    "Bilbo Baggins ",
    " bilbo ",
    "Hobbit",
    "The Shire",
    2,
    1,
    "Ring"
  ),
  createCharacter(
    "Frodo Baggins",
    "frodo",
    "Hobbit",
    "The Shire",
    3,
    2,
    "Barrow Blade"
  ),
  createCharacter(
    "Legolas  ",
    "legolas",
    " Elf",
    "Woodland Realm",
    8,
    5,
    "Bow and Arrow"
  ),
  createCharacter(
    "Aragorn son of Arathorn",
    "aragorn",
    "Man",
    "Dunnedain",
    6,
    8,
    "Anduril"
  ),
  createCharacter(
    "Arwen Undomiel",
    "aragorn",
    "Half-Elf",
    "Rivendell",
    6,
    8,
    "Hadhafang"
  )
];

console.log(
  characters.find(character => character.nickName === "aragorn").describe()
);

const hobbitCharacters = characters.filter(
  character => character.race === "Hobbit"
);
console.log(hobbitCharacters);

const highDamage = characters.filter(character => character.attack > 5);
console.log(highDamage);

const HEROES = [
  { id: 1, name: "Captain America", squad: "Avengers" },
  { id: 2, name: "Iron Man", squad: "Avengers" },
  { id: 3, name: "Spiderman", squad: "Avengers" },
  { id: 4, name: "Superman", squad: "Justice League" },
  { id: 5, name: "Wonder Woman", squad: "Justice League" },
  { id: 6, name: "Aquaman", squad: "Justice League" },
  { id: 7, name: "Hulk", squad: "Avengers" }
];

function findOne1(arr, query) {
  let arrAux = arr.find(arrObj => {
    let objKeys = Object.keys(arrObj);
    let queryKeys = Object.keys(query);

    for (let i = 0; i < queryKeys.length; i++) {
      if (query[queryKeys[i]] != arrObj[queryKeys[i]]) return null;
    }
    return arrObj;
  });
  return arrAux ? arrAux : null;
}

// const findOne2 = (arr, queryObj) => {
//   const element = arr.find(obj => {
//     let correct = false;
//     for (let key in queryObj) {
//       if (obj[key] === queryObj[key]) {
//         correct = true;
//       } else {
//         correct = false;
//         return correct;
//       }
//     }
//     return correct;
//   });
//   return element ? element : null;
// };

console.log(findOne1(HEROES, { id: 1 }));
console.log(findOne1(HEROES, { id: 10 }));
console.log(findOne1(HEROES, { id: 2, name: "Aquaman" }));
console.log(findOne1(HEROES, { id: 5, squad: "Justice League" }));
console.log(findOne1(HEROES, { squad: "Justice League" }));

// console.log(findOne2(HEROES, { id: 1 }));
// console.log(findOne2(HEROES, { id: 10 }));
// console.log(findOne2(HEROES, { id: 2, name: "Aquaman" }));
// console.log(findOne2(HEROES, { id: 5, squad: "Justice League" }));
// console.log(findOne2(HEROES, { squad: "Justice League" }));

const Database = {
  store: {
    heroes: [
      { id: 1, name: "Captain America", squad: "Avengers" },
      { id: 2, name: "Iron Man", squad: "Avengers" },
      { id: 3, name: "Spiderman", squad: "Avengers" },
      { id: 4, name: "Superman", squad: "Justice League" },
      { id: 5, name: "Wonder Woman", squad: "Justice League" },
      { id: 6, name: "Aquaman", squad: "Justice League" },
      { id: 7, name: "Hulk", squad: "Avengers" }
    ]
  },
  findOne(queryObj) {
    const element = this.store.heroes.find(obj => {
      let correct = false;
      for (let key in queryObj) {
        if (obj[key] === queryObj[key]) {
          correct = true;
        } else {
          correct = false;
          return correct;
        }
      }
      return correct;
    });
    return element ? element : null;
  }
};

console.log(Database.findOne({ squad: "cactus parade" }));
