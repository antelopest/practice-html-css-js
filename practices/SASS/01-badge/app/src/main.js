import './styles/main.scss';
import './scripts/badge-status.js';

import { orderStatus } from './scripts/order-status.js';

document.addEventListener('DOMContentLoaded', () => {
  const dynamicElement = document.getElementById('dynamic');

  const interval = () => {
    const statuses = Object.values(orderStatus);

    let currentStep = 0;
    let lastStep = 6;

    const getInnerHTML = (status) => {
      const { label, classes } = status;

      return `<span class="badge ${classes}">${label}</span>`;
    };

    dynamicElement.innerHTML = getInnerHTML(statuses[currentStep]);

    return () => {
      currentStep = currentStep === lastStep ? 0 : ++currentStep;

      dynamicElement.innerHTML = getInnerHTML(statuses[currentStep]);
    };
  };

  setInterval(interval(), 3000);
});
