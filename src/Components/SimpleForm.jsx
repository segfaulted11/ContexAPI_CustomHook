import React from 'react';

const SimpleForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();//to prevent browser's default behaviors(like refreshing the page when the sumbit button is clicked) when the form is sumbitted.
        console.log("Form submitted!");

        //one way of getting the date once the form is submitted ->
       // to get the value -> e.target.name of the input field.value

        console.log(e.target);//returns the the whole form element
        console.log(e.target.naaame);//returns the element(input field) that has 'naaame' value for attribute 'name'.
        console.log(e.target.naaame.value);//returns what was typed(entered) in that input field.

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='naaame'/>
                <br />
                <input type="submit" name='name' value="sumbit" />
            </form>
        </div>
    );
};

export default SimpleForm;