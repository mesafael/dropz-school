import { Route,Routes, BrowserRouter } from "react-router-dom";

import { Login } from "./Login/Login";
import { Register } from "./Register/Register";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={ <Login/> }  path="/" />
      <Route element={ <Register/> }  path="/register" />
    </Routes>
   
    
</BrowserRouter>
  );
}

export default App;
