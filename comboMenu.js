const readLine = require(`readline-sync`);

let answer = readLine.question("What type of burger would you like chicken $5.25, beef $6.25, or tofu $5.75?: ");
while (answer != "chicken" && answer != "beef" && answer != "tofu"){
    console.log("invalid choice");
    answer = readLine.question("Repeat it? ");
    while (answer != "sure" && answer != "yes"){
        console.log("invalid choice");
    }
}
let answer2 = readLine.question("Would you like a beverage with it?: ");

while (answer2 != "yes" && answer2 != "no"){
    console.log("invalid choice");
    answer2 = readLine.question("Repeat it?");
    while (answer2 != "no" && answer2 != "yes");
} if (answer2 == "no"){
    console.log("No drink with your food.");}
if (answer2 == "yes"){
    console.log("Drinks with your food.");
    let answer3 = readLine.question("what size?\n small $1.00, medium $1.75, large $2.25: ");

}

let answer3 = readLine.question("Would you like a side of fries with it?: ");
while (answer3 != "yes" && answer3 != "no"){
    console.log("invalid choice");}
if(answer3 = "yes"){
    answer3 = readLine.question("What size?(Small: $3.25, Medium: $5, Large: $6.50: ");
}

let number4 = Number(readLine.question("How many packet of ketch up do you want?: "));
let egg = number4 * 0.25;
console.log(`${number4} ketchup packets for you. (Cost ${egg})`);
