$(document).ready(function(){

var $log = $('#log');
var $prompt = $('#prompt');

var $shylockBot = {
  purse: 10000,
}



//ACT 1

var $printPurse = function(event){
  if (event.keyCode === 13) {
    var $logItem = $('<li>');
    $log.append($logItem.text($prompt.val()).addClass('command'))
    $prompt.text('');

    var $actionItem = $('<li>').addClass('action');
    $actionItem.text('ShylockBot pulls out his purse containing ' + $shylockBot.purse + ' ducats');
    $log.append($actionItem);
  }
}



$prompt.on('keypress', $printPurse);


})