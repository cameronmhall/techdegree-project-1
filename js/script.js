/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// array of objects with properties quote, source, citation and year
const quotes = [
  {
    quote: "The best way to get started is to quit talking and begin doing.", 
    source: "Walt Disney", 
    tags: "Motivational"
  },
  {
    quote: "You're tearing me apart, Lisa!", 
    source: "Johnny (Tommy Wiseau)", 
    citation: "The Room",
    year: "2003"
  },
  {
    quote: "I want to put a ding in the universe.",
    source: "Steve Jobs"
  },
  {
    quote: "Creativity is intelligence having fun.", 
    source: "Albert Einstein"
  },
  {
    quote: "When something is important enough, you do it even if the odds are not in your favor.", 
    source: "Elon Musk"
  }
];

/***
 * `getRandomQuote` function
 * @return: a randomly selected object from the quotes array
***/
function getRandomQuote() {
  //finds a random number between 0 and 4 inclusive
  let randomNumber = Math.floor(Math.random() * 5);
  //returns quotes object at index of randomNumber
  return quotes[randomNumber];
}

/***
 * `printQuote` function
***/
function printQuote() {
  //calls function getRandomQuote and assigns it to a variable
  let randomObject = getRandomQuote();
  //initialises html string
  let html = "<p class='quote'>" + randomObject.quote + 
  "</p><p class='source'>" + randomObject.source;
  //if the object has a citation property concatenate to html string
  if (randomObject.hasOwnProperty("citation")) {
    html += "<span class='citation'>" + randomObject.citation + "</span>";
  };
  //if the object has a year property concatenate to html string
  if (randomObject.hasOwnProperty("year")) {
    html += "<span class='year'>" + randomObject.year + "</span>";
  };
  //if the object has a tags property concatenate to html string
  if (randomObject.hasOwnProperty("tags")) {
    html += "<span class='tags'>" + randomObject.tags + "</span>";
  };
  html += "</p>"
  //display html string in browser
  document.getElementById('quote-box').innerHTML = html; 
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);