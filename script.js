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
        quoteBox.style.borderColor = "red";}
        
    if (color === "green") {
        quoteBox.style.color = "white"; 
        quoteBox.style.borderColor = "yellow";}

    if (color === "red") {
        quoteBox.style.color = "white"; 
        quoteBox.style.borderColor = "black";}

    if (color === "blue") {
        quoteBox.style.color = "white"; 
        quoteBox.style.borderColor = "red";}
    if (color === "purple") {
        quoteBox.style.color = "white"; 
        quoteBox.style.borderColor = "green";}


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
// Function to process numbers after a comma
function processNumbers() {
    const input = document.getElementById("numberInput").value;

    // Split the input by commas
    const rawNumbers = input.split(",");

    // Filter valid numbers: only pure numeric values (no alphabets or symbols)
    const validNumbers = rawNumbers
        .slice(0, -1) // Exclude the last incomplete entry (if not followed by a comma)
        .map((num) => num.trim()) // Trim whitespace
        .filter((num) => /^[0-9]+$/.test(num)) // Check for strictly numeric values
        .map(Number); // Convert to numbers

    // Perform operations if there are valid numbers
    if (validNumbers.length > 0) {
        const max = Math.max(...validNumbers);
        const min = Math.min(...validNumbers);
        const sum = validNumbers.reduce((acc, num) => acc + num, 0);
        const avg = sum / validNumbers.length;
        const reversed = [...validNumbers].reverse().join(", ");

        // Update the results in the HTML
        document.getElementById("max").textContent = `Max: ${max}`;
        document.getElementById("min").textContent = `Min: ${min}`;
        document.getElementById("sum").textContent = `Sum: ${sum}`;
        document.getElementById("average").textContent = `Average: ${avg}`;
        document.getElementById("reverse").textContent = `Reverse Order: ${reversed}`;
    } else {
        // Clear the results if no valid numbers are found
        document.getElementById("max").textContent = "Max: N/A";
        document.getElementById("min").textContent = "Min: N/A";
        document.getElementById("sum").textContent = "Sum: N/A";
        document.getElementById("average").textContent = "Average: N/A";
        document.getElementById("reverse").textContent = "Reverse Order: N/A";
    }
}

// Add event listener to the input field
window.onload = function () {
    document.getElementById("numberInput").addEventListener("input", processNumbers);
};




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
