import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import DigitalAltar from "./pages/DigitalAltar";
import LandingPage from "./pages/LandingPage";
import ApologiaPage from "./pages/apologiaPage";
import ApologiaArticleViewer from "./components/ApologiaArticleViewer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/oremus" element={<DigitalAltar />} />
        <Route path="/apologia" element={<ApologiaPage />} />
        <Route path="/apologia/:themeId" element={<ApologiaArticleViewer />} />
      </Routes>
    </>
  );
}

export default App;
