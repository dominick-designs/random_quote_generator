/* project summary
   — random background color when button is clicked (or automatically if no button)
   — automatically displays random quote every 30 seconds
*/

/*** 
  an array of objects containing inspirational quotes
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
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    source: "Benjamin Franklin"
  },
  {
    quote: "Inspiration, move me brightly.",
    source: "Jerry Garcia",
    citation: "Terrapin Station",
    year: "July 27, 1977"
  }
];

console.log(quotes)

/***
  function to store a random number and output a random quote from the quotes variable above
***/

function getRandomQuote(array) {
  var storeRandomNumber;
  storeRandomNumber = Math.floor(Math.random() * array.length);
  return array[storeRandomNumber];
}

/***
a function that takes the random quote from the getRandomQuote function above and outputs to page
***/
const printQuote = () => {
  var getQuotes = getRandomQuote(quotes);
  var htmlGoesHere = '';
  var quote = getQuotes.quote;
  var source = getQuotes.source;
  var citation = getQuotes.citation;
  var year = getQuotes.year;
  var mycategory = getQuotes.mycategory;

  // build the html
  htmlGoesHere = `<p class="quote">${quote}</p>
  <p class="source">${source}`;

  if (citation) {
    htmlGoesHere = htmlGoesHere + `<span class="citation">${getQuotes.citation}</span>`;
  }
  if (year) {
    htmlGoesHere = htmlGoesHere + `<span class="year">${getQuotes.year}</span>`;
  }
  if (mycategory) {
    htmlGoesHere = htmlGoesHere + `<span class="year">Category: ${getQuotes.mycategory}</span>`;
  }

  htmlGoesHere = htmlGoesHere + `</p > </div >`;

  document.getElementById('quote-box').innerHTML = htmlGoesHere;
};

/* function to create random color */

const randomColor = () => {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + ", " + y + ", " + z + ")";
  document.body.style.background = bgColor;
};

const timedDisplay = () => {
  printQuote();
  var timed = setInterval(printQuote, 5000);
  var changeColor = setInterval(randomColor, 5000);
};

// random quote and random color every 5 seconds
window.addEventListener("load", timedDisplay, false);

/**
 * not using these because automatically displaying random quote every few seconds
 * when button with id of 'loadquote' is clicked call the printQuote function and display random quote from quotes array above
 */
// var whenButtonIsClicked = document.getElementById('loadQuote');
// whenButtonIsClicked.addEventListener("click", printQuote, false);  /* when button is clicked display random quote */
//whenButtonIsClicked.addEventListener("click", randomColor, false);  /* when button is clicked display random background color */


