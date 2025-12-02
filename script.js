let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');
menu.onclick = () => {
    navbar.classList.toggle('active')
    menu.classList.toggle('move');
    bell.classList.remove('active');
}

// notification
let bell = document.querySelector('.notification');

document.querySelector('#bell-icon').onclick = () =>{
    bell.classList.toggle('active');
}

const scrollWrapper = document.querySelector('.scroll-wrapper');

let scrollSpeed = 1; // kecepatan scroll (pixel/frame)

function autoScroll() {
    if (!scrollWrapper) return;

    scrollWrapper.scrollLeft += scrollSpeed;

    // jika sudah scroll sampai akhir, kembali ke awal
    if (scrollWrapper.scrollLeft >= scrollWrapper.scrollWidth - scrollWrapper.clientWidth) {
        scrollWrapper.scrollLeft = 0;
    }

    requestAnimationFrame(autoScroll);
}

// mulai auto scroll
autoScroll();




// content
var acc = document.getElementsByClassName("action");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}