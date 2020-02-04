var cheerio = require("cheerio");
var axios = require("axios");

console.log("\n***********************************\n" +
            "Grabbing every thread name and link\n" +
            "from screenrant" +
            "\n***********************************\n");

axios.get("https://screenrant.com/tv-news/").then(function(response) {

  var $ = cheerio.load(response.data);

  $("article h3").each(function(i, element) {

    var result = {};

    result.title = $(this)
    .children("a")
    .text();
    result.link = $(this)
    .children("a")
    .attr("href");

    console.log(result);

  });
});
