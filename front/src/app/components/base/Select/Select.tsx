import * as React from 'react';

interface Props {
  options: number[];
  label?: string;
  initial: number;
  onSelect: (value: number) => void;
}

const Select = ({ options, label, onSelect, initial }: Props) => {
  const [selectValue, setValue] = React.useState(initial);
  const onNativeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    setValue(+value);
    onSelect(+value);
  };

  return (
    <div className="peakwork-select">
      <span>{label}: </span>
      <select onChange={onNativeSelect} value={selectValue}>
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export { Select };
