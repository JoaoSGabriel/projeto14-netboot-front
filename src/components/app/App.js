import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from '../contexts/UserContext'
import GlobalStyle from './GlobalStyle';
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Home from "../Home";

export default function App() {

  const [user_Token, setUser_Token] = useState('');

  return (
   <UserContext.Provider value={{ user_Token, setUser_Token }}>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<SignIn/>} />
        <Route path='/Sign-up' element={<SignUp/>} />
        <Route path='/Home' element={<Home/>} />
      </Routes>
    </BrowserRouter>
   </UserContext.Provider>
  );
}
