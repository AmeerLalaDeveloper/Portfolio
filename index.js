var header=document.querySelector('header');
var span=document.querySelector('.logo-span')
window.onscroll=function () {

    var top=window.scrollY;
    if(top>=200){
        
    header.classList.add('active');
    span.style.color="#fff";

    }    
    else{

        header.classList.remove('active');
        span.style.color="rgb(167, 79, 93)";

    }
}