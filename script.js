// Array of Quotes
const quotes = [
    "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear. - Nelson Mandela",
    "If you believe it will work, you'll see opportunities. If you believe it won't, you will see obstacles - Wayne Dyer",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Learn the rules like a pro, so you can break them like an artist. - Pablo Picasso",
    "Do one thing every day that scares you. - Eleanor Roosevelt",
    "I didn't get there by wishing for it or hoping for it, but by working for it. - Estée Lauder",
    "If you can dream it, you can do it. - Walt Disney",
    "Even if you are on the right track, you'll get run over if you just sit there. - Will Rogers",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
]

// Function to generate random quote
function generateRandomQuote () {
    // Generate a random index within the range of the 'quotes' array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    // Get the random quote from the 'quotes' array using the random index
    const randomQuote = quotes[randomIndex];
    // Get a reference to the HTML element with the 'quote' id
    const quoteElement = document.getElementById("quote");
    // Set the text content of the 'quote' element to the random quote
    quoteElement.textContent = randomQuote;
}

// Event listener for the "General Quote" button.
const generateButton = document.getElementById("quote__bttn");
generateButton.addEventListener("click", generateRandomQuote);

// Initial quote on page load
generateRandomQuote();
