var mySong = document.getElementById('mySong');
var icon = document.getElementById('icon');

icon.onclick = function() {
    if (mySong.paused){
        mySong.play();
        icon.src = 'Images/pause_button.png'
    }
    else {
        mySong.pause();
        icon.src = 'Images/play_button.png';
    }
}