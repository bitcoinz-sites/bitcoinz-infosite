var settings = {};

settings.title = "BitcoinZ Progress";

settings.panels = {
	"proposals": {
		"title": "Proposals",
		"headings": {
			"numb": "#",
			"type": "Type",
			"name": "Name",
			"budget": "Budget",
			"status": "Status",
			"links": "Links"
		}, 
		"info": [ 
		        {
    		        "numb": "5",
			"type": "Community Campaign",
			"name": "Community YouTube / Twitter Campaign #1",
			"budget": "100,000 BTCZ per week / one week duration",
			"status": "Vote Passed / Campaign Expired",
			"links": {
				"link1": "http://www.strawpoll.me/14517768/r",
				"link2": "https://docs.google.com/document/d/1fnsY7khYimf9wOXcj6-hO0tDHVXYeFVbcql_lP3ofK4 edit?usp=sharing"
				}
			  },
		         {          
			"numb": "3",
			"type": "Community Competition",
			"name": "Community Competition #1",
			"budget": "45,000 - 75,000 BTCZ",
			"status": "Vote Passed",
			"links": {
				"link1": "http://www.strawpoll.me/14518351/r",
				"link2": "https://docs.google.com/document/d/14mPlKiQyef8rmTqZnY0hdKBHANtTEEbWXAgZY50ORKQ/edit?usp=sharing"
				}
              }]
		   },
	"help_wanted": {
		"title": "Help Wanted",
		"headings": {
			"numb": "#",
			"type": "Type",
			"description": "Description",
			"web_link": "Web Link",
			"repository": "Repository"
		},
		"info": [
			{
			"numb": "2",
			"type": "Website",
			"description": "Primary Website",
			"web_link": "https://btcz.rocks",
			"repository": "https://github.com/bitcoinz-sites/btcz.rocks"
			},
			{ 
			"numb": "1",
			"type": "Website",
			"description": "Progress / Info Bulletin",
			"web_link": "https://info.btcz.rocks/",
			"repository": "https://github.com/bitcoinz-sites/bitcoinz-infosite"
            }
	    ]}
    };

module.exports = settings;
