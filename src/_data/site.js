module.exports = {
	title: "Michas Blog",
	description: "Blog von Michael Stumpp",
	caption: "michas blog",
	version : "0.3.20",
	mail: "michael@stumpp.name",
	language: "de",

	scriptdir: "/static",
	imagedir: "/static/img",
	pagelogo: "/static/pagelogo.svg",
	
	send: {
		receiver: "507rydbp@anonaddy.com", 
		subject: "Anfrage zum MS Blog", 
		body: "Bodytext direkt in main.js eintragen!"
	},
	author: {
		name: "Michael Stumpp",
		year: 2025,
		hide: false,
		mail: "michael@stumpp.name",
		code: "&#x6d;&#x69;&#x63;&#x68;&#x61;&#x65;&#x6c;&#x40;&#x73;&#x74;&#x75;&#x6d;&#x70;&#x70;&#x2e;&#x6e;&#x61;&#x6d;&#x65;"
	}, 
	url: {
		impressum: "/about.html"
	}, 
	env: process.env.ELEVENTY_ENV === 'production'
}
