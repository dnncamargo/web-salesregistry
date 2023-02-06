import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Create from './components/Create';
import Navbar from './components/Navbar';

import Article01 from './components/Article01';
import Article02 from './components/Article02';
import Article03 from './components/Article03';
// import Client from '../dump/Client';
import Client from './components/Client';

function App() {


  return (
    <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    {/* <Route path='/Client' element={<Client/>} /> */}
                    <Route path='/Client' element={<Client/>} />
                    <Route path='/Create' element={<Create/>} />
                    <Route path='/Article01' element={<Article01/>} />
                    <Route path='/Article02' element={<Article02/>} />
                    <Route path='/Article03' element={<Article03/>} />
                </Routes>
            </Router>

    </div>
  );
}

export default App;
