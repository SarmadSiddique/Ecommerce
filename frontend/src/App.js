import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Register from './Pages/Register';
import MainHeader from './Components/MainHeader'
import Cart from './Pages/Cart'
import Login from './Pages/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <div className="main ">
   
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHeader/>} >
          <Route index element={<Home />}></Route>
          <Route path="/signup" element={<Register/>}></Route> 
          
         
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home/>}></Route>

          <Route path="/cart" element={<Cart />}></Route>


          {/* <Route path="/user" element={<User/>}></Route> */}
          {/* <Route path="*" element={<PgFOF />}></Route> */}
          </Route >
        </Routes>
      </BrowserRouter>
    </div>
    </>

  );
}
export default App;
