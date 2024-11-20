import { ThemeProvider } from "styled-components";
import { theme } from "./styles/global/theme";
import GlobalStyle from "./styles/global/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaInicial from "./pages/PaginaInicial";
import PaginaConsulta from "./pages/PaginaConsulta";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route>
                        <Route path="/" element={<PaginaInicial />} />
                        <Route path="/consulta" element={<PaginaConsulta />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
