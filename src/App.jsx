import { HashRouter as Router, Routes, Route } from "react-router-dom";
import DiscountBannersShowcase from "./components/DiscountBannersShowcase";
import ProvenzaHeader from "./components/ProvenzaHeader";
import GalleryTemplatesShowcase from "./components/GalleryTemplatesShowcase";
import "./App.css"; // Importamos el CSS aquí
import DiscountBanner from "./components/DiscountBanner";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProvenzaHeader />} />
        <Route path="/promociones" element={<DiscountBannersShowcase />} />
        <Route path="/galeria" element={<GalleryTemplatesShowcase />} />
        <Route path="/discount" element={<DiscountBanner />} />
      </Routes>
    </Router>
  );
};

export default App;
