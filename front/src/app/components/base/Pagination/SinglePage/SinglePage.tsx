import * as React from 'react';

interface Props {
  value: number;
  isCurrent: boolean;
  onClick: (value: number) => void;
}

const Page = (props: Props) => {
  const hangleClick = React.useCallback(() => {
    if (!props.isCurrent) {
      props.onClick(props.value);
    }
  }, [props.value, props.isCurrent]);

  return (
    <div
      className={props.isCurrent ? 'page page-active' : 'page'}
      onClick={hangleClick}
    >
      {props.value}
    </div>
  );
};

export { Page };
