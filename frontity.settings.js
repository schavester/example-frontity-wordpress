const settings = {
  "name": "frontity-20-20-theme",
  "state": {
    "frontity": {
      "url": "",
      "title": "Test On Bunker Hill",
      "description": "WordPress installation for testing On Bunker Hill"
    }
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Authors",
              "/authors/"
            ],
            [
              "OUR OTHER TIME TRAVEL BLOGS",
              "/timetravelblogs/"
            ],
            [
              "SAVE ANGELS FLIGHT",
              "/saveangelsflight/"
            ],
            [
              "Contact Us",
              "/contact/"
            ]
          ],
          colors: {
        primary: "#E6324B",
        headerBg: "#ffffff",
        footerBg: "#ffffff",
        bodyBg: "#f5efe0"
      },
      showSearchInHeader: true,
      showAllContentOnArchive: false,
      featuredMedia: {
        showOnArchive: true,
        showOnPost: true
      },
        autoPreFetch: "hover",
      fontSets: "us-ascii",
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://bunkerhill.hiddenhistoryblogs.com//wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
