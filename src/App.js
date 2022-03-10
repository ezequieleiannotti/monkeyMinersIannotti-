import "./assets/css/App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Slide from "./components/Slide";
import ItemListContainer from "./components/ItemListContainer";
import Promesas from "./components/Promesas";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos" />
      <Promesas />
      <Slide />
      <Footer />
    </div>
  );
}

export default App;
