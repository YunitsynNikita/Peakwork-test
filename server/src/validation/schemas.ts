import Joi from '@hapi/joi';

import { ONLY_LETTERS } from '../constants/validation.constants';

export const validSchemas = {
  airportSearchParamSchema: Joi.object().keys({
    country: Joi.string().pattern(ONLY_LETTERS),
    name: Joi.string().alphanum(),
    iata: Joi.string().alphanum(),
    page: Joi.string().alphanum(),
    dataPerPage: Joi.string().alphanum(),
  }),
};
