import './App.css';
import {useState} from "react"

function App() {

  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);
  const [pais, setPais] = useState("");
  const [cargo, setCargo] = useState("");
  const [anios, setAnios] = useState(0);

  return (
    <div className="App">
      <div className="Datos">
        <label>Nombre: <input type="text"></input></label>
        <label>Edad: <input type="number"></input></label>
        <label>Pais: <input type="text"></input></label>
        <label>Cargo: <input type="text"></input></label>
        <label>Años: <input type="number"></input></label>
        <button>Registrar</button>
      </div>
    </div>
  );
}

export default App;
