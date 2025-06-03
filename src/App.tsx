
import "./App.css";
import { Dashboard } from "./pages/Dashboard";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/Signup";
import { SignIn } from "./pages/Signin";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
