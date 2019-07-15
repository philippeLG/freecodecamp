/* Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities. */

function convertHTML(str) {

  var htmlEntities = {
     '&' : '&amp;',
     '<' : '&lt;',
     '>' : '&gt;',
     '"' : '&quot;',
     "'" : '&apos;'
   };
  
  for(var char in htmlEntities) {
      var before = char;
      var after= htmlEntities[char]; 
      var re = new RegExp(before,"ig");
      str = str.replace(re,after);    
   }
  return str;
}

//convertHTML("Dolce & Gabbana");
convertHTML("Shindler's List");
