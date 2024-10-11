const quote = document.getElementById("quote")
const author = document.getElementById("author")

const quote_Url = "https://api.freeapi.app/api/v1/public/quotes/quote/random"
async function generateQuote(url) {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);

    if (data.data.content && data.data.author) {
        quote.innerHTML = data.data.content;
        author.innerHTML = data.data.author;
    } else {
        quote.innerHTML  = "Quote Not Found!"
        author.innerHTML = "Undefined" 
    }
    
}
generateQuote(quote_Url);





