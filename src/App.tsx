import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import KnowMore from "./pages/KnowMore";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/moreabout" element={<KnowMore/>} />
    </Routes>
  );
};

export default App;
