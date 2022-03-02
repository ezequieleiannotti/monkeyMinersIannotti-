import "./assets/css/App.css";
import NavBar from "./assets/components/NavBar/NavBar";
import Footer from "./assets/components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Cards from "./assets/components/Cards";
import Slide from "./assets/components/Slide";
import CardWidget from "./assets/components//NavBar/CartWidget";
import itemListContainer from "./assets/components/itemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar>
        {" "}
        <CardWidget />
      </NavBar>
      <itemListContainer />
      <Cards />
      <Slide />
      <Footer />
    </div>
  );
}

export default App;
