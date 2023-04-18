// Create an object of key-Value pairs
let contacts = {
    mom:1234567,
    bro:5555555,
    bff:1592467

}

//log all

console.log(contacts);

//access a specific entry by its key (name)

console.log(contacts.bff);

//can't access if the key doesn't exist

console.log(contacts.myself);

//add a new entry

contacts.sis = 3456677;
console.log(contacts.sis);
//update an entry

contacts.bff = 1111111;
console.log(contacts)

//delete an entry

delete contacts.mom;
console.log(contacts);

//is there a key called __ in there?

console.log("bff" in contacts);
console.log("myself" in contacts);

//objects are like arrays - pass by reference (location) not by value
//notice the following
let a = {
    value:20
};
let b = a;
let c = {
    value:20
};
console.log(a==b); //same object, as b points to a
console.log(a==c); //different objects with same value
console.log(b==c); //different objects with same value

console.log(a.value == c.value); //the value is the same, but not the object

//numbers are passed by value, not by reference. Similar for strings and booleans
//create 5 objects below:

let dog = {
    dogName: 'Zelda',
    breed: 'Terrier',
    age: 9,
    size: 'medium',
    barks: true

}
console.log(dog)
}

let Demitiah = {
    Name: 'demitiah',
    age: 4,
    height: '5,9',
    size:'medium',
    Race: 'Mexican',
}
console.log(Demitiah);

let jesus = {
    Name: 'jesus ',
    age: 12,
    height: '5,4',
    size:'small',
    Race: 'Mexican',
}
console.log(jesus);

let Dora = {
    Name: 'Dora',
    age: 12,
    height: '5,4',
    size:'small',
    Race: 'Mexican',
}
console.log(Dora);

let mario = {
    Name: 'mario',
    age: 36,
    height: '5,4',
    size:'small',
    Race: 'Mexican',
}
console.log(mario);