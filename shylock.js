$(document).ready(function(){

var $log = $('#log');
var $logItem = $('<li>');
var $prompt = $('#prompt');

var $shylockBotPurse = 10000;
var $antonioPurse = 0;


//ACT 1

var logResponse = function(event){
  if (event.keyCode === 13) {
    if ($prompt.val() === 'purse'){ 
      $log.append($logItem.text($prompt.val()).addClass('command'));

      var $actionItem = $('<li>').addClass('action');
      $actionItem.text('ShylockBot pulls out his purse containing ' + $shylockBotPurse + ' ducats');
      $log.append($actionItem);
    
//ACT 2

    } else if ($prompt.val()[0] === 'l' && $prompt.val()[3] === 'n') {
      var loanArray = $prompt.val().split(' ');
        if (loanArray[1] === 'antonio') {
          $log.append($logItem.text($prompt.val()).addClass('command'));
        
          var $actionItem = $('<li>').addClass('action');
          $actionItem.text('ShylockBot gives ' + loanArray[1] + ' ' + loanArray[2] + ' ducats.');
          $log.append($actionItem);


          $shylockBotPurse = $shylockBotPurse - parseInt(loanArray[2]);
          console.log('ShylockBot\'s current purse is: ' + $shylockBotPurse + ' ducats');
          $antonioPurse = $antonioPurse + parseInt(loanArray[2]);  
          console.log('Antonio\'s current purse is: ' + $antonioPurse + ' ducats');
      }


    }

}
}

$prompt.on('keypress', logResponse);


})











