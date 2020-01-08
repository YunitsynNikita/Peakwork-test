import * as React from 'react';
import { Form, SubmitHandler } from 'redux-form';

interface Props {
  children: React.ReactNode;
  handleSubmit: SubmitHandler;
  className?: string;
}

const FormLayout = (props: Props) => (
  <Form onSubmit={props.handleSubmit}>
    <div className={props.className}>{props.children}</div>
  </Form>
);

export { FormLayout };
