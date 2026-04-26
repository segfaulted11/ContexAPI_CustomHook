import React, { useRef } from 'react';

//call the useRef hook in a variable -> use that variable name in an element as the value to the 'ref' attribute -> variable.current.value to get the input value
//its called uncontrolled bcz its not giving you data real time (like the 3rd way), rather, it gives the data once the sumbit button is clicked.

const UncontrolledField = () => {
    
    //useRef hook for email ->
    const emailRef = useRef('');
    //useRef hook for email ->
    const passRef = useRef('');

    const handleSubmit = (e) =>{
        e.preventDefault();

        // console.log(emailRef);//it returns an object 
        // console.log(emailRef.current);//it returns the input field
        // console.log(emailRef.current.value);//it returns the value typed on that field

        const emailValue = emailRef.current.value;
        console.log(emailValue)
        const passValue = passRef.current.value;
        console.log(passValue)

    }

    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input type="email" name="" ref={emailRef} />
                <br />
                <input type="password" ref={passRef} name=""/>
                <br />
                <input type="submit" value="sumbit" />
             </form>
        </div>
    );
};

export default UncontrolledField;