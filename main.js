const init = function(){
  let ad_in_game = document.getElementsByClassName('roomenterad-habblet-container');
  let ad_cms = document.getElementsByClassName('adsbygoogle');

  if(ad_in_game){
    while (ad_in_game.length > 0) ad_in_game[0].remove();
  }
  if(ad_cms){
    while (ad_cms.length > 0) ad_cms[0].remove();
  }

  if(ad_in_game || ad_cms){
    console.log('[-] Ads removed');
  }
}

init();
