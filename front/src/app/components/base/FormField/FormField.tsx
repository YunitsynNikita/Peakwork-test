import * as React from 'react';
import * as cn from 'classnames';

import './formField.scss';

export interface FormsFieldProps {
  label?: string;
  className?: string;
  children: React.ReactNode;
}

const FormField = (props: FormsFieldProps) => (
  <div className={cn(props.className, 'formField')}>
    <span className="formLabel">{props.label}</span>
    {props.children}
  </div>
);

export { FormField };
