const elCarsLinks = document.querySelectorAll(".cars__link");
const elCarsItems = document.querySelectorAll(".cars__item");
const elPanelItems = document.querySelectorAll(".cars__panel");

elCarsLinks.forEach(link => {
    link.addEventListener("click" , evt =>{
        evt.preventDefault();
        elCarsItems.forEach(item => {
            item.classList.remove("cars__item--active");
        });
        link.parentElement.classList.add("cars__item--active");
        elPanelItems.forEach(panel => {
            panel.classList.remove("cars__panel--active")
        });
        document.querySelector(link.getAttribute("href")).classList.add("cars__panel--active");
        
    }); 
})

$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
});


// Brand slick js

$('.brand__list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1
            }
        }
    ]
});

// Community slick js

$('.community__list').slick({
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    variableWidth: true,
    infinite: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1,
                
            }
        }
    ]
});

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

