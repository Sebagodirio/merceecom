import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import About from "./components/About/About"

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer
            greeting="Harry potter 7"
            description="Alguna descripcion"
          />
        </Route>
        <Route exact path="/category/:name">
          <ItemListContainer
            greeting="Harry potter 7"
            description="Alguna descripcion"
          />
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer
            greeting="Hola mundo!"
            description="Alguna descripcion"
            price={1200}
            id={1}
          />
        </Route>
        <Route exact path="/catalogo">
          <ItemListContainer
            greeting="Harry potter 7"
            description="Alguna descripcion"
          />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
