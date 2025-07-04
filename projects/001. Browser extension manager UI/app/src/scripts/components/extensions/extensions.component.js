import { container } from '../../container/container.js';

export default class ExtensionsComponent extends HTMLElement {
  static selector = 'extensions-list-component';
  static classes = ['extensions'];

  async connectedCallback() {
    await this.extensionsService.initCompleted;

    this.render();
  }

  render() {
    const extensions = this.extensionsService.getAll();

    extensions.forEach((extension) => {
      const extensionElement = document.createElement('extension-component');
      extensionElement.extension = extension;
      this.appendChild(extensionElement);
    });
  }

  constructor() {
    super();

    this.extensionsService = container.get('ExtensionsService');

    this.classList.add([ExtensionsComponent.classes]);
  }
}
