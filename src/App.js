import "./assets/css/App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Slide from "./components/Slide";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos" />
      <Slide />
      <Footer />
    </div>
  );
}

export default App;
