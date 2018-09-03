// DOM Selection of button 'Open Tabs'
var button = document.querySelector('#btSubmit')
// DOM Selection of Text Area of the input URLs
var taURLs = document.querySelector('#taURLs')
// DOM Selection of the Layer DropDown
var layerSelect = document.querySelector('#layerSelect')
// DOM Selection of the 'Multiple Selection of countries'
var btCountries = document.querySelector('#btCountries')


// data contains the mapping of country and language
var data = [

	[{"cn": "al"}, {"ln": "en"}],

	[{"cn": "dz"}, {"ln": "ar"}],
	
	[{"cn": "ai"}, {"ln": "en"}],
	
	[{"cn": "ag"}, {"ln": "en"}],
	
	[{"cn": "ar"}, {"ln": "es"}],
	
	[{"cn": "aw"}, {"ln": "en"}],
	
	[{"cn": "au"}, {"ln": "en"}],
	
	[{"cn": "at"}, {"ln": "de"}],
	
	
	
	
	[{"cn": "bs"}, {"ln": "en"}],

	[{"cn": "bb"}, {"ln": "en"}],
	
	[{"cn": "be"}, {"ln": "nl"}], 
	
	[{"cn": "be"}, {"ln": "fr"}], 
	
	[{"cn": "bz"}, {"ln": "en"}],
	
	[{"cn": "bm"}, {"ln": "en"}],
	
	[{"cn": "bo"}, {"ln": "es"}],
	
	[{"cn": "br"}, {"ln": "pt"}],
	
	[{"cn": "bg"}, {"ln": "en"}],
	
	
	[{"cn": "ca"}, {"ln": "en"}],
	
	[{"cn": "ca"}, {"ln": "fr"}],
	
	[{"cn": "ky"}, {"ln": "en"}],
	
	[{"cn": "cl"}, {"ln": "es"}],
	
	[{"cn": "cn"}, {"ln": "zh"}],
	
	[{"cn": "co"}, {"ln": "es"}],
	
	[{"cn": "cr"}, {"ln": "es"}],
	
	[{"cn": "hr"}, {"ln": "en"}],
	
	[{"cn": "rs"}, {"ln": "en"}],
	
	[{"cn": "rs"}, {"ln": "ru"}],

	[{"cn": "cz"}, {"ln": "cs"}],
	
	[{"cn": "dk"}, {"ln": "da"}],
	
	[{"cn": "dm"}, {"ln": "en"}],
	
	[{"cn": "do"}, {"ln": "es"}],
	
	[{"cn": "cd"}, {"ln": "fr"}],
	
	[{"cn": "ed"}, {"ln": "en"}],
	
	[{"cn": "ed"}, {"ln": "fr"}],
	
	[{"cn": "ec"}, {"ln": "es"}],

	[{"cn": "sv"}, {"ln": "es"}],

	[{"cn": "ee"}, {"ln": "en"}],
	
	[{"cn": "et"}, {"ln": "en"}],
	
	[{"cn": "fi"}, {"ln": "fi"}],
	
	[{"cn": "fr"}, {"ln": "fr"}],
	
	[{"cn": "gm"}, {"ln": "en"}],
	
	[{"cn": "ga"}, {"ln": "fr"}],
	
	[{"cn": "de"}, {"ln": "de"}],
	
	[{"cn": "gr"}, {"ln": "el"}],

	[{"cn": "gh"}, {"ln": "en"}],
	
	[{"cn": "gh"}, {"ln": "fr"}],
	
	[{"cn": "gd"}, {"ln": "en"}],
	
	[{"cn": "gt"}, {"ln": "es"}],
	
	[{"cn": "gy"}, {"ln": "en"}],
	
	[{"cn": "ht"}, {"ln": "en"}],
	
	[{"cn": "hn"}, {"ln": "es"}],
	
	[{"cn": "hk"}, {"ln": "zh"}],
	
	[{"cn": "hk"}, {"ln": "en"}],
	
	[{"cn": "hu"}, {"ln": "hu"}],

	[{"cn": "is"}, {"ln": "en"}],
	
	[{"cn": "in"}, {"ln": "en"}],
	
	[{"cn": "ie"}, {"ln": "en"}],
	
	[{"cn": "vg"}, {"ln": "en"}],
	
	[{"cn": "il"}, {"ln": "he"}],
	
	[{"cn": "it"}, {"ln": "it"}],
	
	[{"cn": "jm"}, {"ln": "en"}],
	
	[{"cn": "jp"}, {"ln": "ja"}],

	[{"cn": "kr"}, {"ln": "ko"}],
	
	[{"cn": "lv"}, {"ln": "en"}],
	
	[{"cn": "lt"}, {"ln": "en"}],
	
	[{"cn": "my"}, {"ln": "en"}],
	
	[{"cn": "mx"}, {"ln": "es"}],
	
	[{"cn": "ae"}, {"ln": "ar"}],
	
	[{"cn": "ma"}, {"ln": "fr"}],
	
	[{"cn": "an"}, {"ln": "en"}],

	[{"cn": "nz"}, {"ln": "en"}],
	
	[{"cn": "ni"}, {"ln": "es"}],
	
	[{"cn": "mz"}, {"ln": "en"}],
	
	[{"cn": "ne"}, {"ln": "en"}],
	
	[{"cn": "no"}, {"ln": "no"}],
	
	[{"cn": "pa"}, {"ln": "es"}],
	
	[{"cn": "py"}, {"ln": "es"}],
	
	[{"cn": "pe"}, {"ln": "es"}],

	[{"cn": "pl"}, {"ln": "pl"}],
	
	[{"cn": "pt"}, {"ln": "pt"}],
	
	[{"cn": "pr"}, {"ln": "en"}],
	
	[{"cn": "pr"}, {"ln": "es"}],
	
	[{"cn": "ro"}, {"ln": "ro"}],
	
	[{"cn": "ru"}, {"ln": "ru"}],
	
	[{"cn": "sg"}, {"ln": "en"}],
	
	[{"cn": "si"}, {"ln": "en"}],
	
	[{"cn": "za"}, {"ln": "en"}],

	[{"cn": "es"}, {"ln": "es"}],
	
	[{"cn": "kn"}, {"ln": "en"}],
	
	[{"cn": "lc"}, {"ln": "en"}],
	
	[{"cn": "vc"}, {"ln": "en"}],
	
	[{"cn": "sr"}, {"ln": "en"}],
	
	[{"cn": "se"}, {"ln": "sv"}],
	
	[{"cn": "ch"}, {"ln": "fr"}],
	
	[{"cn": "ch"}, {"ln": "de"}],
	
	[{"cn": "tw"}, {"ln": "en"}],
	
	[{"cn": "tw"}, {"ln": "zh"}],

	[{"cn": "th"}, {"ln": "en"}],
	
	[{"cn": "tt"}, {"ln": "en"}],
	
	[{"cn": "tn"}, {"ln": "fr"}],
	
	[{"cn": "tr"}, {"ln": "tr"}],
	
	[{"cn": "tc"}, {"ln": "en"}],
	
	[{"cn": "ug"}, {"ln": "fr"}],
	
	[{"cn": "ua"}, {"ln": "ru"}],
	
	[{"cn": "uk"}, {"ln": "en"}],

	[{"cn": "us"}, {"ln": "en"}],
	
	[{"cn": "uy"}, {"ln": "es"}],
	
	[{"cn": "vi"}, {"ln": "en"}],
	
	[{"cn": "uz"}, {"ln": "ru"}],
	
	[{"cn": "ve"}, {"ln": "es"}],
	

	
	[{"cn": "lu"}, {"ln": "fr"}],

	[{"cn": "sk"}, {"ln": "sk"}],
	
	[{"cn": "ng"}, {"ln": "en"}],
	
	[{"cn": "ba"}, {"ln": "en"}],
	
	[{"cn": "bi"}, {"ln": "en"}],
	
	[{"cn": "bj"}, {"ln": "en"}],
	
	[{"cn": "bf"}, {"ln": "en"}],
	
	[{"cn": "bw"}, {"ln": "en"}],
	
	[{"cn": "cm"}, {"ln": "en"}],

	[{"cn": "td"}, {"ln": "en"}],
	
	[{"cn": "km"}, {"ln": "en"}],
	
	[{"cn": "ed"}, {"ln": "en"}],
	
	[{"cn": "gp"}, {"ln": "en"}],
	
	[{"cn": "ly"}, {"ln": "en"}],
	
	[{"cn": "mk"}, {"ln": "en"}],
	
	[{"cn": "mw"}, {"ln": "en"}],
	
	[{"cn": "ml"}, {"ln": "en"}],

	[{"cn": "ed"}, {"ln": "en"}],
	
	[{"cn": "mq"}, {"ln": "en"}],
	
	[{"cn": "mu"}, {"ln": "en"}],
	
	[{"cn": "md"}, {"ln": "en"}],
	
	[{"cn": "na"}, {"ln": "en"}],
	
	[{"cn": "nl"}, {"ln": "nl"}],
	
	[{"cn": "rw"}, {"ln": "en"}],
	
	[{"cn": "re"}, {"ln": "en"}],
	
	[{"cn": "sn"}, {"ln": "fr"}],

	[{"cn": "sc"}, {"ln": "en"}],
	
	[{"cn": "sl"}, {"ln": "en"}],
	
	[{"cn": "sz"}, {"ln": "en"}],
	
	[{"cn": "tg"}, {"ln": "en"}],
	
	[{"cn": "zw"}, {"ln": "en"}],
		
]


