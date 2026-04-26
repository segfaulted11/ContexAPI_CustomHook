import React from 'react';

const FormAction = () => {

    //2nd way of getting data -> 

    const handleFormAction = (formData) => {
        console.log(formData.get('userName'));//returns the value (entered value) of the 'userName' input field.
        console.log(formData.get('userEmail'));//returns the value (entered value) of the 'userEmail' input field.
        
        //use form action and formData in the action handler function's parameter, then formData.get('name of the input field')
    }

    return (
        <div>
            <form action={handleFormAction}>
                <input type="text" name="userName" placeholder="enetr your name" />
                <br />
                <input type="email" name="userEmail" placeholder="enter your email" />
                <br />
            <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default FormAction;