/*
* When a user clicks on one of category links then:
* 1) app should fetch (using ajax) json data for clicked category
* 2) then it should fetch html template: templates/celebrity.hbs
* 3) then it should compile fetched template using Handlebars.compile()
* 4) it should fulfil compiled tempalted with categories data
* 5) embed result html in element of id="celebrities"
* 6) for each celebrity attach events to el with class="progressbar":
* - when user hovers over progressbar it should animate css width attribute
*   of ".progress" el to 50%
* - when user move mouse out ".progress" el width should be changed to 0
* */
function initApp() {
}

$(document).on("ready", function() {
  initApp();
});
