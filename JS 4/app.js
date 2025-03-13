
////////// Chapter 14-16 ARRAYS //////////


// Question no 1

var studentNames = [];


// Question no 2

let studentNamesObj = new Array();


// Question no 3

var stringArray = ["Hello World", "Web Development"];


// Question no 4  

var stringArray = [55, 45, 1000];


// Question no 5

var stringArray = [true, false];


// Question no 6

var stringArray = [55, false, 45, "Hello World", 1000, true,];


// Question no 7

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h1>Qualifications:</h1> <br>")
document.write("1. ", qualifications[0], "<br>")
document.write("2. ", qualifications[1], "<br>")
document.write("3. ", qualifications[2], "<br>")
document.write("4. ", qualifications[3], "<br>")
document.write("5. ", qualifications[4], "<br>")
document.write("6. ", qualifications[5], "<br>")
document.write("7. ", qualifications[6], "<br>")
document.write("8. ", qualifications[7], "<br><br><br>")


// Question no 8

studentNames = ["Farhan", "Ajmal", "Shahid"];
var marks = [320, 230, 420];
var maxmarks = 500
var farhanper = (marks[0] / maxmarks) * 100
var ajper = (marks[1] / maxmarks) * 100
var shahper = (marks[2] / maxmarks) * 100

document.write("Total Marks: ", maxmarks, "<br><br>");
document.write("Score of ", studentNames[0], "is ", marks[0], " Percentage: ", farhanper, "%<br>")
document.write("Score of ", studentNames[1], "is ", marks[1], " Percentage: ", ajper, "%<br>")
document.write("Score of ", studentNames[2], "is ", marks[2], " Percentage: ", shahper, "%<br><br>")


// Question no 9

// Initialize an array with color names. Display the array
// elements in your browser.

var colors = [" Red ", "Green ", "Blue ", "Yellow "]

document.write("<h2>Colors:</h2>");
document.write(colors);

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

var askColor = prompt("Which color do you wanna add at the beginning?");
colors.unshift(askColor);

document.write("<h3>Updated Colors:</h3>");
document.write(colors);

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

var askColor2 = prompt("Which color do you wanna add at the end?");
colors.push(askColor2);

document.write("<h3>Updated Colors:</h3>");
document.write(colors);

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

colors.unshift("Orange", "Purple");

document.write("<h3>Updated Colors:</h3>");
document.write(colors);

// d. Delete the first color in the array. Display the updated
// array in your browser.

colors.shift();

document.write("<h3>Updated Colors:</h3>");
document.write(colors);

// e. Delete the last color in the array. Display the updated
// array in your browser.

colors.pop();

document.write("<h3>Updated Colors:</h3>");
document.write(colors);

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your browser.

var askColor3 = prompt("Which color do you wanna add?");
var indexNum = +prompt("This color should be added on which INDEX number?");

colors.splice(indexNum, 0, askColor3);

document.write("<h3>Updated Colors:</h3>");
document.write(colors);

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then 
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

var startDelete = +prompt("From which index number you wanna delete?");
var deleteNum = +prompt("How much colors?");

colors.splice(startDelete, deleteNum,);

document.write("<h3>Updated Colors:</h3>");
document.write(colors);


// Question no 10

var studentScores = [320, 230, 150, 480, 120];
document.write("<br><br>Scores of students: ", studentScores);
document.write("<br>Ordered Scores of students: ", studentScores.sort());


// Question no 11

var cityNames = ["Karachi", " Lahore ", " Islamabad ", " Quetta ", " Peshawar ", " Rawalpindi"]
var selectedCities = cityNames.slice(2, 4)

document.write("<br><br> Cities List:<br> ", cityNames)
document.write("<br><br> Selected Cities List:<br> ", selectedCities)


// Question no 12

var arr = ["This ", " is ", " my ", " cat"];
document.write("<br><br> ARRAY:<br> ", arr.join(","));
document.write("<br><br> STRING:<br> ", arr.join(" "));


// Question no 13

var arr1 = [" Keyboard ", " Mouse ", " Printer ", " Moniter "];

document.write("<br><br> Devices: <br> ", arr1);

document.write("<br><br> Out: <br>", arr1[0]);
document.write("<br> Out: <br>", arr1[1]);
document.write("<br> Out: <br>", arr1[2]);
document.write("<br> Out: <br>", arr1[3]);


// Question no 14

document.write("<br><br> Devices: <br> ", arr1);

document.write("<br><br> Out: <br>", arr1[3]);
document.write("<br> Out: <br>", arr1[2]);
document.write("<br> Out: <br>", arr1[1]);
document.write("<br> Out: <br>", arr1[0], "<br><br>");


// Question no 15

var phoneManu = ["Apple", "Samsung", "Motorola", "Nokia", "Sony & Haier"]

document.write("<select>", "<option>", phoneManu[0], "</option>", "<option>", phoneManu[1], "</option>", "<option>", phoneManu[2], "</option>", "<option>", phoneManu[3], "</option>", "<option>", phoneManu[4], "</option>", "</select>")



////////// Chapter 14-16 ARRAYS END //////////













////////// Home Chapter 14-16 //////////


//// Chapter 15 (Array I) ////


// Question no 1

var studentNames1 = [];


// Question no 2

var studentNames2 = ["Hello"];


// Question no 3

var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]);


// Question no 4

var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o", "p"];
alert(alphabet.length);


// Question no 5

// Declare an array with one element and Add a second element
// with index in array. Create an alert whose message is the new
// element.

var studentNames2 = ["Hello"];
studentNames2[1] = " World"
alert(studentNames2[1])




//// Chapter 15 (Array II) ////


// Question no 1

var arr2 = ["Hey! "];
arr2.push("How are you?");
alert(arr2);


// Question no 2

var alphabet = ["h", "i", "j", "k"];
alphabet.pop();
alert(alphabet);


// Question no 3

var alphabet = ["h", "i", "j", "k"];
alphabet.push("l", "m");
alert(alphabet);



//// Chapter 15 (Array III) ////


// Question no 1

var sizes = ["S", "M", "L", "XL", "XXL"];
sizes.shift()
alert(sizes)


// Question no 2

var sizes = ["S", "M", "L", "XL", "XXL"];
sizes.unshift(1, 2, 3);
alert(sizes)


// Question no 3

var world = [" World "];
world.unshift(" Hello ");
alert(world)


// Question no 4

var sizes = ["S", "M", "L", "XL", "XXL"];
sizes[2] = "L2";
alert(sizes);


// Question no 5

var sizes = ["S", "M", "L", "XL", "XXL"];
var reSizes = sizes.slice(0, 3);
alert(reSizes);


// Question no 6

var pets = ["Dog", "Cat", "Ox", "Duck", "Frog"];
pets.splice(1, 3, "Pegon", "Hen");
alert(pets);


// Question no 7

var pets1 = ["Dog", "Cat", "Ox", "Duck", "Frog"];
pets1.splice(1, 2)
alert(pets1);


// Question no 8

var pets2 = ["Dog", "Cat", "Ox", "Duck", "Frog"];
var pets3 = pets2.slice(3, 5);
alert(pets3);



////////// Home Chapter 14-16 END //////////
