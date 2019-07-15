// function round(val); TODO : roud to the screen size

// factioriel
function factorialize(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}


$(document).ready(function() {
  var entry = '';
  var operation = '';
  var memory = '';
  
  
  $('button').click(function() {
    entry = $(this).attr("value");
    //console.log('entry: ' + entry);
    
    // test entry
    switch (entry) {
      // clear
      case 'c':
        $('#answer').html('0');
        operation = '';
        break;
        
      // backspace
      case 'b':
        operation=operation.slice(0, -1);
        $('#answer').html(operation);
        //operation = '';
        break;
      
      // Equal
      case '=':
        //round(operation);
        $('#answer').html(eval(operation));
        //operation = '';
        break;
        
      // Memory 
      case 'm':
        memory = operation;
        break;
      
      // Memory recall  
      case 'mr':
        operation = memory;
        $('#answer').html(operation);
        break;
        
      // Square root
      case 'r':
        operation = Math.sqrt(eval(operation));
        $('#answer').html(operation);
        break;
      
      // Square
      case 's':
        operation = eval(operation);
        operation = operation * operation;
        $('#answer').html(eval(operation));
        break;
        
      // Factorial  
      case '!':
        operation = factorialize(operation);
        $('#answer').html(operation);
        break;
        
      // PI  
      case 'pi':
        operation = Math.PI;
        $('#answer').html(operation);
        break;
                          
      // default : build operation
      default:
        operation = operation.concat(entry);
        $('#answer').html(operation);
        
    }
  });
  
});