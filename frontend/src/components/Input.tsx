import React from 'react';
import './default.scss';

type InputProps = {
  width?: string;
  placeholder: string;
  value?: string;
  type?: string;
  pattern?: string;
};

const Input = ({ width, placeholder, value, type, pattern }: InputProps) => {
  return (
    <div className="input--container" style={{ width: width || '420px' }}>
      <input
        pattern={pattern}
        type={type || 'text'}
        required
        autoComplete="off"
        spellCheck="false"
        className="input"
        placeholder={placeholder}
        defaultValue={value || ''}
      />
      <span className="span--after"></span>
    </div>
  );
};

export default Input;
