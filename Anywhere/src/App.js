import './App.css';
import Home from './Pages/Home/Home';
import LoginSignup from './Pages/LoginSignup/LoginSignup';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Description from './Pages/Description/Description';
import TicketCart from './Pages/TicketCart/TicketCart';
import AddPlace from './Pages/AddPlaceForm/AddPlace';

function App() {
  return (
    <div className='App'> 
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route exact path='/signup' element={<LoginSignup act='signup'/>}></Route>
      <Route exact path='/login' element={<LoginSignup act='login'/>}></Route>
      <Route exact path='/register-place' element={<AddPlace/>}></Route>
      <Route exact path='/description' element={<Description/>}>
        <Route path=':placeId' element={<Description/>}></Route>
      </Route>
      <Route exact path='/cart' element={<TicketCart/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
