import { container } from '../container/container.js';

import ExtensionsService from './extensions/extensions.service.js';

container.register(ExtensionsService.nameService, ExtensionsService, true);
