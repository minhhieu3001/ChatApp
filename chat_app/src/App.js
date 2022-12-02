import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login.jsx";
import Register from "./component/Register.jsx";
import Messenger from "./component/Messenger";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Messenger />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
