////// Chapter 14-16 ARRAYS //////


// Question no 1

var studentNames = [];


// Question no 2

var stringArray = ["Hello World", "Web Development"];


// Question no 3    

var stringArray = [55, 45, 1000];


// Question no 4

var stringArray = [true, false];


// Question no 5

var stringArray = [55, false, 45, "Hello World", 1000, true,];


// Question no 6

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD."];

document.write("<h1>Qualifications:</h1> <br>")
document.write("1. ", qualifications[0], "<br>")
document.write("2. ", qualifications[1], "<br>")
document.write("3. ", qualifications[2], "<br>")
document.write("4. ", qualifications[3], "<br>")
document.write("5. ", qualifications[4], "<br>")
document.write("6. ", qualifications[5], "<br>")
document.write("7. ", qualifications[6], "<br>")
document.write("8. ", qualifications[7], "<br><br><br>")


// Question no 7

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


// Question no 8

var colors = [" Red ", "Green ", "Blue ", "Yellow "]

document.write("<h2>Colors:</h2>");
document.write(colors);

var askColor = prompt("Which color you wanna add to the beginning?");
colors.unshift(askColor);

document.write("<h3>Updated Colors:</h3>");
document.write(colors);

