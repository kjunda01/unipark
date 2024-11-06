import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Container from "./components/layout/Container";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./components/pages/Home";
import AdicionarVeiculo from "./components/pages/AdicionarVeiculo";
import TempoReal from "./components/pages/TempoReal";
import Veiculos from "./components/pages/Veiculos";


function App() {
  return (
    <Router>
      <Header />
      <Container customClass="minHeight">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/veiculos" element={<Veiculos />} />
          <Route exact path="/adicionarveiculo" element={<AdicionarVeiculo />} />
          <Route exact path="/aovivo" element={<TempoReal />} />

        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
