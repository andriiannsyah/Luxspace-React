import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Congratulation from "./pages/Congratulation";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/categories/:idc" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/congratulation" element={<Congratulation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
