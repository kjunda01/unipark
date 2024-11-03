import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Sobre from "./components/pages/Sobre";
import Contato from "./components/pages/Contato";
import Footer from "./components/layout/Footer";
import NovaPlaca from "./components/pages/NovaPlaca";
import Header from "./components/layout/Header";
import Container from "./components/layout/Container";


function App() {
  return (
    <Router>
      <Header />
      <Container customClass="minHeight">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sobre" element={<Sobre />} />
          <Route exact path="/contato" element={<Contato />} />
          <Route exact path="/novaplaca" element={<NovaPlaca />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
