import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import PaginaInicial from './pages/PaginaInicial';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<PaginaInicial />}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
