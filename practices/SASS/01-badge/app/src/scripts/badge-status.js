const orderStatus = {
  NEW: {
    label: 'New',
    classes: 'new'
  },
  PROCESSING: {
    label: 'Processing',
    classes: 'processing'
  },
  SHIPPED: {
    label: 'Shipped',
    classes: 'shipped'
  },
  DELIVERED: {
    label: 'Delivered',
    classes: 'delivered'
  },
  CANCELLED: {
    label: 'Cancelled',
    classes: 'cancelled'
  },
  RETURNED: {
    label: 'Returned',
    classes: 'returned'
  },
  COMPLETED: {
    label: 'Completed',
    classes: 'completed'
  },
  UNKNOWN: {
    label: 'Unknown',
    classes: 'unknown'
  }
};

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
