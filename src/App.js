import Navbar from "./components/navbar/Navbar";
import Navbar from "./components/sidebar/Sidebar";


function App() {
  return (
    <div>
        <Navbar/>
        <div className='container'>
          <Sidebar/>
          other pages
        </div>
    </div>
  );
}

export default App;
