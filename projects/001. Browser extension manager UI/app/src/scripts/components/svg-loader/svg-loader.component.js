export default class SvgLoaderComponent extends HTMLElement {
  static selector = 'svg-loader';

  static get selector() {
    return this.selector;
  }

  constructor() {
    super();

    const src = this.getAttribute('src');

    fetch(src)
      .then((res) => res.text())
      .then((svg) => (this.innerHTML = svg));
  }
}
