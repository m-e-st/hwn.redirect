/** v2.0 - 2025-02-27 **/

const htmlMinifier = require ('html-minifier-terser');
const lucideIcons = require("@grimlink/eleventy-plugin-lucide-icons");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(lucideIcons);
  	eleventyConfig.addShortcode("anchor", function setAnchor(anchorName) { return `<a name="${anchorName}"><br><br><hr></a>`; });
  	eleventyConfig.addFilter("Datum", function(value) { 
		const string = value.toISOString();
		return string.slice(8,10) +'.' + string.slice(5,7) + '.' + string.slice(0,4);
	});
  	eleventyConfig.addFilter("dateTitle", function(value) { 
		const token = value.split('_')[1];
		if (! token) return "ERROR 1";
		const parts = token.split('-');
		return parts[2] + '-' + parts[1] + '-' + parts[0];
	});
  	eleventyConfig.addFilter("Ascii", function(value) { 
		const originalChars = "äöüÄÖÜßÑñáéíóú";
		const replacementChars = "aouAOUSNnaeiou";
		let result = value;
		for (let i = 0; i < originalChars.length;i++)
			result = result.replaceAll(originalChars[i], replacementChars[i]);
		return result;
	});
  	eleventyConfig.addFilter("Upperwords", function(value) { 
		return value.replace(/\b\w/g, char => char.toUpperCase());
		//~ return str.replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
	});
	
	eleventyConfig.addTransform ('htmlMinifier', function(content,outputPath) {
		if (	(process.env.ELEVENTY_ENV === 'production')
			&&	(outputPath)
			&&	( (outputPath.indexOf('.html') > -1) ||  (outputPath.indexOf('.css') > -1) )
		   ) {
			return htmlMinifier.minify (content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
				minifyJS: true,
				minifyCSS: true,
			});
		}
		return content;
	});
	
  	
	// Folders to copy to build dir (See. 1.1)
	eleventyConfig.addPassthroughCopy("src/static/**");
	eleventyConfig.addPassthroughCopy("src/favicon.ico");
	eleventyConfig.addPassthroughCopy("src/**/*.php");
	
	// This allows Eleventy to watch for file changes during local development.
	//~ eleventyConfig.addWatchTarget("src/**/*.php");
	eleventyConfig.addWatchTarget("src/_library/");
	eleventyConfig.setUseGitIgnore(false);

	return {
		dir: {
			input: "src/",
			output: "public/",      
			includes: "_includes",
			layouts: "_layouts"
		},
		templateFormats: ["html", "md", "njk"],
		htmlTemplateEngine: "njk",
		passthroughFileCopy: true	// 1.1 Enable eleventy to pass dirs specified above
	};
};

