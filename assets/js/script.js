let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlides})`;
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

function goPrev() {
  currentSlide--;
  if (currentSlide < 0){
    currentSlide = totalSlides - 1;
  }
  updateMargin();
};

function goNext() {
  currentSlide++;
  if (currentSlide > (totalSlides-1)){
    currentSlide = 0;
  }
  updateMargin();
};

function updateMargin() {
  let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
  let newMargin = (currentSlide * sliderItemWidth);
  document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
};

setInterval(goNext, 5000);

/*

#######################
### menu responsivo ###
#######################

*/

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();