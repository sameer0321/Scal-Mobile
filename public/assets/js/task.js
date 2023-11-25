let mobileView = document.querySelector(".mobileView");
let menu = document.querySelector(".menu");
let body = document.querySelector("body");
let navlinks = document.querySelector("ul");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");

menu.addEventListener("click", function () {
    mobileView.classList.toggle("show");
    body.classList.toggle("overflow-hidden");
    span1.classList.toggle("rotate1");
    span2.classList.toggle("rotate2");
    span3.classList.toggle("rotate3");
})
navlinks.addEventListener("click", function () {
    navlinks.classList.toggle("show");
    body.classList.remove("overflow-hidden");
    span1.classList.toggle("rotate1");
    span2.classList.toggle("rotate2");
    span3.classList.toggle("rotate3");
});

// document.querySelectorAll('.accordian-body input[type="checkbox"]').forEach(function (checkbox) {
//     checkbox.addEventListener('change', function () {
//         const item = checkbox.closest('.accordian-body');
//         const content = item.querySelector('.overflow-hidden');

//         // Close all accordion items except the clicked one
//         document.querySelectorAll('.accordian-body input[type="checkbox"]').forEach(function (otherCheckbox) {
//             if (otherCheckbox !== checkbox) {
//                 otherCheckbox.checked = false;
//                 otherCheckbox.closest('.accordian-body').querySelector('.overflow-hidden').style.maxHeight = '0';
//             }
//         });

//         // Toggle the clicked accordion item
//         content.style.maxHeight = this.checked ? content.scrollHeight + 'px' : '0';
//     });
// });

// backToTop
let topButton = document.getElementById("top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        topButton.style.display = "flex";
    }
    else {
        topButton.style.display = "none";
    }
});

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
// preloader
const preloader = document.getElementById("preloader");
setTimeout(() => {
    document.getElementById("preloder").classList.add("hidden");
    document.body.classList.remove("overflow-hidden")
}, 2000);
