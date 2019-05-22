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
