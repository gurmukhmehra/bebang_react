import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './components/Home';
import About from './components/About';
import Signin from './components/Signin';
import Signup from './components/Signup';
function App() {     
    return (
      <div className="App">        
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/sign-in' element={<Signin/>}></Route>
            <Route path='/sign-up' element={<Signup/>}></Route>
          </Routes>        
        </BrowserRouter>
        <Footer /> 
      </div>
    );
}

export default App;
