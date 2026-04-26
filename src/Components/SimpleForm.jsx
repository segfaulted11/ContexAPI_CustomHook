import React from 'react';

const SimpleForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();//to prevent browser's default behavior when the form is sumbitted.
        console.log("Form submitted!")

        //one way of getting the date once the form is submitted ->
        // to get the value -> e.target.name of the input field.value
        console.log(e.target)//outputs the the whole form 
        console.log(e.target.name)//outputs the input tag
        console.log(e.target.name.value)//outputs the value u typed in the input (text) field.

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name1'/>
                <br />
                <input type="submit" value="sumbit" />
            </form>
        </div>
    );
};

export default SimpleForm;