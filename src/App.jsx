import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ProvenzaHeader from "./components/ProvenzaHeader";
import "./App.css"; // Importamos el CSS aquí
import FlyerPage from "./components/FlyerPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProvenzaHeader />} />
        <Route path="/flyer" element={<FlyerPage />} />
      </Routes>
    </Router>
  );
};

export default App;
