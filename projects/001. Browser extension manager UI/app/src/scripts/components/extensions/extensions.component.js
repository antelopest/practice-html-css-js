import { container } from '../../container/container.js';
import { list } from 'postcss';

export default class ExtensionsComponent extends HTMLElement {
  static selector = 'extensions-list-component';
  static classes = ['extensions'];

  async connectedCallback() {
    await this.extensionsService.initCompleted;

    this.render();
  }

  render() {
    const extensions = this.extensionsService.getAllByFilter();

    extensions.forEach((extension) => {
      const extensionElement = document.createElement('extension-component');
      extensionElement.extension = extension;
      this.appendChild(extensionElement);
    });
  }

  addClasses() {
    const classes = ExtensionsComponent.classes.join(' ');
    this.classList.add(classes);
  }

  constructor() {
    super();

    this.extensionsService = container.get('ExtensionsService');

    this.addClasses();
  }
}
