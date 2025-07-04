export default class ExtensionComponent extends HTMLElement {
  static selector = 'extension-component';

  static get selector() {
    return this.selector;
  }

  extension = {
    src: './assets/images/icons/logo-grid-guides.svg',
    title: 'GridGuides',
    description:
      'Overlay customizable grids and alignment guides on any webpage.',
    isActive: false
  };

  set extension(extension) {
    this.extension = extension;
  }

  get extension() {
    return this.extension;
  }

  render() {
    const { src, title, description } = this.extension;

    this.innerHTML = `
              <article class="extension">
                <header class="extension__header">
                    <div class="extension__image">
                        <svg-loader-component src="${src}"></svg-loader-component>
                    </div>
                    <div class="extension__info">
                        <h3 class="extension__title">${title}</h3>
                        <p class="extension__description">${description}</p>
                    </div>
                </header>
                <footer class="extension__footer">
                    <button class="extension__button extension__button--remove">Remove</button>
                    <button class="extension__button extension__button--toggle">Toggle</button>
                </footer>
            </article>
    `;
  }

  constructor() {
    super();

    this.render();
  }
}
