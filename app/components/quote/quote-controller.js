(function () {

	//Get your QuoteService
	var quoteServ = new QuoteService()
	new Vue({
		el: '#quote',
		data: {
			quote: "",
			quoteAuthor: ""
		},
		mounted: function () {
			quoteServ.getQuote(quote => {
				this.setQuote(quote)
			})
		},
		methods: {
			setQuote: function (quote) {
				//console.log(quote)
				this.quote = quote.quote
				this.quoteAuthor = quote.author
				$('#quote-author').tooltip({ delay: 50, tooltip: quote.author});
			}
		}
	})
}())