// no API key required for this API
const API_URL = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?'

var quoteText = document.querySelector('.quote-text');
var quoteAuthor = document.querySelector('.quote-author');
var btn = document.querySelector('.btn');

// Extras Test
var extra = document.querySelector('#extras');

function getQuote() {
    $.ajax({
        type: "GET",
        url: API_URL,
        dataType: 'json',
        success: function (data) {
            console.log(data);
            randomValue(quoteText.textContent = data.quoteText);
            quoteAuthor.textContent = data.quoteAuthor;

            extra.href = `${data.quoteLink}`;


        },
        error: function (error) {
            console.log("There was an error")
        }
    })
}

btn.addEventListener('click', btnClick, false);


function btnClick(e) {
    console.log(e);
    getQuote();
    e.preventDefault();
}


function randomValue() {
    return Math.floor(Math.random());
}


getQuote()