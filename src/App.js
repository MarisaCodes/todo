import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Create from "./components/Create";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="create" element={<Create />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
