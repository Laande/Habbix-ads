const init = function(){
  let ad_in_game = document.getElementsByClassName('roomenterad-habblet-container');
  let ad_cms = document.getElementsByClassName('adsbygoogle');
  let ad_bottom = document.getElementsByClassName('adsbygoogle adsbygoogle-noablate');
  let ad_new = document.getElementsByClassName('google-auto-placed');
  
  if(ad_in_game.length > 0 || ad_cms.length > 0 || ad_bottom.length > 0 || ad_new.length > 0){
    console.log('[-] Ads removed');
  }

  if(ad_in_game.length > 0){
    while (ad_in_game.length > 0) ad_in_game[0].remove();
  }
  if(ad_cms.length > 0){
    while (ad_cms.length > 0) ad_cms[0].remove();
  }
  if(ad_bottom.length > 0){
    while (ad_bottom.length > 0) ad_bottom[0].remove();
  }
  if(ad_new.length > 0){
    while (ad_new.length > 0) ad_new[0].remove();
  }
}

init();
