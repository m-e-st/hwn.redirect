module.exports = {
	title: "sprachcafé oranienburg",
	description: "Sprachcafé Stadtbibliothek Oranienburg",
	caption: "Sprachcafé",
	version : "0.1.0",
	mail: "michael@stumpp.name",

	scriptdir: "/static",
	imagedir: "/static/img",
	pagelogo: "/static/pagelogo.png",

	author: {
		name: "Michael Stumpp",
		year: 2024,
		hide: false,
		mail: "michael@stumpp.name",
		code: "&#x6d;&#x69;&#x63;&#x68;&#x61;&#x65;&#x6c;&#x40;&#x73;&#x74;&#x75;&#x6d;&#x70;&#x70;&#x2e;&#x6e;&#x61;&#x6d;&#x65;"
	}, 

	env: process.env.ELEVENTY_ENV === 'production'
}
