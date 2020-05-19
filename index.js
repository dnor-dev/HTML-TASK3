var myButton = document.getElementById("mybtn");

window.onscroll = function(){
    scrollFunction();
}

function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        myButton.style.display = "block";
    }else{
        myButton.style.display = "none";
    }
}


function topFunction(){
    $("html , body").animate({scrollTop:"0"},900);
}


let bioData = $('#Name').position().top;

function biodata(){
    $("html , body").animate({scrollTop:bioData},700);
}



let conTact = $('#foot').position().top;

function contact(){
    $("html , body").animate({scrollTop:conTact},900)
}

ScrollReveal().reveal('.about-me', {
    delay:200,
    duration:700,
    reset:true
});
ScrollReveal().reveal('.innerbox' , {
    delay:200,
    duration:700,
    reset:true
});