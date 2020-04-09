import React from 'react';
import InputMask from "react-input-mask";

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, mask, size, ...otherProps }) => (
  <div className={`${size} group `}>
    <InputMask mask={mask} className={`form-input-cartao  ${size}`} onChange={handleChange} {...otherProps} />
    
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink-cartao' : ''
        } form-input-label-cartao` }
      >
        {label}
      </label>
    ) : null}
  </div>
);
export default FormInput;