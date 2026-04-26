import React, { useState } from "react";

const ControlledField = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [password, setPassword] = useState("");
  const handlePasswordOnChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="email" name="" placeholder="email" required />
        <br />
        <input
          type="password"
          name=""
          placeholder="password"
          onChange={handlePasswordOnChange}
          defaultValue={password}
          required
        />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default ControlledField;