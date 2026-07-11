const quotes = [
    "quote 1",
    "quote 2",
    "quote 3",
    "quote 4",
    "quote 5",
    "quote 6",
    "quote 7",
    "quote 8",
    "quote 9",
    "quote 10",
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
   if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear()
    }
    
    while (true) {
    const randomIdx = Math.floor(Math.random() * quotes.length)
    
    if (usedIndexes.has(randomIdx)) continue
    
    const quote = quotes[randomIdx]
    quoteElement.innerHTML = quote; 
        break
    }
}