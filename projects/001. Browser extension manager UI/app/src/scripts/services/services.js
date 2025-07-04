import ExtensionsService from './extensions/extensions.service.js';

const Services = new Map();

Services.set(ExtensionsService.nameService, ExtensionsService);

const initServices = () => {
  const cash = new Map();

  return (nameService) => {
    if (services.has(nameService)) {
      return services.get(nameService);
    }

    const Service = Services.get(nameService);
    services.set(Service.nameService, new Service());

    return services.get(Service.nameService);
  };
};

const getService = initServices();

export { getService };
