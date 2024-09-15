var buttons = document.getElementsByClassName("btn-menu");
 console.log(buttons);
for(var i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        var Class = this.dataset.toggle;
        var divs = document.getElementsByClassName("menu-page");
        for(i=0; i<divs.length; i++){
            divs[i].classList.remove("show");
        }
        document.getElementById(Class).classList.add("show");
    });
}