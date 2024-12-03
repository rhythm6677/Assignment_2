// Quote Box
const quotes = [
    "True wisdom comes not from knowledge, but from understanding.",
    "Happiness depends upon ourselves.",
    "Do what you can, with what you have, where you are.",
    "Success is not final; failure is not fatal."
];

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}



function changeQuoteStyle(color) {
    const quoteBox = document.getElementById("quote-box");
    quoteBox.textContent = getRandomQuote();

  
    quoteBox.style.backgroundColor = color;
    quoteBox.style.borderColor = color;


    if (color === "yellow") {
        quoteBox.style.color = "black"; 
    } else {
        quoteBox.style.color = "white"; 
    }
}





// Hero Converter
function convert() {
    const value = parseFloat(document.getElementById("value").value);
    const unit = document.getElementById("unit").value;
    let result = 0;

    if (unit === "kg-to-lb") {
        result = value * 2.2046;
    } else {
        result = value * 0.4536;
    }

    document.getElementById("result").textContent = `Result: ${result.toFixed(2)}`;
}

// Number Operations
function calculate() {
    const numbers = document.getElementById("numbers").value.split(",").map(Number);
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    const sum = numbers.reduce((a, b) => a + b, 0);
    const average = sum / numbers.length;
    const reverse = numbers.reverse().join(", ");

    document.getElementById("output").innerHTML = `
        Max: ${max} <br>
        Min: ${min} <br>
        Sum: ${sum} <br>
        Average: ${average.toFixed(2)} <br>
        Reverse Order: ${reverse}
    `;
}

// Magic Text Editor
function getTextAreaValue() {
    return document.getElementById("text-area").value.trim();
}

function setTextAreaValue(value) {
    document.getElementById("text-area").value = value;
}

function clearAll() {
    setTextAreaValue("");
}

let isUpperCase = false;
function toggleCase() {
    let lines = getTextAreaValue().split("\n");
    lines = lines.map(line => isUpperCase ? line.toLowerCase() : line.toUpperCase());
    setTextAreaValue(lines.join("\n"));
    isUpperCase = !isUpperCase;
}

function sortLines() {
    let lines = getTextAreaValue().split("\n");
    lines = lines.sort();
    setTextAreaValue(lines.join("\n"));
}

function reverseLines() {
    let lines = getTextAreaValue().split("\n");
    lines = lines.reverse();
    setTextAreaValue(lines.join("\n"));
}

function stripBlank() {
    let lines = getTextAreaValue().split("\n");
    lines = lines.map(line => line.trim()).filter(line => line !== "");
    setTextAreaValue(lines.join("\n"));
}

function addNumbers() {
    let lines = getTextAreaValue().split("\n");
    lines = lines.map((line, index) => `${index + 1}. ${line}`);
    setTextAreaValue(lines.join("\n"));
}

function shuffleLines() {
    let lines = getTextAreaValue().split("\n");
    for (let i = lines.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lines[i], lines[j]] = [lines[j], lines[i]];
    }
    setTextAreaValue(lines.join("\n"));
}
