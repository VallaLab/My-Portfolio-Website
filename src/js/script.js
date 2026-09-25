"use strict";
/*popup second brain*/
const openPopup = document.getElementById("openPopup");
const popUp=document.getElementById("popUp");
const returnBack=document.getElementById("returnBack");
const goSite=document.getElementById("goSite");
let destination;

openPopup.addEventListener("click",function(event){
    event.preventDefault();
    destination=openPopup.href;
    popUp.style.display="flex";

})
goSite.addEventListener("click",function(){
     window.open(destination, "_blank", "noopener,noreferrer")

});
returnBack.addEventListener("click",function(){
    popUp.style.display="none";
});