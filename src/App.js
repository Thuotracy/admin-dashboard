import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import './app.css'
import Home from "./pages/home/Home";


function App() {
  return (
    <div>
        <Navbar/>
        <div className='container'>
          <Sidebar/>
          <Home/>
        </div>
    </div>
  );
}

export default App;
