"use strict";
// q#1 already downloded
// q# 2
let message = "Hello ilsa, would you like to learn some typesript today?";
console.log(message);
// q#3
let name1 = "ilsa";
console.log(name1);
let name2 = "ILSA";
console.log(name2);
let name3 = "syedailsakhalid";
console.log(name3);
// Q # 4
let statement = "Seek knowledge from cradle to the grave.";
console.log(statement);
// Q # 5
let n = "mahatma gandhi ";
let m = "The future depends on what we do in the present";
console.log(n + m);
// Q # 7
let o = 6;
let p = 7;
//Q # 8
console.log(o - p);
console.log(o + p);
console.log(o * p);
console.log(o / p);
//Q # 9
let favnumber = 7;
if (favnumber === 7) {
    console.log("this is my graduation");
}
// Q # 10
// 3-10-24 this is enough for today by ilsa till 10 point except quwstion 6
// Q # 11
let name4 = "ilsa,mannal,aiman,hania";
console.log(name4);
//Q # 12
let message1 = "Hey Ilsa, I hope you're doing well!";
console.log(message1);
let message2 = "Hey Mannal, I hope you're doing well!";
console.log(message2);
let message3 = "Hey Aiman, I hope you're doing well!";
console.log(message3);
let message4 = "Hey Hania, I hope you're doing well!";
console.log(message4);
//Q # 13
let transportmode = "truck";
if (transportmode === "car") {
    console.log("like to drive honda civic");
}
else if (transportmode === "motorbike") {
    console.log("like to ride r1");
}
else if (transportmode === "bicycle") {
    console.log("i like to ride my brother's bicle");
}
else {
    console.log("go by walk");
}
// question # 06 which was remaining
let name_with_whitespace = "\t\t  \n\t Alice \t\n  \t\n";
console.log(name_with_whitespace);
let Name_after_stripping_whitespace = "Alice";
console.log(Name_after_stripping_whitespace);
//Q # 14
// List of people to invite to dinner
let GuestList = ["Leonardo da Vinci", "Jane Austen", "Neil Armstrong"];
// Print invitation messages for each person
GuestList.forEach(Guest => {
    console.log(`Dear ${Guest},\n\nYou are invited to dinner. It would be wonderful to have you join us!\n\nBest regards,\n[ilsa]\n`);
});
// //Q # 15
// Initial guest list
let guestList = ["Leonardo da Vinci", "Jane Austen", "Neil Armstrong"];
// Name of the guest who can't make it
let guestWhoCantMakeIt = guestList[1]; // Assuming the second guest can't make it
// Print a message stating the name of the guest who can't make it
console.log(`Unfortunately, ${guestWhoCantMakeIt} can't make it to dinner.\n`);
// Replace the name of the guest who can't make it with the name of the new person you are inviting
guestList[1] = "Albert Einstein"; // Replace with the name of the new person you are inviting
// Print invitation messages for each person who is still in the list
console.log("Second set of invitation messages:");
guestList.forEach(guest => {
    console.log(`Dear ${guest},\n\nI would be honored to have you join me for dinner. Your presence would make the evening truly special.\n\nSincerely, [ilsa]\n`);
});
// //Q # 16
// Informing people that a bigger dinner table is found
console.log("Great news! We found a bigger dinner table!\n");
// Add one new guest to the beginning of the array
guestList.unshift("Mahatma Gandhi");
// Add one new guest to the middle of the array
guestList.splice(Math.floor(guestList.length / 2), 0, "Amelia Earhart");
// Use append() to add one new guest to the end of the list
guestList.push("Albert Einstein");
// Print invitation messages for the updated guest list
console.log("New set of invitation messages:");
guestList.forEach(guest => {
    console.log(`Dear ${guest},\n\nI would be honored to have you join me for dinner. Your presence would make the evening truly special.\n\nSincerely, [ilsa]\n`);
});
// //Q # 17
// Print invitation messages for the initial guest list
guestList.forEach(guest => {
    console.log(`Dear ${guest},\n\nI would be honored to have you join me for dinner. Your presence would make the evening truly special.\n\nSincerely, [ilsa]\n`);
});
// Print a message indicating that only two people can be invited
console.log("Unfortunately, the new dinner table won't arrive in time. I can only invite two people for dinner.\n");
// Remove guests until only two names remain
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, but I can't invite you to dinner.`);
}
// Print invitation messages for the remaining two guests
console.log("\nInvitation messages for the remaining guests:");
guestList.forEach(guest => {
    console.log(`Dear ${guest},\n\nYou're still invited to dinner. Looking forward to seeing you!\n`);
});
// Remove the last two names from the list to have an empty list
guestList = [];
console.log("Empty list:", guestList);
//Q # 18
let placesToVisit = ["Paris", "Saudia Arabia", "Malaysia", "Tokyo", "Greece"];
// Print the original array
console.log("Original order:");
console.log(placesToVisit);
// Print the array in alphabetical order without modifying the original list
console.log("\nAlphabetical order:");
console.log([...placesToVisit].sort());
// Confirm that the original order is still intact
console.log("\nOriginal order (still intact):");
console.log(placesToVisit);
// Print the array in reverse alphabetical order without modifying the original list
console.log("\nReverse alphabetical order:");
console.log([...placesToVisit].sort().reverse());
// Confirm that the original order is still intact
console.log("\nOriginal order (still intact):");
console.log(placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed order:");
console.log(placesToVisit);
// Reverse the order of the list again to return to the original order
placesToVisit.reverse();
console.log("\nBack to original order:");
console.log(placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("\nSorted in alphabetical order:");
console.log(placesToVisit);
// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in reverse alphabetical order:");
console.log(placesToVisit);
//Q # 19
// Print invitation messages for the initial guest list
guestList.forEach(guest => {
    console.log(`Dear ${guest},\n\nI would be honored to have you join me for dinner. Your presence would make the evening truly special.\n\nSincerely, [Your Name]\n`);
});
// Print a message indicating the number of people invited to dinner
console.log(`Number of people invited to dinner: ${guestList.length}\n`);
// Print a message indicating that only two people can be invited
console.log("Unfortunately, the new dinner table won't arrive in time. I can only invite two people for dinner.\n");
// Remove guests until only two names remain
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, but I can't invite you to dinner.`);
}
// Print invitation messages for the remaining two guests
console.log("\nInvitation messages for the remaining guests:");
guestList.forEach(guest => {
    console.log(`Dear ${guest},\n\nYou're still invited to dinner. Looking forward to seeing you!\n`);
});
// Remove the last two names from the list to have an empty list
guestList = [];
console.log("Empty list:", guestList);
// Q # 20
// List of famous landmarks
let landmark = [
    "Eiffel Tower",
    "Great Wall of China",
    "Taj Mahal",
    "Machu Picchu",
    "Statue of Liberty",
    "Sydney Opera House",
    "Pyramids of Giza"
];
// Print the list of landmarks
console.log("List of famous landmarks:");
console.log(landmark);
// Create objects representing different vehicles
let car = {
    name: "Toyota Camry",
    type: "Sedan",
    manufacturer: "Toyota",
    year: 2022
};
let bike = {
    name: "Honda CB500X",
    type: "Motorcycle",
    manufacturer: "Honda",
    year: 2021
};
let truck = {
    name: "Ford F-150",
    type: "Truck",
    manufacturer: "Ford",
    year: 2020
};
// Print information about each vehicle
console.log("Car:", car);
console.log("Bike:", bike);
console.log("Truck:", truck);
//Q # 22
// Define an array of fruits
let fruits = ["Apple", "Banana", "Orange"];
// Intentionally access an index that is out of bounds
console.log(fruits[3]); // This will produce an index error because the array has only 3 elements (0, 1, 2)
// Correct the error by accessing a valid index
console.log(fruits[1]); // Accessing the second element of the array
// Alternatively, we could add an element to the array to fix the error
fruits.push("Grape"); // Add "Grape" to the end of the array
console.log(fruits[3]); // Now accessing index 3 will not produce an error
// Q # 23
let x = 5;
let y = 10;
let Name1 = "Alice";
let age = 25;
let isSunny = true;
// Test 1: Check if x is equal to 5
console.log("Is x equal to 5? I predict true.");
console.log(x == 5); // True
// Test 2: Check if y is greater than 15
console.log("Is y greater than 15? I predict false.");
console.log(y > 15); // False
// Test 3: Check if name is equal to "Alice"
console.log("Is name equal to 'Alice'? I predict true.");
console.log(Name1 == "Alice"); // True
// Test 4: Check if age is less than or equal to 30
console.log("Is age less than or equal to 30? I predict true.");
console.log(age <= 30); // True
// Test 5: Check if isSunny is true
console.log("Is it sunny outside? I predict true.");
console.log(isSunny); // True
// Test 6: Check if x is not equal to 10
console.log("Is x not equal to 10? I predict true.");
console.log(x != 10); // True
// Test 7: Check if y is less than 5
console.log("Is y less than 5? I predict false.");
console.log(y < 5); // False
// Test 8: Check if name is equal to "Bob"
console.log("Is name equal to 'Bob'? I predict false.");
console.log(Name1 == "Bob"); // False
// Test 9: Check if age is greater than 30
console.log("Is age greater than 30? I predict false.");
console.log(age > 30); // False
// Test 10: Check if isSunny is false
console.log("Is it sunny outside? I predict false.");
console.log(!isSunny); // False
// Q # 24
// Tests for equality and inequality with strings
let fruit1 = "apple";
let fruit2 = "banana";
console.log("Test 1: Is fruit1 equal to 'apple'? I predict true.");
console.log(fruit1 == "apple"); // True
console.log("Test 2: Is fruit2 not equal to 'apple'? I predict true.");
console.log(fruit2 != "apple"); // True
// Tests using the lower case function
let word = "HELLO";
console.log("Test 3: Is the lower case of 'HELLO' equal to 'hello'? I predict true.");
console.log(word == "hello"); // True
// Numerical tests
let num1 = 10;
let num2 = 20;
console.log("Test 4: Is num1 less than num2? I predict true.");
console.log(num1 < num2); // True
console.log("Test 5: Is num2 greater than or equal to num1? I predict true.");
console.log(num2 >= num1); // True
// Tests using "and" and "or" operators
let sunny = true;
let warm = true;
console.log("Test 6: Is it sunny and warm outside? I predict true.");
console.log(sunny && warm); // True
console.log("Test 7: Is it sunny or warm outside? I predict true.");
console.log(sunny || warm); // True
// Test whether an item is in an array
let numbers = [1, 2, 3, 4, 5];
console.log("Test 8: Is 3 in the numbers array? I predict true.");
console.log(numbers.includes(3)); // True
// Test whether an item is not in an array
console.log("Test 9: Is 6 not in the numbers array? I predict true.");
console.log(!numbers.includes(6)); // True
// Q # 25
let alien_color = 'green';
if (alien_color == 'green') {
    console.log("Congratulations! You just earned 5 points!");
}
let alien_color1 = 'red'; // Assuming the alien color is red
if (alien_color1 == 'green') {
    console.log("Congratulations! You just earned 5 points!");
}
// Q # 26
let alien_color2 = 'green';
if (alien_color2 == 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien!");
}
else {
    console.log("Congratulations! You just earned 10 points for shooting the alien!");
}
// Q # 27
let alien_color3 = 'red'; // Assuming the alien color is red
if (alien_color3 == 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien!");
}
else {
    console.log("Congratulations! You just earned 10 points for shooting the alien!");
}
let alien_color4 = 'green';
if (alien_color4 == 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien!");
}
else if (alien_color4 == 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien!");
}
else if (alien_color4 == 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien!");
}
let alien_color5 = 'yellow';
if (alien_color5 == 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien!");
}
else if (alien_color5 == 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien!");
}
else if (alien_color5 == 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien!");
}
let alien_color6 = 'red';
if (alien_color6 == 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien!");
}
else if (alien_color6 == 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien!");
}
else if (alien_color6 == 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien!");
}
// Q # 28
let Age = 25; // Set the age of the person
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//Q # 29
// Make an array of your three favorite fruits
let favorite_fruits = ["banana", "apple", "mango"];
// Write five if statements to check for certain fruits in the array
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("mango")) {
    console.log("You really like mangoes!");
}
if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}
else {
    console.log("You don't have strawberries in your favorite fruits list.");
}
if (favorite_fruits.includes("kiwi")) {
    console.log("You really like kiwis!");
}
else {
    console.log("You don't have kiwis in your favorite fruits list.");
}
//Q # 30
// Make an array of usernames
let usernames = ["admin", "Alice", "Bob", "Charlie", "David"];
// Loop through the array and print a greeting to each user
usernames.forEach(username => {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});
// let mama ="\t\t \t\t\t\t\tayan \t\n\t\n"
// console.log(mama)
//  Q # 31
let users = []; // Empty array
// Check if the list of users is not empty
if (users.length > 0) {
    for (let user of users) {
        console.log("Deleting user:", user);
        // Remove the usernames from the array
        users.splice(users.indexOf(user), 1);
    }
    console.log("All users have been removed.");
}
else {
    // Print message if the list is empty
    console.log("We need to find some users!");
}
// Q # 32
let current_users = ["user1", "user2", "user3", "user4", "user5"];
let new_users = ["user6", "user7", "User3", "user8", "user9"]; // Note: "User3" is in a different case
for (let new_user of new_users) {
    let usernameExists = current_users.some(user => user.toLowerCase() === new_user.toLowerCase());
    if (usernameExists) {
        console.log(`Sorry, the username "${new_user}" is already taken. Please enter a new username.`);
    }
    else {
        console.log(`Congratulations! The username "${new_user}" is available.`);
    }
}
// Q # 33
let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
    let ordinalEnding;
    if (number === 1) {
        ordinalEnding = "st";
    }
    else if (number === 2) {
        ordinalEnding = "nd";
    }
    else if (number === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log(`${number}${ordinalEnding}`);
}
// Q # 34
let favoritePizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];
for (let pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}
console.log("I really love pizza!");
// Q # 35
let animals = ["Dog", "Cat", "Rabbit"];
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!");
//  Q # 36
function make_shirt(size, message) {
    console.log(`You have ordered a ${size} shirt with the following message: "${message}".`);
}
// Call the function
make_shirt("medium", "Hello, World!");
//  Q # 37
function Make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`You have ordered a ${size} shirt with the following message: "${message}".`);
}
// Make a large shirt with the default message
Make_shirt();
// Make a medium shirt with the default message
Make_shirt("medium");
// Make a shirt of any size with a different message
make_shirt("small", "Keep coding!");
//  Q # 38
function describe_city(city, country = "Unknown") {
    console.log(`${city} is in ${country}.`);
}
// Call the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("New York", "USA");
describe_city("Sydney"); // Since country is not provided, it will use the default value "Unknown"
// Q # 39
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Call the function with at least three city-country pairs
let city1 = city_country("Lahore", "Pakistan");
let city2 = city_country("New York", "USA");
let city3 = city_country("Sydney", "Australia");
console.log(city1);
console.log(city2);
console.log(city3);
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Make three dictionaries representing different albums
let album1 = make_album("Artist1", "Album1");
let album2 = make_album("Artist2", "Album2", 12);
let album3 = make_album("Artist3", "Album3", 15);
// Print each return value to show that Objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
//  Q # 41
function Show_Magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Define an array of magician's names
let magicianNames = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Call the show_magicians() function and pass the array of magician's names
show_magicians(magicianNames);
// Q # 42
function Make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}
function Show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Define an array of magician's names
let MagicianNames = ["famia", "anas", "a.basiit", "ayan"];
// Call the make_great() function to modify the magician names
make_great(MagicianNames);
// Call the show_magicians() function to see the modified list
show_magicians(MagicianNames);
//  Q # 43
function make_great(magicians) {
    let greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
}
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Define an array of magician's names
let MagicianNames1 = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Call the make_great() function with a copy of the magician names array
let Great_Magician_Names = make_great([...magicianNames]); // Use spread operator to create a copy
// Call the show_magicians() function with the original array
console.log("Original Magicians:");
show_magicians(magicianNames);
// Call the show_magicians() function with the new array containing "the Great" added to each name
console.log("\nModified Magicians:");
show_magicians(Great_Magician_Names);
// Q # 44
function makeSandwich(...items) {
    console.log("Making sandwich with the following items:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("Sandwich is ready!");
}
// Call the function three times with a different number of arguments each time
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Turkey", "Swiss", "Avocado");
makeSandwich("Peanut Butter", "Jelly");
function createCar(manufacturer, model, ...extras) {
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add any additional properties provided as keyword arguments
    for (let extra of extras) {
        const [key, value] = extra;
        car[key] = value;
    }
    return car;
}
// Call the function with required information and additional name-value pairs
let myCar = createCar("Toyota", "Corolla", ["color", "blue"], ["year", "2022"]);
// Print the object that's returned to verify all information was stored correctly
console.log(myCar);
///////////////////////////// FINALLY THE END ////////////////////
