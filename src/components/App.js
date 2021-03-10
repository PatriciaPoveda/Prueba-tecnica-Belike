import "./App.scss";
import Login from "./Login";
import Header from "./Header";

const App = () => {
  const handlesignUp = (data) => {
    if (data.password === data.confirmPassword) {
      console.log("usuario creado");
    }
  };
  return (
    <>
      <Header></Header>
      <Login handlesignUp={handlesignUp}></Login>
    </>
  );
};

export default App;
