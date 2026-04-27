import React from 'react';
import { useState } from 'react';

const useInputField = (defaultValue) => {

    const [fieldValue, setFieldValue] = useState(defaultValue);//1

    const handleFieldOnChange = (e) => {
        const value = e.target.value;
        setFieldValue(value);
    }//2
    
    return [fieldValue,handleFieldOnChange];
    
};

export default useInputField;