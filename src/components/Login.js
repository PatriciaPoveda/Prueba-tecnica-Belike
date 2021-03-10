import React, { useState } from "react";
import "./login.scss";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUserName = (ev) => {
    setUserName(ev.target.value);
  };

  const handlePassword = (ev) => {
    setPassword(ev.target.value);
  };

  const handleConfirmPassword = (ev) => {
    setConfirmPassword(ev.target.value);
  };

  const handleFormsignUp = (ev) => {
    ev.preventDefault();
    props.handlesignUp({
      userName: userName,
      password: password,
      confirmPassword: confirmPassword,
    });
  };
  // const isDisabled = () => {
  //   userName !== "" && password !== "" && confirmPassword !== "";
  //   return true;
  // };
  return (
    <>
      <main className="main">
        <h2 className="main__title">Sign up</h2>
        <form
          action=""
          className="main__form js-signUp"
          onSubmit={handleFormsignUp}
        >
          <label htmlFor="name" className="main__form--label">
            Introduce tu nombre
          </label>
          <input
            type="text"
            id="name"
            placeholder="Ej: Laura"
            className="main__form--input js-username"
            onChange={handleUserName}
            pattern="^([a-zA-Z]+[0-9]{0,2}){5,18}$"
            required
          />
          <label htmlFor="password" className="main__form--label">
            Introduce tu contraseña
          </label>
          <input
            type="text"
            id="password"
            className="main__form--input js-password"
            onChange={handlePassword}
            pattern="^(?=.*[A-Z])(?=.*[#])([A-Za-z#]|[^ ]){7,15}$"
            required
          />
          <label htmlFor="confirmPassword" className="main__form--label">
            Confirma tu contraseña
          </label>
          <input
            type="text"
            id="confirmPassword"
            className="main__form--input js-confirmPassword"
            onChange={handleConfirmPassword}
            pattern="^(?=.*[A-Z])(?=.*[#])([A-Za-z#]|[^ ]){7,15}$"
            required
          />
          <input
            type="submit"
            value="Regístrate"
            className="js-SignUp"
            disabled={(!userName, !password, !confirmPassword)}
          />
        </form>
      </main>
    </>
  );
};

export default Login;
