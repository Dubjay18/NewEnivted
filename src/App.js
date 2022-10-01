import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Create from './pages/Create';
import Event from './pages/Event';
function App() {
  return (
    <Router>
   
     
    <Routes>
    
    <Route exact path="/" element={<Home/>}/>
    <Route path="/create" element={<Create/>}/>
    <Route path="/event" element={<Event/>}/>
  </Routes>
  
  </Router>
  );
}

export default App;
