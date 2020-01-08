import * as React from 'react';
import { WrappedFieldProps } from 'redux-form';

import './input.scss';

interface Props {
  type: string;
}

const Input = ({
  type,
  input,
  meta: { touched, invalid, error },
}: Props & WrappedFieldProps) => (
  <>
    <input type={type} {...input} className="peakwork-input" />
    {error && <span className="peakwork-input-error">{error}</span>}
  </>
);

export { Input };
