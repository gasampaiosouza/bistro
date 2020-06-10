import React from 'react';
import './default.css';

import Select from 'react-select';
import { Theme } from '../../../node_modules/@types/react-select';

type SelectProps = {
  options: object[];
  width?: string;
  callback: any;
  placeholder?: string;
};

const DefaultSelect = (props: SelectProps) => {
  // options!, width, callback!, placeholder

  const options = props.options;

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
    <div className="selectContainer" style={{ width: props.width || '420px' }}>
      <Select
        className="select"
        onChange={props.callback || ''}
        options={options}
        placeholder={props.placeholder || 'Select...'}
        theme={customTheme}
        styles={customStyles}
      />
    </div>
  );
};
export default DefaultSelect;
