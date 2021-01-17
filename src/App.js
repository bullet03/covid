import { Route, Switch } from "react-router-dom";
import CountriesList from "./components/CountriesList";
import Country from "./components/Country";
import Header from "./components/Header";
import Comparison from "./components/Сomparison/Comparison";
import Footer from './components/Footer'

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
