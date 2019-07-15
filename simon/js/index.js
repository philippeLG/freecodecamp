//*********************************************************************
//* FreecodeCamp challenge
//* Simon Game
//* plegoff
//*********************************************************************


//**************************
//* Variables
//**************************

var audio = {
	0: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"), 
	1: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"), 
	2: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"), 
	3: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"),
  4: new Audio("http://www.universal-soundbank.com/sounds/745.mp3")
};

var color = {
  0: "lightgreen",
  1: "red",
  2: "yellow",
  3: "deepskyblue"
};

var id = 0;
var currentSerie = [];
var playerSerie = [];
var counter = 0;
var strict = false;
var isOn = false;

//******************************
//* Controles / interaction 
//******************************
$(document).ready(function() { 
  
  // ON/OFF
  $('.slot').click(function(){
    $('.switch').toggleClass('switch-on');
    if (isOn) { 
      powerOff(); 
    }
    else {
      powerOn();
    }
  });
  
  // start  
  $(".start").click(function() {
    if (isOn) {
      $(".start").css("border", "blue 3px solid");
      start();
    }
  });
  
  // strict mode 
  $(".strict").click(function() {
    if (isOn) {
      if (!strict) { 
        $(".strict").css("border", "blue 3px solid"); 
        strict = true; }
      else {
        $(".strict").css("border", "#333 3px solid");
        strict = false;
      }
    }
    });

  // player move
  $(".push").click(function() {
    if (isOn) {
      humanPlay($(this).attr("id"));
    }
  });
    
  
  //*************************************
  //* Functions 
  //*************************************
	//
  //--> powerOn 
	//
  function powerOn() {
    isOn = true;
    id = 0;
    currentSerie = [];
    playerSerie = [];
    counter = 0;
    strict = false;
    $('.count').text('--');
  }

	//
  //--> powerOff
	// 
  function powerOff() {
    isOn = false;
    currentSerie = [];
    playerSerie = [];
    counter = "";
    strict = false;
    $('.count').text("");
    $(".strict").css("border", "#333 3px solid");
    $(".start").css("border", "#333 3px solid");
  }

	//
  //--> Start
	// 
  function start() {
    currentSerie = [];
    playerSerie = [];
    id = 0;
    counter = 0;
    $('.count').text(counter);
    computerPlay("next");
  }

	//
  //--> Push buttons 0 1 2 3 4
	// 
  function push(id) {
    $('#'+id).css("background-color", color[id]); // light button 
		audio[id].play(); // play sound 
    setTimeout(function(){ 
      $('#'+id).css({'background-color':''});
      },1000);        // reset color after 1s
  }

	//
  //-->  Human turn
	//  
  function humanPlay(id) {
    playerSerie.push(parseInt(id));  // add push id to human serie 
    push(id);
    
    // compare human and computer series 
    for (var i=0;i<playerSerie.length;i++) {
      if (currentSerie[i] != playerSerie[i]) {
        if (strict) {       // strict mode => reset
          audio[4].play();  // error sound
          powerOn();
        }
        else {
          playerSerie = [];
          audio[4].play();  // error sound
          computerPlay();   // play current sequence
        }
        return;
      }
     }
     
    // next computer move if no error
    if (currentSerie.length == playerSerie.length) {
      if (counter < 20) {
        computerPlay("next");
      }
      else { 
        $('.count').text('!!');
        alert('You Win !!!!');
        powerOn();
      }
    }
  }

	//
	//--> Timer
	// 
	function timer(ms){
		return new Promise(r=>setTimeout(r,ms));
	}
	
	//
  //--> computer Turn
	// 
  async function computerPlay(next) { // async for await use 
    await timer(1000);
    // play the serie
    for (var i=0;i<currentSerie.length;i++) {
      await timer(1000);
      push(currentSerie[i]);
    }    
    // add one sound
    await timer(1000);
    if (next == "next") {
      counter +=1;
      $('.count').text(counter);
      id = Math.floor(Math.random() * 4);
      currentSerie.push(id);
      push(id);
    }
    // reset player serie
    playerSerie = [];
    
  }   
  
// fin  
});