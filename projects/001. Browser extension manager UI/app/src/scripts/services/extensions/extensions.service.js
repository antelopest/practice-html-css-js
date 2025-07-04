import { API_CONFIG } from '../../config/config.js';

export default class ExtensionsService {
  static nameService = 'ExtensionsService';
  static url = API_CONFIG.extensionsUrl;

  extensions = [];

  initCompleted;

  getAll() {
    return this.extensions;
  }

  getOneById(id) {
    const extension = this.extensions.find((extension) => extension.id === id);

    if (extension === undefined) {
      throw new Error('Extension not found');
    }

    return extension;
  }

  updateOneById(extension) {
    const index = this.extensions.indexOf((e) => e === extension.id);

    if (index !== -1) {
      throw new Error('Extension not found');
    }

    this.extensions[index] = extension;

    return extension;
  }

  async init() {
    const res = await fetch(ExtensionsService.url);
    this.extensions = await res.json();
  }

  constructor() {
    this.initCompleted = this.init();
  }
}
