import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from '../contexts/UserContext'
import GlobalStyle from './GlobalStyle';
import SignIn from "../SignIn";

export default function App() {
  return (
   <UserContext.Provider>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<SignIn/>} />
      </Routes>
    </BrowserRouter>
   </UserContext.Provider>
  );
}
