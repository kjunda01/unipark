import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaInicial from "./pages/PaginaInicial";
import PaginaAoVivo from "./pages/PaginaAoVivo";
import PaginaConsulta from "./pages/PaginaConsulta";
import PaginaNovoVeiculo from "./pages/PaginaNovoVeiculo";
import { GlobalStyle } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<PaginaInicial />} />
                    <Route path="/aovivo" element={<PaginaAoVivo />} />
                    <Route path="/buscarveiculo" element={<PaginaConsulta />} />
                    <Route
                        path="/cadastrarveiculo"
                        element={<PaginaNovoVeiculo />}
                    />
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
