const mailIcon = document.getElementById('icon-mail');
const contactMe = document.getElementById('contact-me');
const contactMeAlert = document.getElementById('contact-me-alert');
const mwscBtn = document.getElementById('mwsc-btn');






// contactMe.addEventListener('mouseenter',chaneIcon)

// function chaneIcon(){
//     // contactMe.innerHTML = `<ion-icon name="mail-open-outline"></ion-icon>`
//     contactMe.innerHTML = `<p>Contact me</p>`
   
// }
// contactMe.addEventListener('mouseleave', defaultIcon)

// function defaultIcon(){
//     contactMe.innerHTML = `<ion-icon name="mail-outline"></ion-icon>`
    

// }
// contactMe.addEventListener('click',() => {
//     window.location.href = "mailto:muhammed.gazi999@gmail.com"
// })

const socialMedia = document.getElementById('social-media');

const githubA = document.getElementById('github-a')
const twitterA = document.getElementById('twitter-a')
const instagramA = document.getElementById('instagram-a')
window.addEventListener("DOMContentLoaded", notifi)

function notifi(){
    
        socialMedia.style.transform = "translate(-100%)"
        
    setTimeout(() => {
    socialMedia.style.transform = "translate(0)"
        
    }, 1500);

    setTimeout(() => {
        socialMedia.style.transform = "translate(-80%)"
        
    }, 3000);
    setTimeout(() => {
        githubA.style.transform="translate(-500px)"
        twitterA.style.transform="translate(-500px)"
        instagramA.style.transform="translate(-500px)"
    }, 3050);
    setTimeout(() => {
        contactMe.style.transform = "translateY(0)"
        
    }, 5000);
    setTimeout(() => {
        mwscBtn.style.transform = "translateY(0)"
    }, 1000);
}
socialMedia.addEventListener('mouseenter', social);

function social(){
    socialMedia.style.transform = "translate(0)"
    setTimeout(() => {
        githubA.style.transform="translate(0)"
        twitterA.style.transform="translate(0)"
        instagramA.style.transform="translate(0)"
    }, 1);
}

socialMedia.addEventListener('mouseleave', socialC)

function socialC(){
    socialMedia.style.transform = "translate(-80%)"
    setTimeout(() => {
        githubA.style.transform="translate(-500px)"
        twitterA.style.transform="translate(-500px)"
        instagramA.style.transform="translate(-500px)"
    }, 50);
}

const scrollBtn = document.getElementById('scroll-btn');

scrollBtn.addEventListener('click',() => {
    window.scroll(0, 700);
})


// const body = document.body;
// window.addEventListener('DOMContentLoaded', ()=>{
//     setTimeout(() => {
//         body.style.filter = "blur(0px)"
//     }, 1000);
// })


function zort(){
    if(window.scrollY > 600){
        contactMe.style.display = "none"
    }
}