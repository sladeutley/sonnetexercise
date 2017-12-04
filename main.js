// Paste the code below into your HTML file.
// Take the contents of the sonnet div and place it in a variable.
// Find and output the starting position of the word "orphans".
// Output the number of characters in the sonnet.
// Replace the first occurance of the string "winter" with "yuletide".
// Replace all occurances of the string "the" with "a large".
// Set the content of the sonnet div with the new string.

let sonnetContent = document.getElementById("sonnet").innerHTML;

console.log(`The starting position of "orphans" is ${sonnetContent.indexOf("orphans")}`)

console.log(`The number of characters in the sonnet are ${sonnetContent.length}`)

function replaceContent(sonnet) {
    sonnet = sonnetContent.replace ("winter", "yuletide");
    sonnet = sonnetContent.replace (/the/gi, " a large ")
    document.getElementById("sonnet").innerHTML = sonnet;
};

replaceContent(sonnet);