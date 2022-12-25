const elBtnOpen = document.querySelector(".site-header-burger-btn");
const elBtnClose= document.querySelector(".site-header-burger-btn-mob");
const elNav= document.querySelector(".sitenav");
const elBtnDark = document.querySelector(".sitenav__rigister-dark-btn");
const elOverlay = document.querySelector(".overlay");


elBtnOpen.addEventListener("click" , () =>{
    elNav.classList.add("site-header__sitenav--active")
    elOverlay.classList.add("overlay--active");
})
elBtnClose.addEventListener("click" , () =>{
    elNav.classList.remove("site-header__sitenav--active")
    elOverlay.classList.remove("overlay--active");
})

elBtnDark.addEventListener("click" , () =>{
    document.body.classList.toggle("dark");
    elBtnDark.classList.toggle("sitenav__rigister-dark-btn--active")
})
