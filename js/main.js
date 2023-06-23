const swiper = new Swiper('.swiper', {

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});


// Side Menu
document.getElementById("toggleMenuBtn").addEventListener("click", () => {
  let sideMenu = document.getElementById("sideMenu");
  sideMenu.style.right = 0;
});
window.addEventListener("mouseup", (e) => {
  let box = document.getElementById("sideMenu");
  if (e.target != box) {
    box.style.right = "-100%";
  }
});


// Header Search Btn
document.getElementById("header-search-btn").addEventListener("click", () => {
  document.getElementById("search-box").style.visibility = "visible";
  document.getElementById("search-form").style.bottom = "0";
});

window.addEventListener("mousedown", (e) => {
  let searchInput = document.getElementById("search-input");
  if (e.target != searchInput) {
    document.getElementById("search-box").style.visibility = "hidden";
    document.getElementById("search-form").style.bottom = "30%";
  }
});





//////////////////////////////////////////////////////

var lastScrollTop = 0 ;
let navbar = document.getElementById('header');
window.addEventListener('scroll',()=>{
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop ;
  if (scrollTop > lastScrollTop) {
    navbar.classList.remove('animated-header');
    
  } else {
    navbar.classList.add('animated-header');
    document.querySelector('.animated-header').style.top='0';
  }
  lastScrollTop = scrollTop ;
})