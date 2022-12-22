import './App.css';
// import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponents';
import Titulo from './components/Titulo';
// import Formulario from './components/Formulario';

function App() {
  // const nombreDeComponenteDeClase = "clase";
  const nombreDeComponenteDeFuncion = "Función";
  return (
    <div className="App">
      <header className="App-header">
        <Titulo title = "Clase 4"/> 
        {/* <ClassComponent nombre = "Clase" /> */}

        <FunctionComponent nombre = {nombreDeComponenteDeFuncion} />

        {/* <Formulario/> */}
      </header>
    </div>
  );
}

export default App;
