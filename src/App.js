import "./styles/App.css"
import CardContainer from "./components/CardContainer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";




function App() {
  return (
    <div className="App">
      <Navbar/>
      <CardContainer/>
      <Footer/>
    </div>
  );
}

export default App;
