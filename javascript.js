document.addEventListener("DOMContentLoaded", function(event) {
    
    particlesJS.load('particles-js', 'particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
    
    var quotes = ["\"The best preparation for tomorrow is doing your best today.\" - H.Jackson Brown Jr.", "\"Be yourself; everyone else is already taken.\" - Oscar Wilde", "\"You\'ve gotta dance like there\'s nobody watching, Love like you\'ll never be hurt, Sing like there\'s nobody listening, And live like it\'s heaven on earth.\" ― William W. Purkey", "\"Be the change that you wish to see in the world.\" ― Mahatma Gandhi", "\"No one can make you feel inferior without your consent.\" ― Eleanor Roosevelt", "\"Live as if you were to die tomorrow. Learn as if you were to live forever.\" ― Mahatma Gandhi", "\"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.\" ― Martin Luther King Jr.", "\"Imperfection is beauty, madness is genius and it\'s better to be absolutely ridiculous than absolutely boring.\" ― Marilyn Monroe", "\"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.\" ― Albert Einstein", "\"We are all in the gutter, but some of us are looking at the stars.\" ― Oscar Wilde", "\"Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.\" ― Bil Keane", "\"I have not failed. I\'ve just found 10,000 ways that won't work.\" ― Thomas A. Edison"];  
    
    document.getElementById("quoteGen").onclick = function(randomQuote) {
        
        var randomIndex = Math.floor(Math.random() * (quotes.length));
        
        document.getElementById("demo").innerHTML = quotes[randomIndex];
        
        document.getElementById("tweet").href = "https://twitter.com/intent/tweet?text=" + quotes[randomIndex];
    };
});