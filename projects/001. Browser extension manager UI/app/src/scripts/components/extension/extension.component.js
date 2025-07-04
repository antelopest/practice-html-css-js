export default class ExtensionComponent extends HTMLElement {
  static selector = 'extension';

  static get selector() {
    return this.selector;
  }

  constructor() {
    super();

    const src = './assets/images/icons/logo-dev.svg';
    const title = 'DevLens';
    const description =
      'Quickly inspect page layouts and visualize element boundaries.';

    this.innerText = `
              <article class="extension">
                <header class="extension__header">
                    <div class="extension__image">
                        <svg-loader src="${src}"></svg-loader>
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
}
