import { Form } from "react-router-dom";
import "./App.css";
import Evento from "./components/Evento";
import Formulario from "./components/form/Formulario";

const App = () => {
  return (
    <div className="App">
      <Evento numero={1} />

      <Formulario />
    </div>
  );
};

export default App;
