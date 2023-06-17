function addButton(){
    var button=document.createElement("button");
    button.innerHTML="Explain";
    button.addEventListener("click", function() {
        var path=window.location.pathname;
        var newHost="explainxkcd.com";
        var modifiedUrl=window.location.protocol+"//"+newHost+path;
        window.location.href=modifiedUrl;
    });
    button.classList.add("comicNav");
    var comicNav=document.querySelector(".comicNav");
    if(comicNav){
        comicNav.appendChild(button);
    }
    else{
        console.log("comicnav not found");
    }
}
window.addEventListener("load", addButton);