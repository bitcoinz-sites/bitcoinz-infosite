/**
* The Settings Module reads the settings out of settings.json and provides
* this information to the other modules
*/

var fs = require("fs");
var jsonminify = require("jsonminify");


//The app title, visible e.g. in the browser window
exports.title = "Your Title Here";

//The url it will be accessed from
exports.address = "donations.example.com";

// logo
exports.logo = "/images/logo.png";

//The app favicon fully specified url, visible e.g. in the browser window
exports.favicon = "favicon.png";

//Theme
exports.theme = "Cerulean";

//The Port page should listen on
exports.port = process.env.PORT || 3000;

exports.exchanges = {
        "cryptopia": {
           "donate_coin": {
               "coin": "BTCZ", "coinaddress": "t1fHHnAXxoPWGY77sG5Zw2sFfGUTpW6BcSZ"},
               "coin": "BTC", "coinaddress": "1BzBfikDBGyWXGnPPk58nVVBppzfcGGXMx"},
               "coin": "ETH", "coinaddress": "0x4E3154bc8691BC480D0F317E866C064cC2c9455D"},
               "coin": "ZEC", "coinaddress": "t1ef9cxzpToGJcaSMXbTGRUDyrp76GfDLJG"}
                } 
              },
        

        "coinexchange.io": {"name": "poolname", "poolurl": "http://pool.url.com"},
        "pool3": {"name": "poolname", "poolurl": "http://pool.url.com"},
        "pool4": {"name": "poolname", "poolurl": "http://pool.url.com"},
        "pool5": {"name": "poolname", "poolurl": "http://pool.url.com"},
        "pool6": {"name": "poolname", "poolurl": "https://pool.url.com"},
        "pool7": {"name": "poolname", "poolurl": "https://pool.url.com"}
},

