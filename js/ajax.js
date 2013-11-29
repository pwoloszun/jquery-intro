/*
* When user clicks on el with id="load-json", it should
* send ajax request on server for file:
* "json/test.json", then generate html using fetched data and embed it in
* element with id="json-results"
* */
function ajaxLoad() {
}

/*
 * When user clicks on el with id="load-html", it should
 * send ajax request on server for file:
 * "json/test.html", and embed received html in
 * element with id="html-results"
 * */
function htmlLoad() {
}

$(document).on("ready", function() {
  //example ajax call
  var dataToBeSent = {
    name: "Bob",
    age: 12
  };
  var request = $.ajax({
    type: "POST", // default: "GET"
    dataType: "json", // other: "html", "xml", "jsonp"
    url: "/some/resource/on/server",
    data: dataToBeSent
  });
  request.then(function(data) {
    log("Succesfully finished", data);
  });
  request.error(function(error) {
    log("Error occured", error);
    throw error;
  });
});
