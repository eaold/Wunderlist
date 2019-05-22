class Feature {
  constructor(feature) {
    this.feature = feature;
    this.title = feature.querySelector('.title');
    this.featureContent = feature.querySelector('.feature-content');
    this.title.addEventListener('click', this.expandFeature.bind(this));
  }

  expandFeature() {
    if (this.featureContent.style.display === 'block') {
      this.featureContent.style.display = 'none';
    } else {
      this.featureContent.style.display = 'block';
    }
  }
}

const features = document.querySelectorAll('.feature');
features.forEach(feature => new Feature(feature));
