import { useState } from "react";

//for multiple fields, you need to create a state (as well as the error state) and an event handling function for each field. creating state and handling function for each field every time could make the code unnecessarily lengthy. you can get rid of this hassle and optimize your code by using your own custom hook!

const ControlledFields = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //password state
  const [password, setPassword] = useState("");

  //error state for password
  const [error, setError] = useState("");

  const handlePasswordOnChange = (e) => {
    const value = e.target.value;

    console.log(value);
    setPassword(value);

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

      <p style={{ color: "red" }}>{error}</p>
      <p style={{ color: "red" }}>{error2}</p>
    </div>
  );
};

export default ControlledFields;