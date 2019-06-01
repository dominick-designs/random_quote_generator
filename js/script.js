

/* I am expecting nearly exceptional because:
   — random background color when button is clicked
   — automatically displays random quote every 30 seconds
   — I can live with "meets expectations"
   — I think there is a better way of doing printQuote rather than a lot of if / else statements; a "for" loop or ".map" etc...
   — I could not get the myCategory to display properly; I think there is a way to do this using a for loop;
*/

/*** 
  an array of objects containing quotes 
***/

let quotes = [
  {
    quote: "For man, mind is the cause of bondage and mind is the cause of liberation. Mind absorbed in sense objects is the cause of bondage, and mind detached from the sense objects is the cause of liberation.",
    source: "A.C.Bhaktivedanta Swami Prabhupāda",
    citation: "Bhagavad - Gita As It Is",
    year: "1972",
    mycategory: "inspirational"  
  },
  {
    quote: "Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.",
    source: "Johann Wolfgang Von Goethe",
    mycategory: "entrepreneur"
  },
  {
    quote: "And now here is my secret, a very simple secret: It is only with the heart that one can see rightly; what is essential is invisible to the eye.",
    source: "Antoine de Saint-Exupéry",
    citation: "The Little Prince",
    year: "1943",
    mycategory: "children"
  },
  {
    quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    source: "Helen Keller",
    mycategory: "inspirational"
  },
  {
    quote: "Tell me and I forget.Teach me and I remember.Involve me and I learn.",
    source: "Benjamin Franklin"
  },
  {
    quote: "Inspiration, move me brightly.",
    source: "Jerry Garcia",
    citation: "Terrapin Station",
    year: "July 27, 1977"
  },
]

/***
  function to store a random number and output a random quote from the quotes variable above
***/

function getRandomQuote(array) {
  var storeRandomNumber; 
  storeRandomNumber = Math.floor(Math.random() * array.length);
  return array[storeRandomNumber]
}

/***
a function that takes the random quote from the getRandomQuote function above and outputs to page
***/
function printQuote(getQuotes) {
  var getQuotes = getRandomQuote(quotes);
  var htmlGoesHere = '';
  var citation = getQuotes.citation;
  var year = getQuotes.year;
  var mycategory = getQuotes.mycategory;

  // build the html
  htmlGoesHere = `<div id="quote-box">  
      <p class="quote">${getQuotes.quote}</p>
  <p class="source">${getQuotes.source}`;


 if (citation && !year) {  /* if there is citation and NOT year */
    htmlGoesHere = htmlGoesHere + `<span class="citation">${getQuotes.citation}</span></p>
    </div>`
  } else if (year && !citation) { /* if there is year and NOT citation */
    htmlGoesHere = htmlGoesHere + `<span class="year">${getQuotes.year}</span></p>
    </div>`
  } else if (citation && year) { /* if there are BOTH citation AND year */
    htmlGoesHere = htmlGoesHere + `<span class="citation">${getQuotes.citation}</span><span class="year">${getQuotes.year}</span></p>
    </div>`
  } else {
   htmlGoesHere = htmlGoesHere + `</p> </div>`
 }

  document.getElementById('quote-box').innerHTML = htmlGoesHere;
}

/* function to create random color */

function randomColor() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb("+ x +", "+ y +", "+ z +")";
  document.body.style.background = bgColor;
}

function timedDisplay() {
  var timed = setInterval(printQuote, 20000);
  var changeColor = setInterval(randomColor, 20000);
}

/***
  when button with id of 'loadquote' is clicked call the printQuote function and display random quote from quotes array above
***/
var whenButtonIsClicked = document.getElementById('loadQuote');
window.addEventListener("load", timedDisplay, false);

/* not using these because automatically displaying random quote every 20 seconds
// whenButtonIsClicked.addEventListener("click", printQuote, false);  /* when button is clicked display random quote */
//whenButtonIsClicked.addEventListener("click", randomColor, false);  /* when button is clicked display random background color */


