import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Contato } from './pages/Contatos';
import { Home } from "./pages/Home";
import { Sobre } from './pages/Sobre';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/sobre' element={<Sobre/>}/>
<Route path='/contato' element={<Contato/>}/>
    </Routes>
    </BrowserRouter>
    </> 
  );
}

export default App;