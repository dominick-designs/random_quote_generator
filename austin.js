/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
var quotes = [{
        quote: "A man chooses, a slave obeys",
        source: "Andrew Ryan",
        citation: "Bioshock",
        year: "2007"
    },
    {
        quote: "Do or do not, there is no try",
        source: "Star Wars"
    },
    {
        quote: "Is it better to be born good? Or to overcome ones evil nature through great effort?",
        source: "The Elder Scrolls V: Skyrim",
    },
    {
        quote: "Wanting something does not give you the right to have it.",
        source: "Assassin's Creed 2"
    },
    {
        quote: "Even in dark times, we cannot relinquish the things that make us human.",
        source: "Metro 2033"
    },
]
console.log(quotes);




/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote(array) {
    var storeRandNum;
    storeRandNum = Math.floor(Math.random() * array.length);
    return array[storeRandNum]
}
console.log(getRandomQuote(quotes));



/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
setInterval(function printQuote() {
    var randomQuote = getRandomQuote(quotes);
    var string = "";
    if (randomQuote.citation) {
        string.add = `<span class=citation>${randomQuote.citation}</span>`;
    }
    string = `<p class=quote>${randomQuote.quote}</p> <p class=source>${randomQuote.source}</p>`;
    document.getElementById("quote-box").innerHTML = string;
    document.body.style.backgroundColor = getRandomColor();
}, 4000);


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

// document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
function getRandomColor() {
    var hex = Math.floor(Math.random() * 0xFFFFFF);
    return "#" + ("000000" + hex.toString(16)).substr(-6);
}