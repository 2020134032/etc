var song = document.querySelector("#song");

var songTitle = "이니의 길(bravo my life)"

song.addEventListener("click", ()=>
    {document.querySelector(".song p").innerHTML = songTitle;})