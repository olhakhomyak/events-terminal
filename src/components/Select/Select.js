import React from 'react';

const Select = ({label, name, options}) => {
  console.log(options, 'options')
  const optionsList = ['all'].concat(options).map((option, index) => {
    return(
      <option key={index}>{option}</option>
    )
  })
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select name={name}>
          {optionsList}
      </select>
    </div>
  );
}

export default Select;