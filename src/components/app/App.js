import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../contexts/UserContext";
import GlobalStyle from "./GlobalStyle";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Home from "../home/Home";
import Cart from "../cart/Cart";
import ProductPage from "../productPage/ProductPage";

export default function App() {
  const [user_Token, setUser_Token] = useState("");

  return (
    <UserContext.Provider value={{ user_Token, setUser_Token }}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/Sign-up" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Product/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
