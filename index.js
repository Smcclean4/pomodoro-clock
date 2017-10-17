$(document).ready(function() {
	var breakCount = parseInt($(".breakDisplay").html());
	var sessionCount = parseInt($(".sessionDisplay").html());
	var seconds = 0;
	var minutes = 0;
	var audio = new Audio('http://soundbible.com/grab.php?id=1377&type=mp3');
	var pause = false;
	var counting;
	
		function beep() {
  		audio.play();
		}
	
		function startTimer() {
    
    if(minutes === 0 && seconds === 1){
      beep();
      }
   
   if(minutes === 0 && seconds === 0){
      if($('.session').text() === 'Session'){
        $('.session').text('Break');
        minutes = breakCount;
        $('#session-time').html(minutes + ":0" + seconds);
      }
      
      else if($('.session').text() === 'Break'){
        $('.session').text('Session');
        minutes = sessionCount;
        $('#session-time').html(minutes + ":0" + seconds);
      }
   }
   else{
      if(seconds === 0){seconds = 60; minutes--}
      seconds--;
      if(seconds < 10){$('#session-time').html(minutes + ":0" + seconds);}
      else{
      $('#session-time').html(minutes + ":" + seconds);
      }
   }
}
	
	$("#clock").click(function(){
    
   if(pause === false){
     counting = setInterval(startTimer, 1000);
     pause = true;
   }
   else if(pause === true){
     clearInterval(counting);
     pause = false;
   }
	
});
	
$('.break-minus-plus1').click(function(){
    if(pause === false){
    if(breakCount > 1){breakCount--; $(".breakDisplay").html(breakCount); $('.session').text('Session'); $("#session-time").html(sessionCount + ":00");
       
       seconds = 0;
       minutes = sessionCount;}
    }
  });
  $('.break-minus-plus2').click(function(){
    if(pause === false){
    breakCount++; $(".breakDisplay").html(breakCount);
    $('.session').text('Session');
    $(".session-time").html(sessionCount + ":00");
    
       seconds = 0;
       minutes = countTime;
    }
  });
   $('.session-minus-plus1').click(function(){
     if(pause === false){
    if(sessionCount > 1){sessionCount--; $(".sessionDisplay").html(sessionCount); $("#session-time").html(sessionCount + ":00");        $('.session').text('Session');
}
       
       seconds = 0;
       minutes = countTime;
     }
  });
  $('.session-minus-plus2').click(function(){
    if(pause === false){
    sessionCount++; $(".sessionDisplay").html(sessionCount);
      $("#session-time").html(sessionCount + ":00");
      $('.session').text('Session');

      
      seconds = 0;
      minutes = countTime;
    }
  });
	
});