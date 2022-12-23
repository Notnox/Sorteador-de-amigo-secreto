import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import PaginaInicial from './pages/PaginaInicial';
import Sorteio from './pages/Sorteio';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<PaginaInicial />}/>
          <Route path='/sorteio' element={<Sorteio />}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
