import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import './app.css'
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
        <Navbar/>
        <div className='container'>
          <Sidebar/>
          <Switch>
            <Route path="/">
              <Home/>
            </Route>  
            <Route path="/users">
              <UserList/>
            </Route>  
          </Switch>      
        </div>
    </Router>
  );
}

export default App;
