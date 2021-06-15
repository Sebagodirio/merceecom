import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

const App = () => {
  return (
    /* <div className="App">
        <NavBar />
        <ItemListContainer greeting="Hola mundo!" description="Alguna descripcion"/>
        <ItemDetailContainer greeting="Hola mundo!" description="Alguna descripcion" price={1200} id={1}/>
    </div> */

    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer
            greeting="Hola mundo!"
            description="Alguna descripcion"
          />
        </Route>
        <Route exact path="/productDetail">
          <ItemDetailContainer
            greeting="Hola mundo!"
            description="Alguna descripcion"
            price={1200}
            id={1}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
