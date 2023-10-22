document.write("<h3>Q Task 1: Filter Even Numbers</h3>");
var num = [1,2,3,4,5,6,7,8,9,10];
var numNew = [];
for(var i=0 ;i < num.length;i++){
   if(num[i]%2 === 0 ){
    numNew.push(num[i])
   }
}
document.write("Old Array is "+num+"</br>" );
document.write("</br>");
document.write("Filter Even Numbers are "+numNew+"</br>");

document.write("</br></br>");

document.write("<h3>Q Task 2: Sum of Odd Numbers</h3>");
var oddSum = 0;
for(var i = 0 ;i < num.length;i++){
 if(num[i]%2 !== 0){
    oddSum += num[i];
 }
}
document.write("Sum of odd Numbers is "+oddSum);

document.write("</br></br>");

document.write("<h3>Q Task 3: FizzBuzz</h3>");

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


document.write("Answer in console !");

document.write("</br></br>");

document.write("<h3>Q Task 4: Count Characters</h3>");

var numChar = 0;
var words = ["js","practice","sheet","two"]
for (var i=0;i < words.length; i++){
    numChar += words[i].length;
}
document.write("Total number of characters: "+numChar );
document.write("</br></br>");

document.write("<h3>Q Task 5: Find Maximum Length Word</h3>");

var games = ["Cricket","Football","Soccer","Badminton","Tennis",];
var maxWord = 0;
var longWord = "";
for(var i = 0 ;i < games.length;i++){
    if(games[i].length >maxWord){
        maxWord = games[i].length
        longWord = games[i]
    }
}


document.write(longWord);
document.write("</br></br>");

document.write("<h3>Q Task 6: Remove Short Words</h3>");
var Word = [];
for(var i = 0;i < words.length;i++){
    if(words[i].length >= 3){
      Word.push(words[i]);
    }
}

document.write("Array after removing less than three words: "+Word);

document.write("</br></br>");

document.write("<h3>Q Task:7 Multiplication table</h3>");
var number = parseInt(prompt("Enter a number 1 to 10 for table"));

if (!isNaN(number)) {
   document.write("Multiplication table for " +number+" :</br> ");

    for (var i = 1; i <= 10; i++) {
        var result = number * i;
        document.write(number +" X "+ i +" = "+ result+"</br>");
    }
} else {
    document.write("Invalid input. Please enter a number.");
}
document.write("</br></br>");

document.write("<h3>Q Task 8: Array Sorting</h3>");
var sorting = [5, 6, 1, 9, 7, 4, 8, 2, 3, 10];

for (var i = 0; i < sorting.length; i++) {
    for (var j = i + 1; j < sorting.length; j++) {
        if (sorting[i] > sorting[j]) {
            var temp = sorting[i];
            sorting[i] = sorting[j];
            sorting[j] = temp;
        }
    }
}

document.write(sorting);

document.write("</br></br>");

document.write("<h3>Q Task 9: Search and Replace</h3>");

var stringArray = ["apple", "banana","mango", "cherry", "date"];
var searchTerm = prompt("task:9  Enter the word to search for:");
var replacementWord = prompt(" task:9  Enter the word to replace it with:");
document.write("original array : "+stringArray +"</br>")
for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === searchTerm) {
        stringArray[i] = replacementWord;
    }
}

document.write("</br>"+"Updated array : "+ stringArray);

document.write("</br></br>");

document.write("<h3>Q Task 10:  Unique Values</h3>");


var numbers = [3, 6, 8, 2, 3, 6, 8, 5, 4, 1, 2, 9, 4, 5];
var unique = [];

for (var i = 0; i < numbers.length; i++) {
    var currentValue = numbers[i];
    var isUnique = true;

    for (var j = 0; j < numbers.length; j++) {
        if (i !== j && currentValue === numbers[j]) {
            isUnique = false;
            break;
        }
    }

    if (isUnique) {
        unique.push(currentValue);
    }
}





document.write("Unique vales are "+unique);












