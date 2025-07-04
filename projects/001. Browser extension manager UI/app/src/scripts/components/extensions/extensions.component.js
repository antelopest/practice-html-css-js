import { getService } from '../../services/services.js';

export default class ExtensionsComponent extends HTMLElement {
  static selector = 'extensions-list-component';

  static get selector() {
    return this.selector;
  }

  render() {
    this.innerHTML = `<div>LIST</div`;
  }

  constructor() {
    extensionsService = getService('ExtensionsService');

    super();

    this.render();
  }
}
