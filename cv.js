
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick= () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')


window.onscroll = () =>{
    sections.forEach(sec => {
        let top =window.scrollY;
        let offset = sec.offsetTop - 100 ;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >=offset && top <offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
            //active sections
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    })
    let header = document.querySelector('header')
    header.classList.toggle('sticky',window.scrollY>100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
var swiper = new Swiper(".testimonial-box", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    
});

const form = document.querySelector('form');
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "afafboucenna01@gmail.com",
        Password : "FE6512A80CF7388562262E12F4F15691BE86",
        To : 'afafboucenna01@gmail.com',
        From : "afafboucenna01@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit",(e)=> {
    e.preventDefault();
    sendEmail();
});

ScrollReveal({ 
    //reset: true, 
    distance: '80px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,  .education-row, .contact form, .skills-row, testimonial-wrapper', { origin: 'bottom' });
ScrollReveal().reveal('.home-content  h1 span, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content  .btn-box, .about-content', { origin: 'right' });
