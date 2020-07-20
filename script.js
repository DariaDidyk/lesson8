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

const userExample = {
    name: '<Custom Name>',
    salary: 1000,
    language: 'Java',
    tasks: 5,
}

const bonuses = {
    'C++': 100,
    Rust: 150,
}
const gradeTax = {
    [grades.Junior]: 0.25,
    [grades.Middle]: 0.50,
    [grades.Senior]: 0.75,
}

const grades = {
    Junior: 'junior',
    Middle: 'middle',
    Senior: 'senior',
};

function User(name, language, grade = grades.Junior) {
    this.name = name;
    this.grade = grade;
    this.salary = 1000;
    this.language = language;
    this.tasks = 0;
    this.default = 50; // так не точно 

    this.addTask = () => {
        this.tasks++;
    };

    this.finishTask = () => {
        if (this.tasks > 0) {
            this.tasks--;
            this.salary += (bonuses[this.language] || bonuses.default) * gradeTax[this.grade];
        }
    };
}

const user = new User('John', 'C++', grades.Junior);
const user1 = new User('Vasya', 'Rust', grades.Senior);
const user2 = new User('Nifertiti', 'Bu', grades.Middle);


user.addTask();
user.addTask();
user.addTask();
user.addTask();
user.addTask();

user.finishTask();
user.finishTask();
user.finishTask();

console.log(user.salary, user.tasks);

// console.log(user);
// console.log(user, user1, user === user1);
// console.log(user.tasks);

