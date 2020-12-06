import React from 'react';
import './custom-form-input.styles.scss';

const CustomFormInput = ({ handleChange, inputLabel, ...otherInputProps }) => {
  return (
    <div className='input-group'>
      <input
        className='form-input'
        onChange={handleChange}
        {...otherInputProps}
      />
      {inputLabel ? (
        <label
          className={`${
            otherInputProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {inputLabel}
        </label>
      ) : null}
    </div>
  );
};

export default CustomFormInput;
