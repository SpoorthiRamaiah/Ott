import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Addmovie from './components/Addmovie';
import Moviedetails from './components/Moviedetails';
import Favorites from './components/Favorites';
import Searchpage from './components/Searchpage';
import Editmovie from './components/Editmovie';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar/>
     <Routes>
        <Route path = "/" element ={<Home/>}/>
        <Route path = "/add" element ={<Addmovie/>}/>
        <Route path = "/moviedetails/:id" element ={<Moviedetails/>}/>
        <Route path = '/fav' element = {<Favorites/>}/>
        <Route path = '/serach/:searchword' element={<Searchpage/>}/>
        <Route path = '/edit/:id' element={<Editmovie/>}/>

     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
