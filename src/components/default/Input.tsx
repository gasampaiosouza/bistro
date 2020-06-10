import React from 'react';
import './default.scss';

type InputProps = {
  width?: string;
  placeholder: string;
  value?: string;
  type?: string;
};

const Input = (props: InputProps) => {
  // width, placeholder!, value, type

  return (
    <div className="inputContainer" style={{ width: props.width || '420px' }}>
      <input
        type={props.type || 'text'}
        required
        autoComplete="off"
        spellCheck="false"
        className="input"
        placeholder={props.placeholder}
        defaultValue={props.value || ''}
      />
      <span className="after"></span>
    </div>
  );
};

export default Input;
