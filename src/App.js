import './App.css';
import Home from './Home';
import Appointments from "./Appointments";
import {Route, Routes, Link} from "react-router-dom";

//changes to imports 
function App() {
  return (
    <>
      <div class="nav">
        <h2 class="h2">Healthcase</h2>
        <ul id="nav-item">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/appointments">Appointments</Link></li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/appointments" element={<Appointments/>} />
      </Routes>
    </>
  )
  // return (
  //   <div>
  //     {Home()}
  //   </div>
  // );
}
export default App;