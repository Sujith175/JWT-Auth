import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login, Signup } from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
