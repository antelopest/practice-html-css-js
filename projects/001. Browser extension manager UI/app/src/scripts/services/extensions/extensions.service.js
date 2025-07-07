import { API_CONFIG, DICTIONARIES } from '../../config/config.js';
import { container } from '../../container/container.js';

export default class ExtensionsService {
  static nameService = 'ExtensionsService';
  static extensionsUrl = API_CONFIG.extensionsUrl;
  static filterExtensionsUrl = API_CONFIG.filterExtensionsUrl

  extensions = [];

  dictionaries = [];

  filter = { active:  };

  initCompleted;

  getAll() {
    return this.extensions;
  }

  getAllByFilter() {
    return this.extensions.filter((e) => {
      const { active } = this.filter;

      const hasActive = (active) => {
        const dictFilterActive = this.dictionariesService.getDictionaryByName(
          DICTIONARIES.DictionaryFilterActive
        );

        const filterActive = dictFilterActive.find((e) => e.code === active);

        console.log(dictFilterActive);
        console.log(filterActive);

        // if (dictFilterActive. === active) {
        //   return true;
        // }
        //
        // if (dictFilterActive.code === active) {
        //
        // }
        //
        // if (active === 'all') {
        //   return true;
        // }

        // return
      };

      return true;
      //
      // if (active === 'all') {
      //   return true;
      // }
      //
      // return e.active === active;
    });
  }

  getFilter() {
    return this.filter;
  }

  setFilter(filter) {
    this.filter = filter;
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
    this.dictionariesService = container.get('DictionariesService');

    const initExtensions = async () => {
      const res = await fetch(ExtensionsService.extensionsUrl);
      this.extensions = await res.json();
    }

    const initDictionaries = async () => {
      await this.dictionariesService.initCompleted;
      this.dictionaries[DICTIONARIES.DictionaryFilterActive] = this.dictionariesService.getDictionaryByName(DICTIONARIES.DictionaryFilterActive);
    }

    const initFilter = async () => {
      const res = await fetch(ExtensionsService.filterExtensionsUrl);
      this.filter = await res.json();
    }

    await initExtensions();
    await initDictionaries();
    await initFilter();
  }

  constructor() {
    this.initCompleted = this.init();
  }
}
