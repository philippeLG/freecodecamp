var api = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";
var callback = "&callback=JSON_CALLBACK";
var baseUrl = "http://en.wikipedia.org/?curid=";

// cf https://forum.freecodecamp.org/t/build-a-wikipedia-viewer-coding-help/114480

$(document).ready(function() {
    $("#getMessage").on("click", function(){
      var title = document.getElementById("search").value;
      getWikipedia(title); 
    });
  });


function getWikipedia(title) {
    var urlWiki = api + title + callback;
    $.ajax({
      url: urlWiki,
      dataType: "jsonp",
      success: function(data) {
        console.log(data);
        for (var pageId in data.query.pages) {
          if (data.query.pages.hasOwnProperty(pageId)) {
              item = data.query.pages[pageId];
            $('#display-result').append("<a href='" + baseUrl + pageId + "' target= '_blank'><div id='result' class='results'><h2>" + item.title + "</h2><p = class='extract'>" + item.extract + "</p></div>");
             }
          }
        },
      error: function (request,textStatus,errorThrown) {
        alert(textStatus + ' ' + errorThrown);
      }
    });
}