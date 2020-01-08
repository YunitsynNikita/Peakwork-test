import * as React from 'react';
import { Field, InjectedFormProps } from 'redux-form';

import './search.scss';
import { Input } from '@app/components/base/Input/Input';
import { FormField } from '@app/components/base/FormField/FormField';
import { FormLayout } from '@app/components/base/Form/Form';
import { submit } from '@app/redux/actions/airports/airports';
import { Button } from '@app/components/base/Button/Button';

const Search = (props: InjectedFormProps) => (
  <FormLayout
    handleSubmit={props.handleSubmit(submit)}
    className="search-form mb--12"
  >
    <FormField label="Country">
      <Field name="country" type="text" component={Input} />
    </FormField>

    <FormField label="Airport name">
      <Field name="name" type="text" component={Input} />
    </FormField>

    <FormField label="IATA">
      <Field name="iata" type="text" component={Input} />
    </FormField>

    <Button type="submit" className="button-add">
      Search
    </Button>
  </FormLayout>
);

export { Search };
