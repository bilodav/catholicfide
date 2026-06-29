import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DigitalAltar from "./components/DigitalAltar";
import LandingPage from "./pages/LandingPage";
import ApologiaPage from "./pages/apologiaPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/oremus" element={<DigitalAltar />} />
        <Route path="/apologia" element={<ApologiaPage />} />
      </Routes>
    </>
  );
}

export default App;
