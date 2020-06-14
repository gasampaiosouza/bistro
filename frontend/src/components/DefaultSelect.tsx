import React from 'react';
import './default.scss';

import Select, { Theme } from 'react-select';

type SelectProps = {
  options: { value: string; label: string }[];
  width?: string;
  callback: any;
  placeholder?: string;
};

const DefaultSelect = ({
  options,
  width,
  callback,
  placeholder,
}: SelectProps) => {
  const customStyles = {
    // change colors
    option: (provided: object) => ({
      ...provided,
      color: '#474960',
    }),
  };

  function customTheme(theme: Theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        // items hover color
        primary25: 'rgba(255, 159, 28, 0.25)',
        // select outline color
        primary: 'rgba(255, 159, 28, 0.5)',
      },
    };
  }

  return (
    <div className="select--container" style={{ width: width || '420px' }}>
      <Select
        className="select"
        onChange={callback || ''}
        options={options}
        placeholder={placeholder || 'Select...'}
        theme={customTheme}
        styles={customStyles}
      />
    </div>
  );
};
export default DefaultSelect;
