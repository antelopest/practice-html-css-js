export default class SvgLoaderComponent extends HTMLElement {
  static selector = 'svg-loader-component';

  constructor() {
    super();

    const src = this.getAttribute('src');

    fetch(src)
      .then((res) => res.text())
      .then((svg) => (this.innerHTML = svg));
  }
}
