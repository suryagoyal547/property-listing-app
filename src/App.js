import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import NewYork from './components/cities/NewYork';
import London from './components/cities/London';
import Mumbai from './components/cities/Mumbai';
import Paris from './components/cities/Paris';

function App() {
  return (


    <Router>

      <div className="header">
        <h1>Featured Listed Property</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptates, magnam sapiente inventore amet dolore recusandae sed quaerat repudiandae iure nisi labore perferendis porro?</p>
      </div>

         <div className="links">
         <Link  to="/">New York</Link>
          <Link  to="/london">London</Link>
          <Link  to="/mumbai">Mumbai</Link>
          <Link  to="/paris">Paris</Link>
         </div>

      <Routes>
        <Route path='/' element={<NewYork/>} />
        <Route path='/london' element={<London/>} />
        <Route path='/mumbai' element={<Mumbai/>} />
        <Route path='/paris' element={<Paris/>} />
 
      </Routes>
    </Router>
  );
}

export default App;

