import React from "react";
import useInputField from "./CustomHook/useInputField";

const HookForm = () => {
  const [name, nameOnChange] = useInputField("");//1
  const [email, emailOnChange] = useInputField("");//1
  const [password, passwordOnChange] = useInputField("");//1

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", name, email,password); {/*3 */}
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="enter your name"
        onChange={nameOnChange} 
        defaultValue={name} />{/* 2 */}
        <br />
        <input type="email" placeholder="enter your email"
        onChange={emailOnChange} 
        defaultValue={email} />{/* 2 */}
        <br />
        <input type="password" placeholder="enter your password"
        onChange={passwordOnChange} 
        defaultValue={password} />{/* 2 */}
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default HookForm;
