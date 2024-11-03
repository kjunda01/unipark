import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"

import Container from "./components/layout/Container";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./components/pages/Home";
import PlacasCadastradas from "./components/pages/PlacasCadastradas";
import NovaPlaca from "./components/pages/NovaPlaca";

function App() {
  return (
    <Router>
      <Header />
      <Container customClass="minHeight">
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/consulta" element={<PlacasCadastradas />} />
          <Route exact path="/novaplaca" element={<NovaPlaca />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
