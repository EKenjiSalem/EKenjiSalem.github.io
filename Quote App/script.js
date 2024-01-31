let text = document.getElementById("text");
let author = document.getElementById("author");

const quotes = [
    { text: "When something is important enough, you do it even if the odds are not in your favor.", author: "Elon Musk"},
    { text: "When you undervalue what you do, the world will undervalue who you are.", author: "Oprah Winfrey" },
    { text: "You will face many defeats in life, but never let yourself be defeated", author: "Maya Angelou"},
    { text: "If you are not willing to risk the usual, you will have to settle for the ordinary.", author: "Jim Rohn" },
    { text: "A fool thinks himself to be wise, but a wise man knows himself to be a fool.", author: "William Shakespeare"}
];

createRandomQuotes = () => {
    const randomMath = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomMath];
    text.textContent = randomQuote.text;
    author.textContent = "- " + randomQuote.author;
}

document.getElementById("main-btn").addEventListener("click", createRandomQuotes);

createRandomQuotes();