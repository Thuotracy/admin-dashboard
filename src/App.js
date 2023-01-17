import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import './app.css';
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";


function App() {
  return (
    <Router>
        <Navbar/>
        <div className='container'>
          <Sidebar/>
          <Routes>
            <Route exact path="/">
              <Home/>
            </Route>  
            <Route path="/users">
              <UserList/>
            </Route>  
          </Routes>      
        </div>
    </Router>
  );
}

export default App;
