var header = document.getElementById("header");
var toggleMenuImg = document.querySelector(".toggle-menu img");
var container = document.querySelector(".close-toggle");
var hero = document.querySelector(".hero");


// Remove ID From URL
window.onload = ()=>{
    let ref = location.href
    if(ref.match("#")){
        let idx = ref.indexOf("#")
        let mainUrl = ref.substr(0, idx)
        location.href = mainUrl
    }

    var btn = Array.from(document.querySelectorAll(".gallery-category-switch p"));
    btn[0].classList.add("gal-active")

    
    var social = Array.from(document.querySelectorAll(".social-media"));
    var ecommerce = Array.from(document.querySelectorAll(".ecommerce"));
    var portfolio = Array.from(document.querySelectorAll(".portfolio"));

    social.forEach(e =>{
        e.style.display = "block"
    })

    ecommerce.forEach(e =>{
        e.style.display = "block"
    })

    portfolio.forEach(e =>{
        e.style.display = "block"
    })

}


// Toggle Menu
function toggleMenu(){

    if(header.style.width != '300px'){
        header.style.width = '300px'
        toggleMenuImg.setAttribute("src", "assets/icons/close.png")

    }else if(header.style.width == '300px'){
        header.style.width = '0';
        toggleMenuImg.setAttribute("src", "assets/icons/navicon_white.png")
    }

}

container.onclick = ()=>{

    // Close Side Nav Header
    if(header.style.width == '300px'){
        header.style.width = '0';
        toggleMenuImg.setAttribute("src", "assets/icons/navicon_white.png")
    }

}


// hero.onclick = ()=>{

//     // Close Side Nav Header
//     if(header.style.width == '300px'){
//         header.style.width = '0';
//         toggleMenuImg.setAttribute("src", "assets/icons/navicon_white.png")
//     }

// }



// Active Classes
{
var allDiv = Array.from(document.querySelectorAll(".header-menu-list div"));
var allSpan = Array.from(document.querySelectorAll(".header-menu-list div span"));
var allP = Array.from(document.querySelectorAll(".header-menu-list div p"));

allDiv[0].onclick = ()=>{

    allP.forEach(e => {
        e.classList.remove("active_text")
    })

    allSpan.forEach(e => {
        e.classList.remove("active_icon")
    })

    allP[0].classList.add("active_text")
    allSpan[0].classList.add("active_icon")
}

allDiv[1].onclick = ()=>{

    allP.forEach(e => {
        e.classList.remove("active_text")
    })

    allSpan.forEach(e => {
        e.classList.remove("active_icon")
    })

    allP[1].classList.add("active_text")
    allSpan[1].classList.add("active_icon")
    
}

allDiv[2].onclick = ()=>{

    allP.forEach(e => {
        e.classList.remove("active_text")
    })

    allSpan.forEach(e => {
        e.classList.remove("active_icon")
    })

    allP[2].classList.add("active_text")
    allSpan[2].classList.add("active_icon")
    
}

allDiv[3].onclick = ()=>{

    allP.forEach(e => {
        e.classList.remove("active_text")
    })

    allSpan.forEach(e => {
        e.classList.remove("active_icon")
    })

    allP[3].classList.add("active_text")
    allSpan[3].classList.add("active_icon")
    
}

allDiv[4].onclick = ()=>{

    allP.forEach(e => {
        e.classList.remove("active_text")
    })

    allSpan.forEach(e => {
        e.classList.remove("active_icon")
    })

    allP[4].classList.add("active_text")
    allSpan[4].classList.add("active_icon")
    
}

allDiv[5].onclick = ()=>{

    allP.forEach(e => {
        e.classList.remove("active_text")
    })

    allSpan.forEach(e => {
        e.classList.remove("active_icon")
    })

    allP[5].classList.add("active_text")
    allSpan[5].classList.add("active_icon")
    
}

}


// Back to Top
function toTop(){

    window.scrollTo(0, 0)

}


// Gallery Category

let gallery_img = Array.from(document.querySelectorAll(".gallery-image"));
var btn = Array.from(document.querySelectorAll(".gallery-category-switch p"));

let socials = Array.from(document.querySelectorAll(".social-media"));
var ecommerce = Array.from(document.querySelectorAll(".ecommerce"));
var portfolio = Array.from(document.querySelectorAll(".portfolio"));



btn[0].onclick = ()=>{

    btn.forEach(e => {
        e.classList.remove("gal-active")
    })

    btn[0].classList.add("gal-active")

    
    socials.forEach(element =>{
        element.style.display = "block"
    })
    

    ecommerce.forEach(element =>{
        element.style.display = "block"
    })
    

    portfolio.forEach(element =>{
        element.style.display = "block"
    })
    

}

btn[1].onclick = ()=>{

    btn.forEach(e => {
        e.classList.remove("gal-active")
    })

    btn[1].classList.add("gal-active")

    socials.forEach(element =>{
        element.style.display = "block"
    })
    

    ecommerce.forEach(element =>{
        element.style.display = "none"
    })
    

    portfolio.forEach(element =>{
        element.style.display = "none"
    })
    

    
}

btn[2].onclick = ()=>{

    btn.forEach(e => {
        e.classList.remove("gal-active")
    })

    btn[2].classList.add("gal-active")

    
    socials.forEach(element =>{
        element.style.display = "none"
    })
    

    ecommerce.forEach(element =>{
        element.style.display = "block"
    })
    

    portfolio.forEach(element =>{
        element.style.display = "none"
    })
    
}

btn[3].onclick = ()=>{

    btn.forEach(e => {
        e.classList.remove("gal-active")
    })

    btn[3].classList.add("gal-active")

    
    socials.forEach(element =>{
        element.style.display = "none"
    })
    

    ecommerce.forEach(element =>{
        element.style.display = "none"
    })
    

    portfolio.forEach(element =>{
        element.style.display = "block"
    })
    
}


// Arrow Back to Top

let backToTop = document.querySelector(".scroll-to-top");



setInterval(() => {

    if(window.scrollY > 100){
        backToTop.style.display ="block";
    }else{
        backToTop.style.display ="none";
    }

}, 500);


backToTop.onclick = ()=>{
    window.scrollTo(0, 0)
}