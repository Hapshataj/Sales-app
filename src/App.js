import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Navbar';
import Addsales from './pages/Addsales';
import Topsale from './pages/Topsale';
import Totalrevenue from './pages/Totalrevenue';
import Register from './pages/register';
import Login from './pages/login';

function App() {
  return (
    <div className='app'>

      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route exact path='/addsales' element={<Addsales />}></Route>
          <Route exact path='/topsale' element={<Topsale />} ></Route>
          <Route exact path='/totalrevenue' element={<Totalrevenue />}></Route>
          <Route exact path='/' element={<Login />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/register' element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
