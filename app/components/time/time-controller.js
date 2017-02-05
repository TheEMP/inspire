var tnService = new NameTimeService()
new Vue({
	el: '#name',
	data: {
		name: "",
		dayType: "Morning",
		time: {},
		active: false,
		military: false
	},
	mounted: function () {
		this.updateDate()
		this.name = tnService.getName()
		window.setInterval(this.updateDate, 10000)
	},
	methods: {
		saveName: function () {
			//console.log(quote)
			tnService.setName(this.name)
			$('#modal1').modal('close');
			
		},
		mouseOver: function () {
			this.active = !this.active
		},
		updateDate() {
			console.log("updating date!	")
			var now = new Date()
			var hours = now.getHours()
			var minutes = now.getMinutes()
			
			if (minutes < 10) {
				minutes = "0"+minutes
			}
			if (hours > 12) {
				this.dayType = "Afternoon"
			}
			if (hours > 18) {
				this.dayType = "Evening"
			}
			if (!this.military && hours > 12) {
				hours -= 12
			}
			this.time = hours + ":" + minutes
			
		},
		toggleMilitary() {
			this.military = !this.military
			this.updateDate()
		}
	}
})

$(document).ready(function () {
	// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	$('.modal').modal();
});