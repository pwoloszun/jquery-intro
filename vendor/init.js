$(document).on("ready", function() {
  var templateScriptName = "_template.js";
  var $templateScript = $("script[src$='" + templateScriptName + "']");
  var $mainCont = $(".main-cont:first");
  if ($templateScript.length > 0) {
    alert("Please replace <script src='js/" + templateScriptName + "'> with <script src='js/<your-script>.js'>");
  } else if ($mainCont.children().length === 0){
    alert("Please insert some partials html content inside <div class='main-cont'>");
  }
});

function log() {
  console.log.apply(console, arguments);
}
