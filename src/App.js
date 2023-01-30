import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Create from './components/Create';
import Form from './components/Form';
import Navbar from './components/Navbar';

import Article01 from './components/Article01';
import Article02 from './components/Article02';
import Client from './components/Client';


function App() {


  return (
    <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/Client' element={<Client/>} />
                    <Route path='/Create' element={<Create/>} />
                    <Route path='/Article01' element={<Article01/>} />
                    <Route path='/Article02' element={<Article02/>} />
                </Routes>
            </Router>

    </div>
  );
}

export default App;
