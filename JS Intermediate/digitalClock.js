function digitalClock() {
	let date = new Date()
	let hour = date.getHours() + ""
	let min = date.getMinutes() + ""
	let sec = date.getSeconds() + ""
	let day = date.getDay() + ""
	if (hour.length < 2) {
		hour = '0' + hour
	}
	if (min.length < 2) {
		min = '0' + min
	}
	if (sec.length < 2) {
		sec = '0' + sec
	}
	let weekDay = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
	document.getElementById('clock').innerHTML = weekDay[day] + ' ' + hour + ':' + min + ':' + sec;
	
}

digitalClock()
setInterval(digitalClock, 1000);