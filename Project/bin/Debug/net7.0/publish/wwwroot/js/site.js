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
});


