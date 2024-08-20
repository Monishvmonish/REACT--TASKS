
import './App.css';

import { Link } from 'react-router-dom';

function App() {
  return (
 
  <nav >
    <ul ><h1>
      <li >
        <Link to="/About">About</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li> 
     
      </h1> </ul>
  </nav>
    
  
  );
}

export default App;
