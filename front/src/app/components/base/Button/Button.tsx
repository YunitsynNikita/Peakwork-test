import * as React from 'react';

import './button.scss';

interface Props {
  children: React.ReactNode;
  type: 'submit' | 'button' | 'reset';
  className?: string;
}

const Button = ({ children, type, className }: Props) => (
  <button type={type} className={className}>
    {children}
  </button>
);

export { Button };
