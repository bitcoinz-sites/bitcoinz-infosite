var settings = {};

settings.title = "BitcoinZ Progress";


settings.panels = {
	"proposals": {"title": "Proposals", 
		      "headings": {
				"numb": "#",
				"type": "Type",
				"name": "Name",
				"budget": "Budget",
				"status": "Status",
				"links": "Links"
				}                 
		             },
	
	"help_wanted": {"title": "Help Wanted",
			"headings": {
				 "numb": "#",
                                 "type": "Type",
				 "description": "Description",
				 "web_link": "Web Link",
                                 "repository": "Repository"
				}
	                     }
	
			};

module.exports = settings;
