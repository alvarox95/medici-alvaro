import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Error from './pages/Error/Error';
import NavBar from './components/navBar/navBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer nombre= 'Zona-Gamer' />}/>
      <Route path='/Categoria/:CategoriaId' element={<ItemListContainer />}/>
      <Route path='/Item/:ItemId' element={<ItemDetailContainer />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
