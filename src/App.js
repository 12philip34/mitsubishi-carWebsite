import './App.css';
import NavbarComponent from './components/Navbar';
import HomePage from './pages/homePage';
import bootstrap from 'bootstrap';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
        <HomePage />
    </div>
  );
}

export default App;
