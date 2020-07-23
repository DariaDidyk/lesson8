// const magicBook = {
//     boomSpell: 'Asda masasda',
//     soupSpell: 'Dase feads',
// };

// const kettle = {
//     material: 'metal',
//     result: null,
//     ingridients: {
//         ingridient1: 'nails',
//         ingridient2: 'bat heads',
//     },
//     shuffle() {
//         console.log('SHAFFLING...')
//     },
//     addIngridient(key, value) {
//         console.log('Adding..', key, value);
//         this.ingridients[key] = value;
//         this.shuffle()
//     },
// };

// const pick = (obj, key) => obj[key];

// function pick(obj, key) {
//     return obj[key];
// }


// kettle.spellTheCast = function() {
//     // console.log('Something');
//     console.log(this.material);
//     this.shuffle()
// };

// kettle.spellTheCast(); 
// kettle.shuffle();

// kettle.addIngridient('ing3', 'teeth');
// kettle.addIngridient('ing4', 'banana');
// kettle.addIngridient('ing5', 'poo');


// magicBook.spellTheCast = kettle.spellTheCast;


// const kettle = {
//     material: 'ABC',
//     spellTheCast() {
//         const copy = this;
//         const fnc = function() {
//             return self.material;
//         };
//         alert(fnc());
//     },
// };

// kettle.spellTheCast();



// function User() {
//     return {
//         name: '<Custom Name>',
//         salary: 1000,
//         language: 'Java',
//         tasks: 5,
//     };
// }

// const userExample = {
//     name: '<Custom Name>',
//     salary: 1000,
//     language: 'Java',
//     tasks: 5,
// }

// const bonuses = {
//     'C++': 100,
//     Rust: 150,
// }
// const gradeTax = {
//     [grades.Junior]: 0.25,
//     [grades.Middle]: 0.50,
//     [grades.Senior]: 0.75,
// }

// const grades = {
//     Junior: 'junior',
//     Middle: 'middle',
//     Senior: 'senior',
// };

// function User(name, language, grade = grades.Junior) {
//     this.name = name;
//     this.grade = grade;
//     this.salary = 1000;
//     this.language = language;
//     this.tasks = 0;
//     this.default = 50; // так не точно 

//     this.addTask = () => {
//         this.tasks++;
//     };

//     this.finishTask = () => {
//         if (this.tasks > 0) {
//             this.tasks--;
//             this.salary += (bonuses[this.language] || bonuses.default) * gradeTax[this.grade];
//         }
//     };
// }

// const user = new User('John', 'C++', grades.Junior);
// const user1 = new User('Vasya', 'Rust', grades.Senior);
// const user2 = new User('Nifertiti', 'Bu', grades.Middle);


// user.addTask();
// user.addTask();
// user.addTask();
// user.addTask();
// user.addTask();

// user.finishTask();
// user.finishTask();
// user.finishTask();

// console.log(user.salary, user.tasks);

// console.log(user);
// console.log(user, user1, user === user1);
// console.log(user.tasks);

// function UserA() {
//     console.log(new Target);
//     };

//     function ABC() {
//         console.log(new.target);
//     };
//     ABC();
//     new ABC();

// var s = 'abc';
// s.abc = 2;
// console.log(s.toUpperCase);



// console.log(String.prototype);
// console.log(Number.prototype);
// console.log(Boolean.prototype);
// console.log(Symbol.prototype);
// console.log(Object.prototype);

// const s = 2;

// Number.prototype.toBoolean = function() {
//     // console.log(this);
//     return Boolean(this.valueOf());
// }
// const n = 2;

// n.toBoolean();

// console.log((2).toBoolean());
// console.log((0).toBoolean());


// const str = 'Are you happpy';

// console.log(str[0], str.charArt(0), str.charCodeAt(0), str.length);

// function circus(str) {
//     let newStr = '';
//     for (let i = 0; i < str.length; i++) {
//         const element = str[i];
//         newStr += i && !(index % 2) ? element.toUpperCase() : element;
//     }
//     return newStr;
// }

const arr = [1,2,3];
// const gg = {
//     dgdg: 2,
//     hfhf: 5,
// }

// const arr = [2];
// const l2 = arr.length;

// delete arr[0];
// arr.splice(1, 1);
// delete gg.dgdg;
// console.log(arr, gg);

arr.push(4);
arr[arr.length] = 4;
arr.shift();
arr.pop();
console.log(arr);

while(arr.length) {
    console.log(arr.pop());
}






    