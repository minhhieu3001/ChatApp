import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login.jsx";
import Register from "./component/Register.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
