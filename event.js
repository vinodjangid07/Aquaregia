let arrow2=document.getElementById("arrow");
let arrow=document.getElementById("rulesHeaderTitle")
let rulesContent=document.getElementById("rulesContent");
let active=false;
arrow2.addEventListener("click", function(){
    if (active==false){
        rulesAppear();
        active=true;}
    else{
        rulesDisappear();
        active=false;}
});

arrow.addEventListener("click", function(){
    if (active==false){
        rulesAppear();
        active=true;}
    else{
        rulesDisappear();
        active=false;}
});


function rulesAppear(e){
    arrow2.style.transform='rotate(180deg)';
    arrow2.style.translate='12px';
    // rulesContent.style.height='fit-content';
    rulesContent.style.transform = 'scaleY(1)';
    rulesContent.style.transformOrigin = "top";
    rulesContent.style.opacity = '1';
    rulesContent.scrollIntoView();
    arrow2.style.transitionDuration = '.5s';
    rulesContent.style.transitionDuration = '.5s';
        
}

function rulesDisappear(e){
    arrow2.style.transform='rotate(-0deg)';
    arrow2.style.translate='0px';
    rulesContent.style.opacity = '0';
    // rulesContent.style.height='0px';
    rulesContent.style.transform = 'scaleY(0)';

}