import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Form from './components/Form';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Elements/Navbar';
import Main from './components/Main';

function App() {

  return (
    
    <div>
      <Navbar/>
      <Routes>
        {/* <Route path='/' element={<Main child = {<Home/>}/>}></Route> */}
        <Route path='/' element={<Home/>}></Route>
        <Route path='/form' element={<Form/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
