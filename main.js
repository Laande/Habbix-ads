let ads = [
    document.getElementsByClassName('roomenterad-habblet-container'),
    document.getElementsByClassName('adsbygoogle'),
    document.getElementsByClassName('adsbygoogle adsbygoogle-noablate'),
    document.getElementsByClassName('google-auto-placed')
]

for (let i = 0; i < ads.length; i++) {
    while (ads[i].length > 0) {
        ads[i][0].remove();
    }
}