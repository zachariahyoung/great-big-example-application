'use strict';

import hooks from './hooks'
import CrisisModel from './crisis-model'
import { getModel, getService } from '../../../config/util'
const entity = 'crisis';

export default function () {
  const app = this;
  const service = getService(app);

  const options = {
    Model: getModel(app, entity, CrisisModel),
    paginate: {
      default: 5,
      max: 25
    },
    lean: true
  };

  app.use(`/api/${entity}`, service(options));
  const entityService = app.service(`/api/${entity}`);
  entityService.before(hooks.before);
  entityService.after(hooks.after);
};
