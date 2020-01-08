import { reduxForm } from 'redux-form';

import { SEARCH_FORM_ID } from '@app/constants/Search/search.constants';
import { Search } from '@app/components/Search/Search';
import { validate } from './validation/validation';

export const SearchForm = reduxForm<{}, {}>({
  form: SEARCH_FORM_ID,
  validate,
  destroyOnUnmount: true,
})(Search);
