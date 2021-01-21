import React, {useState, useEffect} from 'react'

const FormInput = ({handleChange, label, ...otherProps}) =>{
    // console.log('other props', otherProps)
    return(
        <div>
            {/* Form Input */}
            {label? label: null}
            <input
                className='form-input'
                onChange={handleChange}
                {...otherProps}
            >
            </input>
        </div>
    )

}

export default FormInput