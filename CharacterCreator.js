const readLine = require('readline-sync');

let diceRolled =[];
let character1 = {
    //empty to start
}

createChar(character1, diceRolled);

function rolld6(){
    return Math.ceil(Math.random()*6);
}

function rollDice(amount, list){
    for (let i = 0; i < amount; i++){
        let roll = rolld6();
        console.log(`You rolled a ${roll}!`);
        list.push(roll)
    }
}


function sum(list) {
    let sum = 0;
    for (let i=0; i<list.length; i++){
        sum += list  [1]
    }
    return sum;
}

function  rollStat(list) {
    list = [];
    rollDice(4, list);
    return sum(list)
}

function  createChar(character,list) {
    character.name = readLine.question("Enter character name: ");
    console.log("Rolling STR");
    character.strength = rollStat(diceRolled);
    console.log("Rolling DEX");
    character.dexerity = rollStat(diceRolled);
    console.log("Rolling CON");
    character.constitution = rollStat(diceRolled);
    console.log("Rolling INT");
    character.intelligence = rollStat(diceRolled);
    console.log("Rolling WIS");
    character.wisdom = rollStat(diceRolled);
    console.log("Rolling CHA");
    character.charisma = rollStat(diceRolled);
    console.log("Rolling CHA");
    character.fortune = rollStat(diceRolled);
    console.log("Rolling HIH");
    character.Height = rollStat(diceRolled);
    console.log("Rolling age");
    character.Age = rollStat(diceRolled);

    let answer = readLine.question("Welcome to the great fortune place. Do you want to know your fortune? yes or no: ");
    while (answer != "yes" && answer != "no"){
        console.log("invalid choice");
        answer = readLine.question("Enter y or n: ");
    }
    let answer2 = readLine.question("Ask your question: ");

    let answerList = ['It is certain.', 'Without a doubt.', 'My reply is no.', 'My sources say no.', 'Ask again later.', 'Reply hazy, try again'];

    let randomNum = Math.floor(Math.random()*answerList.length);

    let randomAnswer = answerList[randomNum];
    console.log(randomAnswer);
    console.log(character);
    displayChar(character);
}

function displayChar(Char){
    console.log('----------------------');
    console.log(`Name: ${Char.Name}`);
    console.log(`STR: ${Char.strength}`);
    console.log(`DEX: ${Char.dexerity}`);
    console.log(`CON: ${Char.constitution}`);
    console.log(`INT: ${Char.intelligence}`);
    console.log(`WIS: ${Char.wisdom}`);
    console.log(`CHA: ${Char.charisma}`);
    console.log(`FOR: ${Char.fortune}`);
    console.log(`HIH: ${Char.height}`);
    console.log(`FOR: ${Char.age}`);
    console.log('-----------------------');
}
let answer = readLine.question("Welcome to the great fortune place. Do you want to know your fortune? yes or no: ");
while (answer != "yes" && answer != "no"){
    console.log("invalid choice");
    answer = readLine.question("Enter y or n: ");
}


let answer2 = readLine.question("Ask your question: ");

let answer3 = readLine.question("ok see you later:");
console.log("your welcome any time ");
let answerList = ['It is certain.', 'Without a doubt.', 'My reply is no.', 'My sources say no.', 'Ask again later.', 'Reply hazy, try again'];

let randomNum = Math.floor(Math.random()*answerList.length);

let randomAnswer = answerList[randomNum];
console.log(randomAnswer);


