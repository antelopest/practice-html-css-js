import { container } from '../../container/container.js';
import { DICTIONARIES } from '../../config/config.js';

export default class FilterExtensionsComponent extends HTMLElement {
  static selector = 'filter-extensions-component';
  static classes = ['filter'];

  async connectedCallback() {
    await this.dictionariesService.initCompleted;

    this.render();
  }

  render() {
    const titleElement = document.createElement('h3');
    titleElement.classList.add('filter__title');
    titleElement.innerText = 'Extensions List';

    this.appendChild(titleElement);

    const actionsElement = document.createElement('div');
    actionsElement.classList.add('filter__actions');

    const dictionary = this.dictionariesService.getDictionaryByName(
      DICTIONARIES.DictionaryFilterActive
    );

    const filter = this.extensionsService.getFilter();

    dictionary.forEach((item) => {
      const { code, name } = item;

      const button = document.createElement('button');

      button.classList.add('filter__button');
      button.setAttribute('data-filter', code);

      if (code === filter.active) button.classList.add('active');

      button.innerText = name;

      button.addEventListener('click', (e) => {
        const code = e.target.dataset.filter;

        const filter = this.extensionsService.getFilter();
        filter.active = code;
        this.extensionsService.setFilter(filter);

        const buttons = document.getElementsByClassName('filter__button');
        Array.from(buttons).forEach((button) => {
          button.classList.remove('active');

          if (code === button.dataset.filter) button.classList.add('active');
        });
      });

      actionsElement.appendChild(button);
    });

    this.appendChild(actionsElement);
  }

  addClasses() {
    const classes = FilterExtensionsComponent.classes.join(' ');
    this.classList.add(classes);
  }

  constructor() {
    super();

    this.dictionariesService = container.get('DictionariesService');
    this.extensionsService = container.get('ExtensionsService');

    this.addClasses();
  }
}
