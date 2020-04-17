import React from 'react';
import InputMask from "react-input-mask";

import './form-input.styles.scss';
import { Link } from 'react-router-dom';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export const FormInputMedium = ({ handleChange, label, isPassword, mask, _class, ...otherProps }) => (
  <div className={`  group-medium `} >
    <InputMask  mask={mask} className={`form-input`} onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
    {isPassword === true
      ? (<Link className="forgot-password">Esqueci a senha</Link>) 
      : ""
    }
  </div>
);

export const FormInputSmall = ({ handleChange, label, isPassword, mask, ...otherProps }) => (
  <div className={`group-small`} >
    <InputMask  mask={mask} className={`form-input`} onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
    {isPassword === true
      ? (<Link className="forgot-password">Esqueci a senha</Link>) 
      : ""
    }
  </div>
);

export default FormInput;