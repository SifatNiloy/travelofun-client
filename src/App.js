// import logo from '../src/images/logo/logo2.png'
import './App.css';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Packages from './components/Home/Packages/Packages';
import About from './components/About/About';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import Blog from './components/Home/Blog/Blog';
import Offers from './components/Home/Offers/Offers';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/packages' element={<Packages></Packages>}></Route>
        <Route path='/package/:packageId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/about' element={<About></About>}>About</Route>
        <Route path='/blog' element={<Blog></Blog>}>About</Route>
        <Route path='/offers' element={<Offers></Offers>}></Route>
        <Route path='/login' element={<Login></Login>}>Login</Route>
        <Route path='/register' element={<Register></Register>}>Register</Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
