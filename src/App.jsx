// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Component/header";
import Sidebar from "./Component/Sidebars";
import Footer from "./Component/Footer";
import CreateForm from "./Component/CreateForm";
import CreateCardList from "./Component/CreateCardList";
import { useState } from "react";
import CardContextProvider from "./Store/CardContext";

// import outlet for dom
import { Outlet } from "react-router-dom";
function App() {
  // in this i am create a state in which initial value is home then show the login page else show cards

  const [InitialState, Setstate] = useState("Home");
  // I cannot do that>
  // Setstate(InitialState);

  // Setstate()

  // here we can through a default message which show when the posts are empty;
  return (
    <>
      <CardContextProvider>
        <div className="app-container">
          {/* Give a prop to teh Sidebar which update the value of Initialstate */}
          {/* i passed 2 prop InitialState in which the value is set or another Setstate which is called as a child  */}
          <Sidebar selectedtab={InitialState} setVal={Setstate}></Sidebar>
          <div className="content">
            <Header></Header>
            {/* here i want to use form and create multiple post :  */}
            {/* {InitialState === "Home" ? (
              <CreateCardList></CreateCardList>
            ) : (
              <CreateForm></CreateForm>
            )} */}
            <Outlet />
            <Footer></Footer>
          </div>
        </div>
      </CardContextProvider>
    </>
  );
}
export default App;
