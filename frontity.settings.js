const settings = {
  "name": "frontity-example",
  "state": {
    "frontity": {
      "url": "https://test.frontity.io",
      "title": "WordPress Theme Unittest",
      "description": "Frontity example site using WordPress Theme Unittest posts"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Edge Case Category",
              "/category/edge-case-2/"
            ],
            [
              "Content Tags",
              "/tag/content-2/"
            ],
            [
              "About",
              "/about/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://test.frontity.io/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
