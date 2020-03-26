import React from 'react';
import InputMask from "react-input-mask";

import './form-input-date.styles.scss';

const FormInputDate = ({ handleChange, label, mask, size, ...otherProps }) => (
  <div className={`${size} group `}>
    <InputMask mask={mask} className={`form-input-date`} onChange={handleChange} {...otherProps} />
    
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-date-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);
export default FormInputDate;