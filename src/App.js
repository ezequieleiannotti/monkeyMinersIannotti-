import "./assets/css/App.css";
import NavBar from "./assets/components/NavBar/NavBar";
import Footer from "./assets/components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Slide from "./assets/components/Slide";
import ItemListContainer from "./assets/components/ItemListContainer";
import ItemList from "./assets/components/ItemList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos" />
      <ItemList />
      <Slide />
      <Footer />
    </div>
  );
}

export default App;
