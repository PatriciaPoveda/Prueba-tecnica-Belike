import React, { useState } from "react";
import Login from "./Login";
import Header from "./Header";
import Intranet from "./Intranet";

const App = () => {
  const [userData, setUserData] = useState("");

  const handlesignUp = (data) => {
    if (data.password === data.confirmPassword) {
      console.log("usuario creado");
      setUserData(data.userName);
    }
  };
  const renderIntranet = () => {
    return (
      <>
        <Header userData={userData}></Header>
        <Intranet></Intranet>
      </>
    );
  };
  const renderLogin = () => {
    return (
      <>
        <Header></Header>
        <Login handlesignUp={handlesignUp}></Login>
      </>
    );
  };
  return userData === "" ? renderLogin() : renderIntranet();
};

export default App;
