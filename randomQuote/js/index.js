$(document).ready(function() {

    $("#new-quote").on("click", function() {
      
      var currentAuthor = '';
        
      $.ajax({
        headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
        Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
        },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
        success: function(r) {
          if (typeof r === 'string') {
            r = JSON.parse(r); 
            }
          $('#text').text(r.quote);
          $('#author').html(r.author);
        }
      });
    });
});