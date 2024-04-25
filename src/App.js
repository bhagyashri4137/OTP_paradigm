import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import Forgot from './components/Forgot';
import Success from './components/Success';
import Error from './components/Error';
import Navbar from './components/Navbar';
import Otp from './components/Otp';
import ResetPassword from './components/ResetPassword';

function App() {
  return (
    <>
    <Router>
      
      <Routes>
      <Route path='/ResetPassword' element={<ResetPassword/>} ></Route>
      <Route path='/Otp' element={<Otp/>} ></Route>
      <Route path='/Error' element={<Error/>}></Route>
      <Route path='/Success' element={<Success/>}></Route>
      <Route path='/Forgot' element={<Forgot/>}></Route>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Registration' element={<Registration/>}/>  
      <Route path='/' element={<Navbar/>}></Route>
     </Routes>
     
    </Router>
    </>
    
    );
}

export default App;
