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
    		        "numb": "",
			"type": "Community Campaign",
			"name": "Community YouTube / Twitter Campaign #1",
			"budget": "100,000 BTCZ per week / one week duration",
			"status": "Vote Passed / Campaign Expired",
			"links": {
				"link1": ["Results", "http://www.strawpoll.me/14517768/r"],
				"link2": ["Payment Updated", "https://docs.google.com/document/d/1fnsY7khYimf9wOXcj6-hO0tDHVXYeFVbcql_lP3ofK4/edit?usp=sharing"]
				}
			},
		        {          
			"numb": "",
			"type": "Community Competition",
			"name": "Community Competition #1",
			"budget": "45,000 - 75,000 BTCZ",
			"status": "Vote Passed",
			"links": {
				"link1": ["Results", "http://www.strawpoll.me/14518351/r"],
				"link2": ["Details", "https://docs.google.com/document/d/14mPlKiQyef8rmTqZnY0hdKBHANtTEEbWXAgZY50ORKQ/edit?usp=sharing"]
				}
                        },
			{
			"numb": "",
			"type": "PR & Media",
			"name": "PR & Media Campaign #1",
			"budget": "150,000 BTCZ +25,000 BTCZ to add new country",
			"status": "Vote Passed / Distributing ",
			"links": {
				"link1": ["Results", "http://www.strawpoll.me/14564234/r"],
				"link2": ["Payment Details", "https://docs.google.com/document/d/1TDjSG-d7u2oWrba9ZMxfz_F3CADq7n53Sj_tGPAM8Ss/edit?usp=sharing"]
			        }				
			}
		      ]
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
			"numb": "",
			"type": "Website",
			"description": "Primary Website",
			"web_link": "https://btcz.rocks",
			"links": {
               	            "link1": ["GitHub", "https://github.com/bitcoinz-sites/btcz.rocks"]
                           }
			},
			{ 
			"numb": "",
			"type": "Website",
			"description": "Progress / Info Bulletin",
			"web_link": "https://info.btcz.rocks/",
			"links": {
     			    "link1": ["GitHub", "https://github.com/bitcoinz-sites/bitcoinz-infosite"]
                           }
                }
	    ]}
    };

module.exports = settings;
