const magicBook = {
    boomSpell: 'Asda masasda',
    soupSpell: 'Dase feads',
};

const kettle = {
    material: 'metal',
    result: null,
    ingridients: {
        ingridient1: 'nails',
        ingridient2: 'bat heads',
    },
    shuffle() {
        console.log('SHAFFLING...')
    },
    addIngridient(key, value) {
        console.log('Adding..', key, value);
        this.ingridients[key] = value;
        this.shuffle()
    },
};

// const pick = (obj, key) => obj[key];

// function pick(obj, key) {
//     return obj[key];
// }


kettle.spellTheCast = function() {
    // console.log('Something');
    console.log(this.material);
    this.shuffle()
};

// kettle.spellTheCast(); 
// kettle.shuffle();

// kettle.addIngridient('ing3', 'teeth');
// kettle.addIngridient('ing4', 'banana');
// kettle.addIngridient('ing5', 'poo');


// magicBook.spellTheCast = kettle.spellTheCast;


const kettle = {
    material: 'ABC',
    spellTheCast() {
        const copy = this;
        const fnc = function() {
            return self.material;
        };
        alert(fnc());
    },
};

kettle.spellTheCast();