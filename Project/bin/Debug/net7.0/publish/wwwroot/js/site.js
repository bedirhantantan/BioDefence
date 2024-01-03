// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq");

    faqItems.forEach(function(item) {
        item.addEventListener("click", function() {
            if (item.classList.contains("active")) {
                item.classList.remove("active");
            } else {
                faqItems.forEach(function(faq) {
                    faq.classList.remove("active");
                });
                item.classList.add("active");
            }
        });
    });

    const sliderTrack = document.getElementById("sliderTrack");
    let position = 0;
    const slideWidth = 200; // Slider elemanlarının genişliği (px)
    
    function slideRight() {
        position -= slideWidth;
        updateSliderPosition();
    }
    
    function updateSliderPosition() {
        // Slider'ın sonuna gelindiğinde başa dön
        if (position - 600<= -(sliderTrack.children.length - 1) * slideWidth) {
            position = 0;
        }
        sliderTrack.style.transform = `translateX(${position}px)`;
    }
    
    // Otomatik kaydırma (5 saniyede bir)
    setInterval(slideRight, 2000);
    

});


