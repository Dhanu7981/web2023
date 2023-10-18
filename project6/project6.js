var mysong = document.getElementById("mysong");
var icon = document.getElementById("icon");

icon.onclick = function(){
    if(mysong.paused){
        mysong.play();
        icon.src ="C:/Users/duggi/OneDrive/Desktop/project6/pause.png";
    }else{
        mysong.pause();
        icon.src = "C:/Users/duggi/OneDrive/Desktop/project6/play.png";
    }

    }
