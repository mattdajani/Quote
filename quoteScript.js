function randomGenerator() {
    var MAX = 16, MIN = 1;
    return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
}

function tweetIt() {
  var phrase = document.getElementById('twitterMessage').innerText;
  var tweetUrl = 'https://twitter.com/intent/tweet?text=' +
    encodeURIComponent(phrase);
  window.open(tweetUrl, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

var quotes = {
                '1': "For success, attitude is equally as important as ability.<footer>Walter Scott</footer>",
                '2': "When I die, I want to go peacefully like my grandfather did–in his sleep. Not yelling and screaming like the passengers in his car.<footer>Bob Monkhouse</footer>",
                '3': "To avoid criticism, say nothing, do nothing, be nothing.<footer>Fred Shero</footer>",
                '4': "If opportunity doesn’t knock, build a door.<footer>Milton Berle</footer>",
                '5': "Everything in moderation, including moderation.<footer>Oscar Wilde</footer>",
                '6': "Worry is like a rocking chair, it will give you something to do, but it won’t get you anywhere.<footer>Vance Havner</footer>",
                '7': "My country is the world, and my religion is to do good.<footer>Thomas Paine</footer>",
                '8': "Wise men speak because they have something to say; fools because they have to say something.<footer>Plato</footer>",
                '9': "As a well-spent day brings happy sleep, so a life well spent brings happy death.<footer>Leonardo Da Vinci</footer>",
                '10': "I knew a man who gave up smoking, drinking, sex, and rich food. He was healthy right up to the day he killed himself.<footer>Johnny Carson</footer>",
                '11': "The man who reads nothing at all is better educated than the man who reads nothing but newspapers.<footer>Thomas Jefferson</footer>",
                '12': "I speak to everyone in the same way, whether he is the garbage man or the president of the university.<footer>Albert Einstein</footer>",
                '13': "If I have seen further it is by standing on the shoulders of Giants.<footer>Isaac Newton</footer>",
                '14': "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.<footer>Stephen Hawking</footer>",
                '15': "All that was great in the past was ridiculed, condemned, combated, suppressed — only to emerge all the more powerfully, all the more triumphantly from the struggle.<footer>Nikola Tesla</footer>",
                '16': "American corporations are some of the largest socialist bureaucracies in the world. They have central planning, central ownership of capital, central allocation of resources, " +
                 "subjective evaluation of people, lack of internal competition, and decisions made at the top in response to political pressures.<footer>Jay Wright Forrester (MIT)</footer>"
            };
            
                    $(document).ready(function() {
            $("#getQuote").ready(function(){
                $(".message").html(quotes[randomGenerator()]);
            });
            $("#getQuote").on("click", function() {
                $(".message").html(quotes[randomGenerator()]);
            });
        });