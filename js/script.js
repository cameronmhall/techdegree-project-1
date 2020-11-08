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

const quotes = [
  {
    quote: "The best way to get started is to quit talking and begin doing.", 
    source: "Walt Disney", 
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
***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * 5);
  return quotes[randomNumber];
}

/***
 * `printQuote` function
***/

function printQuote() {
  let randomObject = getRandomQuote();
  let html = "<p class='quote'>" + randomObject.quote + 
  "</p><p class='source'>" + "randomObject.source";
  if (randomObject.hasOwnProperty("citation")) {
    html += "<span class='citation'> ${randomObject.citation} </span>";
  };
  if (randomObject.hasOwnProperty("year")) {
    html += "<span class='year'> ${randomObject.year} </span>";
  };
  html += "</p>"
  document.getElementById('quote-box').innerHTML = html; 
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);