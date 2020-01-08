import { FormErrors } from 'redux-form';

import { SearchParams } from '@app/types/airports';
import { FIELDS_VALIDATION } from '@app/constants/validation.constants';
import { FIELDS_ERRORS } from '@app/constants/errors.constants';

export const validate = (
  values: Partial<SearchParams>,
): FormErrors<SearchParams, string> => {
  const errors: Partial<{ [key: string]: string }> = {};

  if (
    values.country &&
    !values.country.trim() &&
    !FIELDS_VALIDATION.ONLY_LETTERS_REGEX.test(values.country.trim())
  ) {
    errors.country = FIELDS_ERRORS.ONLY_LETTERS;
  }

  return errors;
};
