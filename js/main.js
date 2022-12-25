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