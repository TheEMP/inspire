(function () {

	var wc = this;
	var weatherService = new WeatherService();


	new Vue({
		el: '#weather',
		data: {
			weather: {icon: "", temp: ""},
			//dayType: "Morning",
			tempType: "F"
		},
		mounted: function () {
			weatherService.getWeather(w => {
				console.log(w.main)
				this.setWeather(w)
			})
			/*var curDate = new Date()

			if (curDate.getHours() >= 12) {
				this.dayType = "Afternoon"
			}*/
		},
		methods: {
			setWeather: function (weather) {
				console.log(weather.main)
				//console.log(weather);
				var icon = `http://openweathermap.org/img/w/${ weather.weather[0].icon}.png`
				this.weather = {icon: icon, temp: Math.round(weather.main.temp), name: weather.name}
			},
			toggleTemp: function () {
				if (this.tempType == "F") {
					this.tempType = "C"
					var temp = Math.round((this.weather.temp - 32) * 5 / 9)
					this.weather.temp = temp
				}
				else {
					this.tempType = "F"
					var temp = Math.round(this.weather.temp * 9 / 5 + 32)
					this.weather.temp = temp
				}
			}
			
		}
	})


}())
