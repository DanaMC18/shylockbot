$(document).ready(function(){

var $log = $('#log');
var $prompt = $('#prompt');

var $logItem = $('<li>');


var $shylockBotPurse = 10000;
var $antonioPurse = 0;
var $bassanioPurse = 0;



//ACT 3 
var printLedger = function(){
  var $actionItem = $('<li>').addClass('action');
  $actionItem.text('ShylockBot pulls out his ledger');
  $log.append($actionItem);

  var $responseItem = $('<li>').addClass('response');
  $responseItem.text('Antonio owes me ' + $antonioPurse + ' ducats.');
  $log.append($responseItem);
  
  var $responseItem2 = $('<li>').addClass('response');
  $responseItem2.text('Bassanio owes me ' + $bassanioPurse + ' ducats.')
  $log.append($responseItem2);

  console.log('Antonio\'s current purse is: ' + $antonioPurse + ' ducats');
  console.log('Bassanio\'s current purse is: ' + $bassanioPurse + ' ducats');  
  console.log('ShylockBot\'s current purse is: ' + $shylockBotPurse + ' ducats');
  }



//ACT 2
var loanResponse = function(){
  if ($prompt.val()[0] === 'l' && $prompt.val()[3] === 'n') {
    var loanArray = $prompt.val().split(' ');
    
    if (loanArray[1] === 'antonio') {
        $log.append($logItem.text($prompt.val()).addClass('command'));
      
        var $actionItem = $('<li>').addClass('action');
        $actionItem.text('ShylockBot gives ' + loanArray[1] + ' ' + loanArray[2] + ' ducats.');
        $log.append($actionItem);
        
        $antonioPurse = $antonioPurse + parseInt(loanArray[2]);  
        console.log('Antonio\'s current purse is: ' + $antonioPurse + ' ducats');

    } else if (loanArray[1] === 'bassanio') {
        $log.append($logItem.text($prompt.val()).addClass('command'));
      
        var $actionItem = $('<li>').addClass('action');
        $actionItem.text('ShylockBot gives ' + loanArray[1] + ' ' + loanArray[2] + ' ducats.');
        $log.append($actionItem);
        
        $bassanioPurse = $bassanioPurse + parseInt(loanArray[2]);
        console.log('Bassanio\'s current purse is: ' + $bassanioPurse + ' ducats');          
    }
    
    $shylockBotPurse = $shylockBotPurse - parseInt(loanArray[2]);
    console.log('ShylockBot\'s current purse is: ' + $shylockBotPurse + ' ducats');
  }
}


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
      loanResponse(); //invoke ACT 2 function from above
    
 //ACT 3   
    } else if ($prompt.val() === 'ledger') {
      $log.append($logItem.text($prompt.val()).addClass('command'));
      printLedger(); //invoke ACT 3 function from above
    }
    $prompt.val('');
  }
}

$prompt.on('keypress', logResponse);


})











