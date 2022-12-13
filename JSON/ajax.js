// AJAX
/*
	Asynchronous JavaScript And XML
	- receive data from webserver and update web page without reloading
	- sending and receiving data from the frontend to backend without loading new pages
	- XML is close to JSON, but JSON is used more often than XML
	- JSON has no tags, shorter, quicker, and can use arrays
*/

let xmlHTTP = new XMLHttpRequest();

xmlHTTP.open("GET", "user.json", true);

xmlHTTP.onload = function() {
	if (this.status === 200) {
		let myData = JSON.parse(this.responseText);
	}
}

xmlHTTP.send()