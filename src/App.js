import './App.scss';
import About from './Components/About/About';
import Brands from './Components/Brands/Brands';
import Clients from './Components/Clients/Clients';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Rooms from './Components/Rooms/Rooms';
import Services from './Components/Services/Services';
import Top from './Components/Top/Top';

function App() {
  return (
    <div className="App">
     <Header/>
     <Top/>
     <About/>
     <Clients/>
     <Rooms/>
     <Services/>
     <Brands/>
     <Footer/>
    </div>
  );
}

export default App;
