(function () {

	//Your ImageService is a global constructor function what can you do here if you new it up?
	var imageSer = new ImageService()
	var vm = this;
	new Vue({
		el: '#image',
		data: {
			imgUrl: ""
		},
		mounted() {

			console.log(this.imgUrl)

			imageSer.getImage(img => {
				// debugger 
				this.imgUrl = img.large_url || img.url
				console.log(this.imgUrl)
			})
		},
		computed: {
			getImg: function () {
				if (this.imgUrl) {
					return this.imgUrl
				}
				return
			}
		},
		methods: {
			setImage: function (imageUrl) {
				console.log(imageUrl)
				//$('#body').css('background-image', 'url(' + imageUrl + ')');
			},
		}
	})
}())
