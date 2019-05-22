/* eslint-disable no-plusplus */
class Plan {
  constructor(planElement) {
    this.planElement = planElement;
    this.title = planElement.querySelector('.plan-title');
    this.content = planElement.querySelector('.plan-content');
    this.button = planElement.querySelector('.plans-signup');
    this.planElement.addEventListener('mouseover', this.highlightPlan.bind(this));
    this.planElement.addEventListener('mouseout', this.resetPlan.bind(this));
  }

  highlightPlan() {
    const textColor = this.planElement.style.color;
    this.planElement.style.border = `0.2rem solid ${textColor}`;
    this.planElement.style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)';
  }

  resetPlan() {
    this.planElement.style.border = '0.2rem solid #1EC0B8';
    this.planElement.style.boxShadow = 'none';
  }
}

const plans = document.querySelectorAll('.price-plans');
plans.forEach(plan => new Plan(plan));

const plansArray = [...plans];
const container = document.querySelector('.plans-articles-container');

class Carousel {
  constructor(carouselElement) {
    this.carouselElement = carouselElement;
    this.plan = plansArray;
    this.currentIndex = 0;
    this.container = container;
    this.active();
    const swipeFn = new Hammer(container);
    swipeFn.set(new Hammer.Swipe({ threshold: 1 }));
    swipeFn.on('swipeleft', this.swipeLeft.bind(this));
    swipeFn.on('swiperight', this.swipeRight.bind(this));
  }

  active() {
    this.plan[this.currentIndex].classList.add('active');
  }

  resetActive() {
    this.plan.forEach(plan => plan.classList.remove('active'));
  }

  swipeLeft() {
    this.resetActive();
    if (this.currentIndex === 0) {
      this.plan[this.plan.length - 1].classList.add('active');
      this.currentIndex = this.plan.length - 1;
    } else {
      this.plan[--this.currentIndex].classList.add('active');
    }
  }

  swipeRight() {
    this.resetActive();
    if (this.currentIndex === this.plan.length - 1) {
      this.plan[0].classList.add('active');
      this.currentIndex = 0;
    } else {
      this.plan[++this.currentIndex].classList.add('active');
    }
  }
}

const carousels = document.querySelectorAll('.carousel');
carousels.forEach(carousel => new Carousel(carousel));
