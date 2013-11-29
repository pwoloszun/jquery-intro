function renderCelebrity(celebrityId) {
  var url = "json/celebrities/" + celebrityId + ".json";
  var $mainCont = $(".main-cont");
  $.ajax({
    url: url,
    dataType: "json"
  }).success(function(data) {
    $mainCont.html(data.name);
  }).error(function(error) {
    log(error)
  });
}

function renderCategory(categoryName) {
  var url = "json/categories/" + categoryName + ".json";
  var $mainCont = $(".main-cont");
  var request = $.ajax({
    url: url,
    dataType: "json"
  });
  request.success(function(data) {
    var html = $('<a>');
    html.text("qq");
    html.on("click", function(event) {
      event.preventDefault();
      renderCelebrity(data[0].id);
    });
    html.on("mouseover", function(event) {
      event.preventDefault();
      log("qq")
    });
    $mainCont.html(html);
  });
  request.error(function(error) {
    console.log("Error", arguments);
  });
}

$(document).on("ready", function() {
  $("#categories a").on("click", function(event) {
    event.preventDefault();
    var categoryName = $(this).attr("href").substr(1);
    renderCategory(categoryName);


  });

  $(".progressbar").on("mouseover", function() {
    $(this).find(".progress").animate({width: "50%"});
  }).on("mouseout", function() {
    $(this).find(".progress").stop().css({width: 0});
  });
});
