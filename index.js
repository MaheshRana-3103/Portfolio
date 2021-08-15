// Dark Mode
$( ".change" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
        $( "body" ).removeClass( "dark" );
        $(".home__img img").attr("src","mahesh1-01.png");
    } else {
        $( "body" ).addClass( "dark" );
        $(".home__img img").attr("src","mahesh2-01.png");
    }
});
// Menu Show
const showmenu=(toogleId,navId)=>{
    const toggle=document.getElementById(toogleId),
    nav=document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}
showmenu('nav__toggle','nav__menu')
// Active and remove Menu
const navlink=document.querySelectorAll('.nav__link')
function linkAction(){
    navlink.forEach(n=>n.classList.remove('active'))
    this.classList.add('active')
    //remove menu 
    const navMenu=document.getElementById('nav__menu')
    navMenu.classList.remove('show')
}
navlink.forEach(n=>n.addEventListener('click',linkAction))
//buttons
$(".button1").click(function(){                
    location.href="https://maheshrana-3103.github.io/Resume/";             
});
$(".button2").click(function(){                
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
   }, 1000);               
});

// Scroll Reveal animation
const sr=ScrollReveal({
    origin:'top',
    distance:'80px',
    duration:2000,
    reset:true
}
);

// Home-Reveal
sr.reveal('.home__title',{})
sr.reveal('.button',{delay:200})
sr.reveal('.home__img',{delay:400})
sr.reveal('home__social-icon',{interval:200})
// scroll about 
sr.reveal('.about__img',{})
sr.reveal('.about__subtitle',{delay:200})
sr.reveal('.about__text',{delay:400})
sr.reveal('about__basic_head',{dealy:600})
sr.reveal('about__basic',{dealy:600})

// scroll skills
sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__data',{interval:200})
sr.reveal('.skills__text',{delay:200})
sr.reveal('.skills__img',{delay:400})
// project
sr.reveal('.work__img',{interval:200})
// social
sr.reveal('.contact__input',{interval:200})
// contact validation
$(function(){
  $("form[name='Register']").validate({
      rules:{
        name:"required",
        email:{
            required:true,
            email:true  
        },
        msg:{
            required:true,
        }
      },
      messages: {
        name: "Please enter your name",
        msg: {
          required: "Please input your msg",
        },
        email: "Please enter a valid email address"
      },
    submitHandler:function(form){
        form.submit();
    }
  });
});