// Click listener on the Button
button.addEventListener("click", function(event){

	var outputURLs= []
	var finalOutputURLs=[]	// It will contain the final URLs to be opened in new tab
	var countries= []	// It will contain the countries selected by the user

	console.log("btCountries: "+ $('#btCountries').text())
	var inputCountries = $('#btCountries').text() // It will contain the countries with full name
	// Below is the logic to remove the full name of countries and 
	// capture only the codes of countries into array 'countries'
	var inputCountriesArr = inputCountries.split(',')
	inputCountriesArr.forEach(function(singleCountry, index){
		var country = ''
		if(index!=0){
			country = singleCountry.split(' ')[1]
		} else {
			country = singleCountry.split(' ')[0]
		}
		console.log('country: '+country)
		countries.push(country)
	})


	// Capturing the value of layer selected by the user
	var layer = layerSelect.value
	console.log("Layer: "+layer)

	var input = taURLs.value
	var URLs = input.split("\n")

	
	if(layer=="production"){
		console.log("production if")
		// Below is the logic to remove wip(if existing) from the url 
		URLs.forEach(function(URL){
			var newURL=URL
			if(URL.includes('www-wip')){
				newURL = URL.replace("www-wip", "www")
			}
			outputURLs.push(newURL)
		})

		// Below is the logic to extract country from all the URLs, and then capture
		// the languages corresponding to the country codes. Thereafter forming the 
		// new URLs and store them in the array 'finalOutputURLs'
		outputURLs.forEach(function(URL){
			finalOutputURLs.push(URL)
			var part1 = URL.substring(0, 21)	// contains the string upto (before) language code
			var part3 =''
			if (URL.length>26) {
				part3 = URL.substring(26, URL.length)	// contains the string after country code
			}

			// forming the part 2 of the URL string which is going to be the  pair of lang-count.
			// Then appending part1,part2 and part3 to form final url and push it into the array:
			//  'finalOutputURLs' 
			countries.forEach(function(country){
				
				data.forEach(function(arr){
					if(arr[0]['cn'] == country){
						var lang = arr[1]['ln']
						var part2 = lang + '-' + country
						var finalURL = part1 + part2 + part3
						finalOutputURLs.push(finalURL)
					}
				})

				
			})
		})

	} 
	// Same above process goes if the layer selected by user is wip 
	else {
		console.log("wip else")
		URLs.forEach(function(URL){
			var newURL=URL
			if(URL.includes('www.')){
				newURL = URL.replace("www", "www-wip")
			}
			outputURLs.push(newURL)
		})

		outputURLs.forEach(function(URL){
			finalOutputURLs.push(URL)
			var part1 = URL.substring(0, 25)
			var part3 = ''
			if (URL.length>30){
				part3 = URL.substring(30, URL.length)
			}

			countries.forEach(function(country){

				data.forEach(function(arr){
					if(arr[0]['cn'] == country){
						var lang = arr[1]['ln']
						var part2 = lang + '-' + country
						var finalURL = part1 + part2 + part3
						finalOutputURLs.push(finalURL)
					}
				})

				
			})
		})
	}

	finalOutputURLs.forEach(function(URL){
		window.open(URL)
	})
})