import { ThemeProvider } from "styled-components";
import { theme } from "./styles/global/theme";
import GlobalStyle from "./styles/global/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaInicial from "./pages/PaginaInicial";
import PaginaConsulta from "./pages/PaginaConsulta";
import PaginaNovoVeiculo from "./pages/PaginaNovoVeiculo";
import PaginaAoVivo from "./pages/PaginaAoVivo";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route>
                        <Route path="/" element={<PaginaInicial />} />
                        <Route path="/aovivo" element={<PaginaAoVivo />} />
                        <Route
                            path="/buscarveiculo"
                            element={<PaginaConsulta />}
                        />
                        <Route
                            path="/cadastrarveiculo"
                            element={<PaginaNovoVeiculo />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
