var quotesJson = {
	"items": [
		{
			"color": "#091279",
			"quote": "I may be drunk, Miss, but in the morning I will be sober and you will still be ugly.",
			"author": "Winston Churchill"
		},
		{
			"color": "#049742",
			"quote": "Do not take life too seriously. You will never get out of it alive.",
			"author": "Elbert Hubbard"
		},
		{
			"color": "#666",
			"quote": "To succeed in life, you need three things: a wishbone, a backbone and a funny bone.",
			"author": "Reba McEntire"
		},
		{
			"color": "#5c605e",
			"quote": "Behind every great man is a woman rolling her eyes.",
			"author": "Jim Carrey"
		},
		{
			"color": "#fa15a3",
			"quote": "No man has a good enough memory to be a successful liar.",
			"author": "Abraham Lincoln"
		},
		{
			"color": "#ccccc7",
			"quote": "Go to Heaven for the climate, Hell for the company.",
			"author": "Mark Twain"
		},
		{
			"color": "#93a911",
			"quote": "I'm sorry, if you were right, I'd agree with you.",
			"author": "Robin Williams"
		},
		{
			"color": "#dc8671",
			"quote": "I love fools' experiments. I am always making them.",
			"author": "Charles Darwin"
		},
		{
			"color": "#75e494",
			"quote": "I no doubt deserved my enemies, but I don't believe I deserved my friends.",
			"author": "Walt Whitman"
		},
		{
			"color": "#1278d3",
			"quote": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
			"author": "Albert Einstein"
		},
	]
};

function getQuote (data){
	var randomQuote = data[Math.floor(Math.random() * data.length)];
	return randomQuote;
}

function newQuote() {
	var returnQuote = getQuote(quotesJson.items);

	$('.quote-item-tite').html(returnQuote.quote);
	$('.quote-item-author').html(returnQuote.author);

	$(".app-body" ).animate({
		backgroundColor: returnQuote.color,
		color: returnQuote.color
	}, 1000);

	$("#new-quote-btn" ).animate({
		backgroundColor: returnQuote.color,
		color: '#fff'
	}, 1000);

	$('.twitter-share-button').attr('href','https://twitter.com/intent/tweet?hashtags=quote&amp;text='+returnQuote.quote+'%20'+returnQuote.author);
}

getQuote(quotesJson.items);

$(document).ready(function(){
	$('#new-quote-btn').on('click',function (){
		newQuote();
	});

	newQuote();
});