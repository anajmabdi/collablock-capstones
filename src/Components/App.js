import Canvas from "./Canvas";
// import SignIn from "../Components/Auth";
import Home from "./Home";
// import About from "./Components/About";
// import Navbar from "../Components/Navbar";
// import Account from "../Components/Account";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
          {/* <Navbar /> */}
          <Routes>
          <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About/>} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/account" element={<Account />} /> */}
            <Route path="/canvas" element={<Canvas />} />
          </Routes>
        </BrowserRouter>
      </>
      );
}

      export default App;
