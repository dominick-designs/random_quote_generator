/* project summary
   — random background color when button is clicked (or automatically if no button)
   — automatically displays random quote every 30 seconds
*/

/*** 
  an array of objects containing inspirational quotes; each object contains at least 'quote' and 'source' property
***/

let quotes = [
  {
    quote: "For man, mind is the cause of bondage and mind is the cause of liberation. Mind absorbed in sense objects is the cause of bondage, and mind detached from the sense objects is the cause of liberation.",
    source: "A.C.Bhaktivedanta Swami Prabhupāda",
    citation: "Bhagavad - Gita As It Is",
    year: "1972",
    category: "inspirational"
  },
  {
    quote: "Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.",
    source: "Johann Wolfgang Von Goethe",
    category: "entrepreneur"
  },
  {
    quote: "And now here is my secret, a very simple secret: It is only with the heart that one can see rightly; what is essential is invisible to the eye.",
    source: "Antoine de Saint-Exupéry",
    citation: "The Little Prince",
    year: "1943",
    category: "children"
  },
  {
    quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    source: "Helen Keller",
    category: "inspirational"
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
]

console.log(quotes[0]);
/***
  function to store a random number and output a random quote from the quotes variable above
***/

function getRandomQuote(array) {
  let storeRandomNumber;
  storeRandomNumber = Math.floor(Math.random() * array.length);
  return array[storeRandomNumber];
}

/***
a function that takes the random quote from the getRandomQuote function above and outputs to page
***/
function printQuote() {
  const getQuotes = getRandomQuote(quotes);
  const quote = getQuotes.quote;
  const source = getQuotes.source;
  const citation = getQuotes.citation;
  const year = getQuotes.year;
  const category = getQuotes.category;
  let htmlGoesHere = '';

  // build the html
  htmlGoesHere = `<p class="quote">${quote}</p> 
                  <p class="source">${source}`;


  if (citation) {  /* if there is citation and NOT year */
    htmlGoesHere = htmlGoesHere + `<span class="citation">${citation}</span>`;
  }
  if (year) { /* if there is year and NOT citation */
    htmlGoesHere = htmlGoesHere + `<span class="year">${year}</span>`;
  }
  if (category) {
    htmlGoesHere = htmlGoesHere + `<span class="citation">${category}</span>`;
  }

  htmlGoesHere = htmlGoesHere + `</p></div>`;

  document.getElementById('quote-box').innerHTML = htmlGoesHere;
}

/* function to create random color */

// function randomColor() {
//   var x = Math.floor(Math.random() * 256);
//   var y = Math.floor(Math.random() * 256);
//   var z = Math.floor(Math.random() * 256);
//   var bgColor = "rgb(" + x + ", " + y + ", " + z + ")";
//   document.body.style.background = bgColor;
// }

// function timedDisplay() {
//   printQuote();
//   var timed = setInterval(printQuote, 5000);
//   var changeColor = setInterval(randomColor, 5000);
// }

// random quote and random color every 5 seconds
// window.addEventListener("load", timedDisplay, false);

/**
 * not using these because automatically displaying random quote every few seconds
 * when button with id of 'loadquote' is clicked call the printQuote function and display random quote from quotes array above
 */
const whenButtonIsClicked = document.getElementById('loadQuote');
whenButtonIsClicked.addEventListener("click", printQuote, false);  /* when button is clicked display random quote */
// whenButtonIsClicked.addEventListener("click", randomColor, false);  /* when button is clicked display random background color */


