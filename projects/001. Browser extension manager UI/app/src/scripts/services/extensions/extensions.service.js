export default class ExtensionsService {
  static nameService = 'ExtensionsService';

  static get nameService() {
    return this.nameService;
  }

  extensions = [];

  constructor() {
    fetch('/assets/data/extensions.json').then((res) =>
      res.json().then((json) => {
        this.extensions = json;
      })
    );
  }
}
