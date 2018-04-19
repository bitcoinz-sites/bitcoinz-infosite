var settings = {};

// Browser title bar and Header bar title
settings.title = "BitcoinZ Progress";

// Current theme choices are darkly, flatly, journal, lumen, paper, readable, sandstone, simplex, slate, spacelab (default), superhero, united, yeti
// Themes courtesy of https://bootswatch.com/3/

settings.theme = "flatly";

settings.navright = {
	"topright": {
                  "nav1": ["Site", "https://btcz.rocks"],
		  "nav2": ["Guides", "https://bitcoinzguiding.ovh"]
                   }
               },

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
                "footer_buttons": {
			"active": "true",
			"buttons": {
				"button1": ["Submit New Proposal", "https://forum.btcz.rocks/t/read-first-proposal-submission-template/54"]
                               }
                 },
		"info": [
		        {
    		        "numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
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
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
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
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"type": "PR & Media",
			"name": "PR & Media Campaign #1",
			"budget": "150,000 BTCZ +25,000 BTCZ to add new country",
			"status": "Vote Passed / Distributing ",
			"links": {
				"link1": ["Results", "http://www.strawpoll.me/14564234/r"],
				"link2": ["Payment Details", "https://docs.google.com/document/d/1TDjSG-d7u2oWrba9ZMxfz_F3CADq7n53Sj_tGPAM8Ss/edit?usp=sharing"]
			       }
			},
                        {
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"type": "Twitch Tournament",
			"name": "Twitch Tournament Sponsorship #1",
			"budget": "$850 USD in BTCZ",
			"status": "Vote Passed",
			"links": {
				"link1": ["Results", "http://www.strawpoll.me/14744750/r"],
				"link2": ["Payment Details", "https://docs.google.com/document/d/1UMlxhAnXI5QePBvBJAXPlhBH1LslR7z_fjDnBM4Y6Mo/edit?usp=sharing"],
                                "link3": ["Twitch Channel", "https://www.twitch.tv/livevvvgaming"]
			        }
                      	},
                        {
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"type": "GUI Miner",
			"name": "Branded - All In One Miner #1",
			"budget": "300,000 BTCZ",
			"status": "Vote Passed / Payment Delivered",
			"links": {
				"link1": ["Results", "http://www.strawpoll.me/14578069/r"],
				"link2": ["Payment Details", "https://docs.google.com/document/d/1p-jqs7HYJ_qtmwqDnawZM8jgjQw7Mx0IUc_c12nDiCQ/edit?usp=sharing"],
                                "link3": ["Start Mining", "https://youtu.be/7FjW2kV3VzQ"]
			        }
 			},
                        {
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"type": "Video Marketing",
			"name": "Video Marketing #1",
			"budget": "100,000 BTCZ",
			"status": "Vote Passed",
			"links": {
				"link1": ["Results", "http://www.strawpoll.me/14578094/r"],
				"link2": ["Payment Details", "https://docs.google.com/document/d/13OspN1gfxOTO1Ek-TtSOvpjowS3a-x4DnJTDODZ_t_w/edit?usp=sharing"]
			        }				
			},
                        {
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"type": "Exchange Listing",
			"name": "Paid Exchange Listing #1 (crypto-bridge) ",
			"budget": "400,000 BTCZ",
			"status": "Vote Passed",
			"links": {
				"link1": ["Results", "http://www.strawpoll.me/14608560/r"],
				"link2": ["Payment Refunded", "https://docs.google.com/document/d/1LV0c3ABV_XuNnqqtPAZaYYBegjie-C0Ogf7bZ-8VMfo/edit?usp=sharing"]
			        }				
			},
                        {
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"type": "Coinomi Wallet",
			"name": "Coinomi Wallet Listing #1",
			"budget": "1.25 BTC + 0.25 BTC in BTCZ",
			"status": "Vote Passed",
			"links": {
				"link1": ["Results", "http://www.strawpoll.me/14641589/r"],
				"link2": ["Payment Details", "https://docs.google.com/document/d/14oE4E3_WfFQAR7uxHP7Ex66fIOWj39GygB6GpXuUkLA"],
                                "link3": ["Funds Tracker", "http://btcz.altervista.org/coinomi.html"],
                                "link4": ["Get Coinomi", "https://coinomi.com/"]
			        }				
			},
                        {
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"type": "BitcoinZ Interactive Bots",
			"name": "BitcoinZ Bot Continued Development #1",
			"budget": "150,000 BTCZ",
			"status": "Vote Ended 01/09/2018",
			"links": {
				"link1": ["Vote Not Passed", "http://www.strawpoll.me/14748097/r"],
				"link2": ["Proposal Details", "https://docs.google.com/document/d/1jRRBauzZKjywsc8ydHGHnt5BKrw5UDn5v63hatQykqQ/edit?usp=sharing"]
			        }				
			},
                        {
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"type": "Exchange Listing",
			"name": "Hash Race Exchange Listing #1",
			"budget": "5 BTC Fund Raiser",
			"status": "Vote Ended",
			"links": {
				"link1": ["Results", "https://doodle.com/poll/t2bpenn288s6ndna"],
				"link2": ["Race Tracker", "https://hodler95.github.io/exchangesrace/"],
                                "link3": ["Race Details", "https://docs.google.com/document/d/1R3E_XQdR4EaeSdoqD5w-o7ieL9y-_kgqBQz0j8gKOlk/edit?usp=sharing"]
			        }				
			},
                        {
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"type": "Ledger Nano S Wallets",
			"name": "Ledger Nano S Integration #1",
			"budget": "$895 USD",
			"status": "Vote Passed / Dev In Progress",
			"links": {
				"link1": ["Results", "http://www.strawpoll.me/14976387/r"],
				"link2": ["Race Tracker", "https://docs.google.com/document/d/1wx90oPq_gfZAYYjbF_QfJ2586NUs7oUjLDRhoezwO8I/edit?usp=sharing"]
			        }				
			},
                        {
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"type": "Logo update",
			"name": "BitcoinZ Logo Update + Marketing Package #1",
			"budget": "TBD",
			"status": "Vote Ended",
			"links": {
				"link1": ["Vote Not Passed", "http://www.strawpoll.me/15061526/r"],
				"link2": ["Proposal Details", "https://docs.google.com/document/d/1_kWO1l4P54nNZbU168EOpgnoGnThR07pZbscy_BLTME/edit?usp=sharing"]
			        }				
			},
                        {
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"type": "Governance & Procedure",
			"name": "Framework & Method Proposal #1",
			"budget": "None Requested",
			"status": "Community Review",
			"links": {
				"link1": ["Proposal Details", "https://docs.google.com/document/d/1_kWO1l4P54nNZbU168EOpgnoGnThR07pZbscy_BLTME/edit?usp=sharing"]
			        }				
			},
                        {
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"type": "Sponsorship",
			"name": "Hearthstone - Streamer #1",
			"budget": "$500 - $750 in BTCZ 3months",
			"status": "Vote ended",
			"links": {
				"link1": ["Vote Not Passed", "https://forum.btcz.rocks/t/sponsor-a-hearthstone-youtube-streamer/63"]
			        }				
			},
                        {
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"type": "Bounty",
			"name": "Shopify plugin",
			"budget": "76,000 BTCZ",
			"status": "Vote Passed / Need Dev",
			"links": {
				"link1": ["Results & Read Details", "https://forum.btcz.rocks/t/proposal-for-shopify-integration/98/5"]
			        }				
			},
                        {
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"type": "Exchange listing",
			"name": "Binance",
			"budget": "10-25 BTC for BNB",
			"status": "Voting / Raising funds",
			"links": {
				"link1": ["Vote Now", "https://forum.btcz.rocks/t/proposal-for-binance-exchange/119"],
                                "link2": ["Funds Tracker", "https://bitcoinz-sites.github.io/binancetracker/"]
			        }				
			},
                        {
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"type": "Exchange listing",
			"name": "Cryptopia",
			"budget": "5 BTC for DOT",
			"status": "Voting / Raising funds",
			"links": {
				"link1": ["Vote Now", "https://forum.btcz.rocks/t/proposal-for-cryptopia-exchange/118"],
                                "link2": ["Funds Tracker", "https://bitcoinz-sites.github.io/cryptopiatracker/"]
			        }				
			},
                        {
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"type": "Decimal Places",
			"name": "Satoshi Places",
			"budget": "N/A",
			"status": "Vote ended",
			"links": {
				"link1": ["Vote Not Passed / Read Details", "https://forum.btcz.rocks/t/proposal-for-smaller-difference-between-buy-sell-price-on-exchanges/246"]
			        }				
			},
                        {
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"type": "Masternodes",
			"name": "Side-Chain Masternodes",
			"budget": "N/A",
			"status": "Vote ended",
			"links": {
				"link1": ["Vote Not Passed / Read Details", "https://forum.btcz.rocks/t/masternode-proposal/204"]
			        }				
			},
                        {
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"type": "Social Media",
			"name": "Paid Social Media Activity",
			"budget": "$600 / 1000 / 3000",
			"status": "Vote ended",
			"links": {
				"link1": ["Vote Not Passed / Read Details", "https://forum.btcz.rocks/t/proposal-for-members-recruitment/201"]
			        }				
			},
                        {
			"numb": "",
                        "isnew": "true",
                        "highlight": "", // danger = red; success = green;
			"type": "Bounty",
			"name": "Logo For Btcz.news",
			"budget": "5,000 BTCZ",
			"status": " Bounty Outstanding ",
			"links": {
				"link1": ["Bounty Details", "https://forum.btcz.rocks/t/btcz-news-logo-bounty/335"]
			        }				
			}
		      ]
		   },
	"promotional_videos": {
		"title": "Promotional Videos",
		"headings": {
			"numb": "#",
			"description": "Description",
			"language": "Language",
			"link": "Link"
		},
                "footer_buttons": {
			"active": "false",
			"buttons": {
				"button1": ["Submit New Proposal", "https://forum.btcz.rocks/t/read-first-proposal-submission-template/54"]
                               }
                 },
		"info": [
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "What is BitcoinZ? - VoskCoin",
                        "language": "English",
			"links": {
               	            "link1": ["Watch Now", "https://www.youtube.com/watch?v=uXikYzel8hc"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "What is BitcoinZ (BTCZ)? How does Bitcoin 2.0 work?",
                        "language": "Russian",
			"links": {
               	            "link1": ["Watch Now", "https://youtu.be/Vd5hcUH-fsg"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "Como Minerar a criptomoeda BitcoinZ",
                        "language": "Portugues",
			"links": {
               	            "link1": ["Watch Now", "https://youtu.be/AlOHK44qmVo"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "Fastest Transfer? BitcoinZ ($BTCZ) Crowdfunded Crypto",
                        "language": "English",
			"links": {
               	            "link1": ["Watch Now", "https://youtu.be/xLteQIYr7vU"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "How-To - BitcoinZ GUI Miner",
                        "language": "English",
			"links": {
               	            "link1": ["Watch Now", "https://www.youtube.com/watch?v=7FjW2kV3VzQ"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "How-To - Hash4 Lottery GUI Miner",
                        "language": "English",
			"links": {
               	            "link1": ["Watch Now", "https://youtu.be/_dEegf-tHRE"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "How-To - BTCZ.ME Shareable Link System",
                        "language": "English",
			"links": {
               	            "link1": ["Watch Now", "https://youtu.be/Af8seJbpOWE"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "How-To - Generate Paper Wallet",
                        "language": "English",
			"links": {
               	            "link1": ["Watch Now", "https://youtu.be/ArQETyRtm_I"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "How-To - Fold Your Paper Wallet",
                        "language": "English",
			"links": {
               	            "link1": ["Watch Now", "https://youtu.be/wgUOz3U3vgQ"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "What is BitcoinZ? How Does Bitcoin 2.0 Work? ",
                        "language": "English",
			"links": {
               	            "link1": ["Watch Now", "https://www.youtube.com/watch?v=ILOzg-9X7Jc"]
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
                "footer_buttons": {
			"active": "true",
			"buttons": {
				"button1": ["Wanna help? Join Slack", "https://slack.btcz.rocks/"]
                               }
                 },
		"info": [
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"type": "Website",
			"description": "Primary Website",
			"web_link": "https://btcz.rocks",
			"links": {
               	            "link1": ["GitHub", "https://github.com/bitcoinz-sites/btcz.rocks"]
                           }
			},
			{ 
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"type": "Website",
			"description": "Progress / Info Bulletin",
			"web_link": "https://info.btcz.rocks/",
			"links": {
     			    "link1": ["GitHub", "https://github.com/bitcoinz-sites/bitcoinz-infosite"]
                          }
                        },
			{ 
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"type": "Website",
			"description": "Donation Funds Tracker",
			"web_link": "https://btcz.fund/",
			"links": {
     			    "link1": ["GitHub", "https://github.com/bitcoinz-sites/bitcoinz-donation-page"]
                          }
                        },
			{ 
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"type": "Website",
			"description": "Guides Site",
			"web_link": "http://bitcoinzguiding.ovh/",
			"links": {
     			    "link1": ["GitHub", "https://github.com/bitcoinz-sites/bitcoinz-guides"]
                          }
                        },
			{ 
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"type": "Wallet",
			"description": "Copay Wallet",
			"web_link": "N/A",
			"links": {
     			    "link1": ["GitHub", "https://github.com/bitcoinz-wallets/bitcoinz-copay-wallet"]
                          }
                        },
			{ 
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"type": "Moderation / Posting",
			"description": "Reddit",
			"web_link": "https://www.reddit.com/r/BTCZCommunity/",
			"links": {
     			    "link1": ["N/A", ""]
                          }
                        },
			{ 
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"type": "Moderation / Posting",
			"description": "Facebook Group",
			"web_link": "https://www.facebook.com/groups/bitcoinz.community/",
			"links": {
     			    "link1": ["N/A", ""]
                          }
                        },
			{ 
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"type": "Moderation / Posting",
			"description": "Twitter",
			"web_link": "https://twitter.com/BitcoinZTeam",
			"links": {
     			    "link1": ["N/A", ""]
                          }
                        }
	              ]
                   },

	"events": {
		"title": "Events",
		"headings": {
			"numb": "#",
			"description": "Description",
			"status": "Status",
			"date": "Date",
			"link": "Link"
		},
                "footer_buttons": {
			"active": "false",
			"buttons": {
				"button1": ["Wanna help? Join Slack", "https://slack.btcz.rocks/"]
                               }
                 },
		"info": [
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "Live Meetup #1",
			"status": "Completed",
			"date": "11 / 19 / 2017",
			"links": {
               	            "link1": ["View Now", "https://www.youtube.com/watch?v=IuBlR06wxOo"]
                           }
			 },
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "Live Meetup #2",
			"status": "Completed",
			"date": "12 / 03 / 2017 - 8 am UTC / 3 am ET",
			"links": {
               	            "link1": ["View Now", "https://www.youtube.com/watch?v=HTcOLw982Ew"]
                           }
			 },
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "Discord Community Audio Chat #1",
			"status": "Completed",
			"date": " 	12 / 16 / 2017 5:00PM UTC / 9:00AM PST / 12:00PM EST",
			"links": {
               	            "link1": ["Join Discord", "https://discordapp.com/invite/u3dkbFs"]
                           }
			 },
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "Live Meetup #3",
			"status": "Completed",
			"date": "01 / 07 / 2018 @ 4pm UTC / 10am CST ",
			"links": {
               	            "link1": ["View Now", "https://www.youtube.com/watch?v=I_cJBqeSEvs"]
                           }
			 },
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "Live Meetup #4",
			"status": "Completed",
			"date": "03 / 11 / 2018 @ 3pm UTC / 9am CST ",
			"links": {
               	            "link1": ["View Now", "https://youtu.be/Ap-wo3C7_j8"]
                           }
			 },
			{
			"numb": "",
                        "isnew": "true",
                        "highlight": "", // danger = red; success = green;
			"description": "TxtZ - SMS/Text BitcoinZ Announcement #1",
			"status": "Completed",
			"date": "04 / 15 / 2018 @ 3pm UTC / 9am CST",
			"links": {
               	            "link1": ["View Now", "https://www.youtube.com/watch?v=aeGX36c24i0"]
                           }
			 },
	              ]
                   },
	"campaigns": {
		"title": "Campaigns",
		"headings": {
			"numb": "#",
			"description": "Description",
			"status": "Status",
			"datelaunched": "Date Launched",
                        "details": "Links",
			"budget": "Budget"
		},
                "footer_buttons": {
			"active": "false",
			"buttons": {
				"button1": ["Wanna help? Join Slack", "https://slack.btcz.rocks/"]
                               }
                 },
		"info": [
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "YouTube Campaign #1",
			"status": "Expired",
			"datelaunched": "11 / 24 / 2017",
			"links": {
               	            "link1": ["Full Details", "https://docs.google.com/document/d/1rnIyfPtBxYEX21e-P22oAx357g-c5dhzG1m2GAv2mtM/edit?usp=sharing"]
                           },
                        "budget": "50,000 BTCZ"
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "Twitter Campaign #1",
			"status": "Expired",
			"datelaunched": "11 / 24 / 2017",
			"links": {
               	            "link1": ["Full Details", "https://docs.google.com/document/d/1VRZQIaosJ0Ue1q0Levc7zfAx0ku7i2VLNKuLHri8mc4/edit?usp=sharing"]
                           },
                        "budget": "50,000 BTCZ"
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "Twitter Campaign #2",
			"status": "Expired",
			"datelaunched": "11 / 29 / 2017",
			"links": {
               	            "link1": ["Full Details", "https://docs.google.com/document/d/1GVxC6mBKIg-Jtmw6eDdvDnvpw6FopKEeA8Re9vD_lP8/edit?usp=sharing"]
                           },
                        "budget": "100,000 BTCZ"
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "Donations For Hash Power Round #2",
			"status": "Expired",
			"datelaunched": "12 / 01 / 2017",
			"links": {
               	            "link1": ["Details", "https://docs.google.com/document/d/1b0pgXYDO6FgjkKXs8UxcWEqqK6teSNBPO9FenXjSagk"],
                            "link2": ["Campaign Completed", "https://equipool.1ds.us/workers/t1h4H4Cp3Ffwj92dzTPrEEEjQsqW24ubapP"]
                           },
                        "budget": "50KSol/s Volunteers"
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "Community YouTube / Twitter Campaign #1",
			"status": "Expired",
			"datelaunched": "12 / 08 / 2017",
			"links": {
               	            "link1": ["Payment Details", "https://docs.google.com/document/d/1fnsY7khYimf9wOXcj6-hO0tDHVXYeFVbcql_lP3ofK4/edit?usp=sharing"],
                           },
                        "budget": "100,000 BTCZ"
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "Community Competition Campaign #1",
			"status": "Expired",
			"datelaunched": "12 / 08 / 2017",
			"links": {
               	            "link1": ["Full Details", "https://docs.google.com/document/d/14mPlKiQyef8rmTqZnY0hdKBHANtTEEbWXAgZY50ORKQ/edit?usp=sharing"],
                           },
                        "budget": "45,000 - 75,000 BTCZ"
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "Hash4 Inaugural Lottery #1 ",
			"status": "Completed",
			"datelaunched": "01 / 18 / 2018",
			"links": {
               	            "link1": ["Full Details", "https://hash4.btcz.rocks/"],
                           },
                        "budget": "10% of Total BTCZ Mined"
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "Hash4 Lottery #2",
			"status": "Completed",
			"datelaunched": "01 / 29 / 2018",
			"links": {
               	            "link1": ["Full Details", "https://hash4.btcz.rocks/"],
                           },
                        "budget": "10% of Total BTCZ Mined"
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "Hash4 Lottery #3",
			"status": "Completed",
			"datelaunched": "02 / 05 / 2018",
			"links": {
               	            "link1": ["Full Details", "https://hash4.btcz.rocks/"],
                           },
                        "budget": "10% of Total BTCZ Mined"
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "Hash4 Lottery #4",
			"status": "Completed",
			"datelaunched": "02 / 12 / 2018",
			"links": {
               	            "link1": ["Full Details", "https://docs.google.com/document/d/1dFM3yNtowNY9RP8WHGEcRK7jQiihRSDi4lrLLZxvoKA/edit?usp=sharing"],
                           },
                        "budget": "10,000 BTCZ"
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "Mission Statement Competition #1",
			"status": "Active (Phase 1: collection)",
			"datelaunched": "02 / 19 / 2018",
			"links": {
               	            "link1": ["Full Details", "https://hash4.btcz.rocks/"],
                           },
                        "budget": "10% of Total BTCZ Mined"
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "Hash4 Lottery #5",
			"status": "Completed",
			"datelaunched": "02 / 19 / 2018",
			"links": {
               	            "link1": ["Full Details", "https://hash4.btcz.rocks/"],
                           },
                        "budget": "10% of Total BTCZ Mined"
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "Hash4 Lottery #6",
			"status": "Completed",
			"datelaunched": "02 / 25 / 2018",
			"links": {
               	            "link1": ["Full Details", "https://hash4.btcz.rocks/"],
                           },
                        "budget": "10% of Total BTCZ Mined"
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "Hash4 Lottery #7",
			"status": "Completed",
			"datelaunched": "03 / 04 / 2018",
			"links": {
               	            "link1": ["Full Details", "https://hash4.btcz.rocks/"],
                           },
                        "budget": "10% of Total BTCZ Mined"
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "Pending",
			"status": "Pending",
			"datelaunched": "Pending",
			"links": {
               	            "link1": ["Pending", ""],
                           },
                        "budget": "TBD - Investor sponsored"
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "Hash4 Lottery #8",
			"status": "Completed",
			"datelaunched": "03 / 11 / 2018",
			"links": {
               	            "link1": ["Full Details", "https://hash4.btcz.rocks/"],
                           },
                        "budget": "10% of Total BTCZ Mined"
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "Hash4 Lottery #9",
			"status": "Completed",
			"datelaunched": "03 / 18 / 2018",
			"links": {
               	            "link1": ["Full Details", "https://hash4.btcz.rocks/"],
                           },
                        "budget": "10% of Total BTCZ Mined"
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "Chancefx + BitcoinZ Twitter Campaign",
			"status": "Expired",
			"datelaunched": "03 / 18 / 2018",
			"links": {
               	            "link1": ["Full Details", "https://docs.google.com/document/d/1Ssgib-_WlU59QsMDSmQAuNBqr6RiB0lBDPmNbYxZwhg/edit"],
                           },
                        "budget": "1,000 BTCZ per tweet"
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "Hash4 Lottery #10 ",
			"status": "Completed",
			"datelaunched": "03 / 25 / 2018",
			"links": {
               	            "link1": ["Full Details", "https://hash4.btcz.rocks/"],
                           },
                        "budget": "10% of Total BTCZ Mined"
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "Hash4 Lottery #11 ",
			"status": "Completed",
			"datelaunched": "04 / 01 / 2018",
			"links": {
               	            "link1": ["Full Details", "https://hash4.btcz.rocks/"],
                            "link2": ["Hash Lottery GUI Miner", "https://github.com/bitcoinz-support/hash4btcz-miner/releases"]
                           },
                        "budget": "10% of Total BTCZ Mined"
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"description": "Jalapen.io - game monetization platform",
			"status": "Vote won!",
			"datelaunched": "03 / 14 / 2018",
			"links": {
               	            "link1": ["Full Details", "http://jalapen.io/"]
                           },
                        "budget": "N/A - Win vote"
			}
	             ]
                  },
	"exchanges": {
		"title": "Exchanges",
		"headings": {
			"numb": "#",
			"name": "Name",
			"cost": "Cost",
			"status": "Status",
                        "link": "Links"
		},
                "footer_buttons": {
			"active": "false",
			"buttons": {
				"button1": ["Wanna help? Join Slack", "https://slack.btcz.rocks/"]
                               }
                 },
		"info": [
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "Coinbene",
			"cost": "10 BTC",
			"status": "BTCZ/USDT Delayed May 2018",
			"links": {
               	            "link1": ["Full Details", "https://www.coinbene.com/"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "TradeSatoshi",
			"cost": "N/A",
			"status": "Active",
			"links": {
               	            "link1": ["Trade Page", "https://tradesatoshi.com/Exchange?market=BTCZ_BTC"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "CryptoBroker",
			"cost": "N/A",
			"status": "Active",
			"links": {
               	            "link1": ["Trade Page", "https://trade.cryptobroker.io/markets/btczbtc"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "C-Cex",
			"cost": "4 BTC",
			"status": "Active",
			"links": {
               	            "link1": ["Trade Page", "https://www.coinbene.com/"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "Stocks.Exchange",
			"cost": "0.08 BTC + 0.02 ETH pair",
			"status": "Active",
			"links": {
               	            "link1": ["Trade Page", "https://stocks.exchange/trade/BTCZ/BTC"],
               	            "link2": ["Payment Details", "https://docs.google.com/document/d/12e7nJwGA3LeVKw0BAHbxtDd8Qmw9k90MUFNvBa39yOs/edit?usp=sharing"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "BTC-Alpha",
			"cost": "1.5 BTC or 1 BTC + 0.5 BTC in BTCZ ",
			"status": "Active",
			"links": {
               	            "link1": ["Trade Page", "https://btc-alpha.com/exchange/BTCZ_BTC/"],
               	            "link2": ["Payment Details", "https://docs.google.com/document/d/12e7nJwGA3LeVKw0BAHbxtDd8Qmw9k90MUFNvBa39yOs/edit?usp=sharing"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "Crypto-Bridge",
			"cost": "400,000 BTCZ",
			"status": "Payment Refunded",
			"links": {
               	            "link1": ["Site Page", "https://crypto-bridge.org/"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "BarterDEX",
			"cost": "100,000 BTCZ",
			"status": "Active (Electrum mode enabled)",
			"links": {
               	            "link1": ["Download Now", "https://github.com/KomodoPlatform/BarterDEX/releases"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "Exrates.me",
			"cost": "2 BTC",
			"status": "Active",
			"links": {
               	            "link1": ["Site Page", "https://exrates.me/"],
               	            "link2": ["Payment Details", "https://docs.google.com/document/d/1RDa4gyp9i3ZoqQnve6wqaAU0CMoIBdPKsZiE_pBI3WA/edit?usp=sharing"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "Crex24.com",
			"cost": "50,000 BTCZ",
			"status": "Active",
			"links": {
               	            "link1": ["Site Page", "https://crex24.com/exchange/BTCZ-BTC"],
               	            "link2": ["Payment Details", "https://docs.google.com/document/d/1G5F4F9RjBc2MAMWkYZJq0I2ZoyUC08l4STkdg5VrHGw/edit?usp=sharing"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "OctaEx.com",
			"cost": "Vote Won",
			"status": "Active",
			"links": {
               	            "link1": ["Trade Page", "https://octaex.com/trade/index/market/btcz_btc"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "VICex.io",
			"cost": "TBD",
			"status": "Planned listing / vote won",
			"links": {
               	            "link1": ["Voting Won", "https://acc.vicex.io/acc/listing"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "danger", // danger = red; success = green;
			"name": "Dontoshi",
			"cost": "TBD",
			"status": "Voting now",
			"links": {
               	            "link1": ["Voting Page", "https://dontoshi.featureupvote.com/suggestions/7500/bitcoinz-btcz"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "danger", // danger = red; success = green;
			"name": "Coinpulse",
			"cost": "TBD",
			"status": "Voting now",
			"links": {
               	            "link1": ["Voting Page", "https://request.coinpulse.io/suggestions/5767/bitcoinz-btcz"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "danger", // danger = red; success = green;
			"name": "Coindeal",
			"cost": "TBD",
			"status": "Voting now",
			"links": {
               	            "link1": ["Voting Page", "https://coindeal.com/vote"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "danger", // danger = red; success = green;
			"name": "Next.exchange",
			"cost": "TBD",
			"status": "Voting now",
			"links": {
               	            "link1": ["Voting Page", "https://nextexchange.featureupvote.com/suggestions/2405/bitcoinz-btcz"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "Eucoin.io",
			"cost": "TBD",
			"status": "Need voting page",
			"links": {
               	            "link1": ["Site Page", "http://eucoin.io/"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "danger", // danger = red; success = green;
			"name": "CoinFalcon",
			"cost": "TBD",
			"status": "Voting now",
			"links": {
               	            "link1": ["Voting Page", "https://feedback.coinfalcon.com/coin-request/p/bitcoinz-btcz-1"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "CobinHood",
			"cost": "TBD",
			"status": "Need voting page",
			"links": {
               	            "link1": ["Site Page", "https://cobinhood.com/"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "danger", // danger = red; success = green;
			"name": "Altcoin.io",
			"cost": "TBD",
			"status": "Voting now",
			"links": {
               	            "link1": ["Voting Page", "https://feedback.altcoinexchange.com/suggestions/2021/bitcoinz-btcz-pow-equihash-algorithm"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "danger", // danger = red; success = green;
			"name": "Mercatox",
			"cost": "TBD",
			"status": "Voting now",
			"links": {
               	            "link1": ["Voting Page", "https://mercatox.com/coins/list?name=btcz"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "danger", // danger = red; success = green;
			"name": "CryptalDash",
			"cost": "TBD",
			"status": "Voting now",
			"links": {
               	            "link1": ["Voting Page", "https://www.cryptaldash.com/new-coin-listing?search=Btcz"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "danger", // danger = red; success = green;
			"name": "Cex.io",
			"cost": "TBD",
			"status": "Voting now",
			"links": {
               	            "link1": ["Voting Page", "https://support.cex.io/hc/en-us/community/posts/115002759994-NEW-BitcoinZ-BTCZ-Please-Vote"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "CoinEgg.com",
			"cost": "Pending Response",
			"status": "Email Submitted",
			"links": {
               	            "link1": ["Site Page", "https://www.coinegg.com/trade/"],
                            "link2": ["Details", "https://docs.google.com/document/d/1vXMZLYmHUKnQ5JF4FdOW1emq4HqEd0zhwOyDaKd3idk/edit?usp=sharing"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "Binance",
			"cost": "10-25 BTC for BNB ",
			"status": "Need funds",
			"links": {
               	            "link1": ["Submit", "https://drive.google.com/open?id=1EHpvQRWh_MKiYFw0PPQPAIMVDCGUgpPy4pk6EHBJljQ"],
                            "link2": ["Site Page", "https://www.binance.com/"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "exvo",
			"cost": "0,25 BTC ",
			"status": "Need funds",
			"links": {
               	            "link1": ["Submit", "https://exvo.io/documents/addcoin"],
                            "link2": ["Site Page", "https://www.exvo.io/"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "Bittrex",
			"cost": "Free",
			"status": "Stop submitting requests",
			"links": {
               	            "link1": ["Site Page", "https://www.bittrex.com/"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "Coss.io",
			"cost": "200,000 COSS (~10k USD)",
			"status": "Need submissions",
			"links": {
               	            "link1": ["Submit", "https://drive.google.com/open?id=1gnod_vj0N0u1f93TGq24DePtPIN9TRublQO7Kv26L78"],
                            "link2": ["Site Page", "https://exchange.coss.io/"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "Kucoin.com",
			"cost": "TBD",
			"status": "Need submissions",
			"links": {
               	            "link1": ["Submit", "https://drive.google.com/open?id=1yhsPyrXQGHj6q4r2i-aNTv2sppKCFmAMW6aduA0TSXQ"],
                            "link2": ["Site Page", "https://www.kucoin.com/"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "Poloniex.com",
			"cost": "TBD",
			"status": "Need submissions",
			"links": {
               	            "link1": ["Submit", "https://drive.google.com/open?id=1-oTYDSzbf5icg9tOvtnzRWuyifoLlGYTLIyczFhXvuY"],
                            "link2": ["Site Page", "https://www.poloniex.com/exchange"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "Coinexchange.io",
			"cost": "4 BTC",
			"status": "Need funding",
			"links": {
                            "link1": ["Site Page", "https://www.coinexchange.io/"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "Cryptopia",
			"cost": "> 100k USD",
			"status": "Need funding",
			"links": {
                            "link1": ["Site Page", "https://www.cryptopia.co.nz/"],
                            "link2": ["Paytopia", "https://www.cryptopia.co.nz/Paytopia"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "HitBTC",
			"cost": "20 BTC",
			"status": "Need funding",
			"links": {
                            "link1": ["Site Page", "https://hitbtc.com/"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "Livecoin",
			"cost": "6 BTC",
			"status": "Need funding",
			"links": {
                            "link1": ["Site Page", "https://www.livecoin.net/"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "Openledger.io",
			"cost": "$10,000 USD ",
			"status": "Need funding",
			"links": {
                            "link1": ["Site Page", "https://openledger.info/"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "CoinRail",
			"cost": "5 BTC",
			"status": "Need funding",
			"links": {
                            "link1": ["Site Page", "https://coinrail.co.kr/"]
                           }
			}

                    ]
                },
	"infrastructure": {
		"title": "Infrastructure",
		"headings": {
			"numb": "#",
			"category": "Category",
			"status": "Status",
			"description": "Description",
                        "link": "Links"
		},
                "footer_buttons": {
			"active": "false",
			"buttons": {
				"button1": ["Wanna help? Join Slack", "https://slack.btcz.rocks/"]
                               }
                 },
		"info": [
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"category": "Wallet",
			"status": "Completed",
			"description": "Backend wallet services migrated ",
			"links": {
               	            "link1": ["N/A", ""]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"category": "Explorer",
			"status": "Completed",
			"description": "Insight explorers deployed and operational",
			"links": {
               	            "link1": ["N/A", ""]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"category": "Wallet",
			"status": "Completed",
			"description": "Backend wallet services migrated ",
			"links": {
               	            "link1": ["See list", "https://bitcoinzguiding.ovh/explorers.html"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"category": "Wallet",
			"status": "Completed",
			"description": "Web wallet operational",
			"links": {
               	            "link1": ["Visit Wallet", "https://mybitcoinzwallet.com/"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"category": "Monitoring",
			"status": "Completed",
			"description": "Monitor script created using ZABBIX for wallet services; email notifications sent to community email",
			"links": {
               	            "link1": ["N/A", ""]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"category": "Explorer",
			"status": "Completed",
			"description": "btczexplorer.blockhub.info update price API to pull from coinmarketcap last price; update marketcap to instant update",
			"links": {
               	            "link1": ["Explorer", "https://btczexplorer.blockhub.info"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"category": "Domains",
			"status": "Pending transfer",
			"description": "bitcoinz.global; bitcoinz.ph pending transfer - currently managing via cloudflare DNS",
			"links": {
               	            "link1": ["N/A", ""]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"category": "Forums",
			"status": "Pending decommission",
			"description": "connect.bitcoinz.global forum will be decommissioned due to required license and infrastructure; we will rely on publically available sites for information",
			"links": {
               	            "link1": ["N/A", ""]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"category": "Sites / Services",
			"status": "In testing",
			"description": "Testing load balancing of wallet services and websites ",
			"links": {
               	            "link1": ["N/A", ""]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"category": "TOR Node",
			"status": "Completed",
			"description": "TOR Node address: xiv7crijwn4i4hwj.onion / sp6lvlurevy4fplr.onion / gdpdza5folyjtvll.onion",
			"links": {
               	            "link1": ["Tutorial", "https://btcz.rocks/documents/tutorial-tor-node.pdf"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"category": "MyBTCZWallet ",
			"status": "Decommissioned",
			"description": "25,774 BTCZ paid for active months",
			"links": {
               	            "link1": ["Payment Details", "https://docs.google.com/document/d/17zFqhF4T_NvVggcyJOp7ApCDEcS-ak3FFRm6yxbL2YQ/edit?usp=sharing"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"category": "Flipmybitz.com Marketplace",
			"status": "Completed",
			"description": "Buy and sell using BitcoinZ",
			"links": {
               	            "link1": ["Visit Marketplace", "https://www.flipmybitz.com/"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"category": "Domain Transfers",
			"status": "Partially Completed",
			"description": "bitcoinz.global / mybitcoinzwallet.com",
			"links": {
               	            "link1": ["Payment Details", "https://docs.google.com/document/d/1IiQpDsNDHc5d-EazTWlPFiwChVra6TobeLPqfUeLHPU/edit?usp=sharing"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"category": "Blockchain Bootstrap",
			"status": "Completed",
			"description": "Download blockchain for BitcoinZ",
			"links": {
               	            "link1": ["Download", "http://cryptochainer.com/dir/"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"category": "Explorer Maintenance",
			"status": "Completed",
			"description": "Upgraded bitcoinz to latest build",
			"links": {
               	            "link1": ["Explorer", "https://btczexplorer.blockhub.info/"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"category": "Payment Gateway",
			"status": "Now live!",
			"description": "Payment gateway for developers to integrate BitcoinZ",
			"links": {
               	            "link1": ["Gateway Site", "https://btcz.in/"],
               	            "link2": ["Service Details", "https://docs.google.com/document/d/1MphpNppJ68zxsx27YSrxcwMd4ygNC4yPRKbUci-nrgM/edit?usp=sharing"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"category": "IP.Board Nexus Payment Module",
			"status": "Now live!",
			"description": "25,774 BTCZ paid for active months",
			"links": {
               	            "link1": ["GitHub", "https://github.com/JordanGreenies/btcz.in_ipboard"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"category": "CubeCart Payment Module",
			"status": "Now live!",
			"description": "Cubecart module for integration of BitcoinZ payments",
			"links": {
               	            "link1": ["GitHub", "https://github.com/JordanGreenies/btcz.in_cubecart"],
               	            "link2": ["CubeCart Module", "https://www.cubecart.com/extensions/payment-gateways/bitcoinz"],
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"category": "BitcoinZ Forums",
			"status": "Launched",
			"description": "25,774 BTCZ paid for active months",
			"links": {
               	            "link1": ["Visit Forums", "https://forum.btcz.rocks/"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"category": "WooCommerce",
			"status": "Now live!",
			"description": "25,774 BTCZ paid for active months",
			"links": {
               	            "link1": ["GitHub", "https://github.com/JordanGreenies/btcz.in_woocommerce"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"category": "Personal Wallet URL",
			"status": "Now live!",
			"description": "Generate your wallet address URL! (ex. btcz.me/your_name_here)",
			"links": {
               	            "link1": ["Generate now", "https://btcz.me/"]
                           }
			},
			{
			"numb": "",
                        "isnew": "true",
                        "highlight": "", // danger = red; success = green;
			"category": "Magento Payment Module",
			"status": "Now live!",
			"description": "Integrate BitcoinZ payments in Magento",
			"links": {
               	            "link1": ["GitHub", "https://github.com/kovacbb/Magento-BitcoinZ-BTCZ-Payment-Module"]
                           }
			},
			{
			"numb": "",
                        "isnew": "true",
                        "highlight": "", // danger = red; success = green;
			"category": "TxtZ - SMS Send/Receive BitcoinZ ",
			"status": "Demo Completed / Release pending",
			"description": "Send receive BitcoinZ using Text message only!",
			"links": {
               	            "link1": ["Watch Demo", "https://www.youtube.com/watch?v=aeGX36c24i0"],
               	            "link2": ["GitHub", "https://github.com/bitcoinz-wallets/TxtZ"]
                           }
			},

                   ]
              },
	"Wallets": {
		"title": "Wallets",
		"headings": {
			"numb": "#",
			"name": "Name",
			"status": "Status",
			"description": "Description",
                        "link": "Links"
		},
                "footer_buttons": {
			"active": "false",
			"buttons": {
				"button1": ["Wanna help? Join Slack", "https://slack.btcz.rocks/"]
                               }
                 },
		"info": [
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "Swing Wallet UI",
			"status": "Completed",
			"description": "Windows core wallet created",
			"links": {
               	            "link1": ["GitHub", "https://github.com/btcz/bitcoinz-wallet/releases"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "Swing Wallet UI",
			"status": "Completed",
			"description": "Windows core wallet updated with seeders; addresses 0 connection issue",
			"links": {
               	            "link1": ["GitHub", "https://github.com/btcz/bitcoinz-wallet/releases"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "CoPay Wallet system ",
			"status": "Completed",
			"description": "Rotation and load balancing of mobile wallet services is causing minor stability issues; pushing the boundaries of decentralization",
			"links": {
               	            "link1": ["N/A", ""]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "name": "Core node wallet", // danger = red; success = green;
			"status": "Completed",
			"description": "Integration of updated zcash core will be merged with bitcoinz core node wallet system; updated zkSNARKs handling; merged zcash 1.0.13",
			"links": {
               	            "link1": ["Release Notes", "https://z.cash/blog/new-release-1-0-13.html"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "Windows Gui Wallet",
			"status": "Cancelled",
			"description": "Community member was writing a windows wallet with custom GUI.",
			"links": {
               	            "link1": ["See example", "https://imgur.com/Ph8GX2J"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "Android, iOS, macOS, Linux, Windows CoPay Wallet (MyBitcoinZ)",
			"status": "Android, macOS, Linux completed",
			"description": "CoPay wallet system is undergoing revision; update of links may be required; redistribution may be required ",
			"links": {
               	            "link1": ["N/A", ""]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "Copay wallet system",
			"status": "Completed",
			"description": "Removing Bitcoin Cash (BCH) support to lighten the code base; please move your coins out",
			"links": {
               	            "link1": ["N/A", ""]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "Coinomi wallet",
			"status": "Completed",
			"description": "Coinomi wallet for Android and iOS",
			"links": {
               	            "link1": ["Get Wallet Now!", "https://coinomi.com/"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "Paper wallet",
			"status": "Completed",
			"description": "Print wallets to paper; Nice paper design available",
			"links": {
               	            "link1": ["Create wallet", "https://paper.btcz.rocks/"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "Paper wallet",
			"status": "Completed",
			"description": "Alignment fix for Firefox / Chrome now live!",
			"links": {
               	            "link1": ["Get Wallet Now!", "https://coinomi.com/"]
                           }
			},
			{
			"numb": "",
                        "isnew": "false",
                        "highlight": "", // danger = red; success = green;
			"name": "Swing Wallet UI",
			"status": "Completed",
			"description": "Updated explorer in wallet GUI to explorer.btcz.rocks",
			"links": {
               	            "link1": ["GitHub", "https://github.com/btcz/bitcoinz-wallet/releases"]
                           }
			}
                  ]
            }
};

module.exports = settings;
