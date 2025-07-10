import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ProvenzaHeader from "./components/ProvenzaHeader";
import "./App.css"; // Importamos el CSS aquí

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProvenzaHeader />} />
      </Routes>
    </Router>
  );
};

export default App;
