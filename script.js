const swiper = new Swiper(".testimonial-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  grabCursor:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets:true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  }
}
});

function openMenu() {
    document.getElementById("mobileNav").style.display = "block";
    document.getElementById("overlay").classList.add("active");
}

function closeMenu() {
    document.getElementById("mobileNav").style.display = "none";
    document.getElementById("overlay").classList.remove("active");
}


document.querySelectorAll('.faq-question').forEach(item => {
      item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        const icon = item.querySelector('.plus-icon');
        
       
        answer.classList.toggle('open');
        
        
        icon.classList.toggle('rotate');
      });
    });