import "./assets/css/App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Slide from "./components/Slide";
import ItemListContainer from "./components/ItemListContainer";
import ItemList from "./components/ItemList";
import "./components/ConsumiendoPokeApi";
import PokemonContainer from "./components/PokemonContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos" />
      <PokemonContainer />
      <Slide />
      <Footer />
    </div>
  );
}

export default App;
