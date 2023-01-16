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
    rulesContent.style.height='auto';
    rulesContent.scrollIntoView();

        
}

function rulesDisappear(e){
    arrow2.style.transform='rotate(-0deg)';
    arrow2.style.translate='0px';
    rulesContent.style.height='0px';

}