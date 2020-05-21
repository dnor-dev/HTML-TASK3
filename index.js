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


// document.querySelector('#contact-form').addEventListener('submit', function(e){
//     var fname = document.querySelector('#firstName').value;
//     var lname = document.querySelector('#lastName').value;
//     var email = document.querySelector('#Email').value;
//     var message = document.querySelector('#Message').value;
//     var web = document.querySelector('#web').value;

//     if (!fname || !lname || !email || !message){
//         e.preventDefault();
//         alertify.error('Please fill in required entries')
//     }else{
//         $.ajax({
//             url:"https://formspree.io/anorue4rss@hotmail.com",
//             method:"POST",
//             data: $(this).serialize(),
//             dataType:"json"
//         });
//         e.preventDefault();
//         $(this).get(0).reset();
//         alertify.success('Message Sent!');
//     }
// });