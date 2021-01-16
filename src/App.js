import { Route, Switch } from "react-router-dom";
import CountriesList from "./CountriesList";
import Country from "./Country";
import Header from "./Header";
import Comparison from "./Сomparison/Comparison";
import Footer from './Footer'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <CountriesList />
        </Route>
        <Route exact path="/comparison">
          <Comparison />
        </Route>
        <Route path="/:id">
          <Country />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App
