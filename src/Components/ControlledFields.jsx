import { useState } from "react";

//for multiple fields, you need to create a state (as well as the error state) and an event handling function for each field. creating state and handling function for each field every time could make the code unnecessarily lengthy. you can get rid of this hassle and optimize your code by using your own custom hook!

const ControlledFields = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //password state(i)
  const [password, setPassword] = useState("");

  //error state for password(ii)
  const [error, setError] = useState("");

  //event handling function(iii)
  const handlePasswordOnChange = (e) => {
    const value = e.target.value;//getting the input value,1

    console.log(value);
    setPassword(value);//setting the value to the variable,2

    //using condition for the error state,3
    if (value.includes(" ")) {
      setError("Password cant contain space");
    } else if (value.length < 6) {
      setError("Password must contain 6 characters");
    } else {
      setError("");
    }
  };

  //email state
  const [email, setEmail] = useState("");

  //error state for email
  const [error2, setError2] = useState("");

   //event handling function
  const handleEmailOnChange = (e) => {
    const value = e.target.value;
    console.log(e.target.value);
    setEmail(value);

    if (!email.includes("@")) {
      setError2("email must include '@' ");
    } else {
      setError2("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          required
          defaultValue={email}
          onChange={handleEmailOnChange}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          defaultValue={password}
          onChange={handlePasswordOnChange}
        />
        <br />
        <input type="submit" value="submit" />
      </form>

      <p style={{ color: "red" }}>{error}</p>{/* showing the output for the error state on the UI, 4 */}
      <p style={{ color: "red" }}>{error2}</p>
    </div>
  );
};

export default ControlledFields;