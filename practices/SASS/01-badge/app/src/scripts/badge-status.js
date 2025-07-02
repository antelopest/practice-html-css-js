import { orderStatus } from './order-status.js';

class BadgeStatus extends HTMLElement {
  constructor() {
    super();

    const status = this.getAttribute('status');

    this.innerHTML = this.getTemplate(status);
  }

  getTemplate(status) {
    const { label, classes } = orderStatus[status] || orderStatus.UNKNOWN;

    return `<span class="badge ${classes}">${label}</span>`;
  }
}

customElements.define('badge-status', BadgeStatus);
