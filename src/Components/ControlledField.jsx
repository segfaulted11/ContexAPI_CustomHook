import { useState } from "react";

//for one only

const ControlledField = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //password state
  const [password, setPassword] = useState("");

  //error state
  const [error, setError] = useState("");

  const handlePasswordOnChange = (e) => {
    const value = e.target.value; //what is being typed into the password input field

    console.log(value); //returns each character that user is typing.
    setPassword(value); //setting the value for the 'password' variable based on what user is typing real time.

    if (value.includes(" ")) {
      setError("Password cant contain space");
    } else if (value.length < 6) {
      setError("Password must contain 6 characters");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="" placeholder="email" required />
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
    </div>
  );
};

export default ControlledField;