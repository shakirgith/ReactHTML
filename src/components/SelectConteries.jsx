import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'


function CountrySelector() {
  const [value, setValue] = useState('Countery Select')
  const options = useMemo(() => countryList().getData(), [])
  
  const changeHandler = value => {
    setValue(value)
  }
 
    return (
        <>
        <Select options={options} value={value} onChange={changeHandler} />
        
        {/* <p>The country code is: {value.value}</p>
        <p>The country name is: {value.label}</p>  */}
        </>
    )
}

export default CountrySelector
