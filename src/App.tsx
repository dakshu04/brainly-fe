
import "./App.css";
import { Dashboard } from "./pages/Dashboard";
import { Signin } from "./pages/signin";
import { Signup } from "./pages/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
