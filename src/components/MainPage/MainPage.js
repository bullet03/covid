import { Route, Switch } from "react-router-dom";
import Country from '../Country'
import Header from "../Header";
import Comparison from "../Сomparison";
import Footer from '../Footer'
import CountriesList from "../CountriesList";
import styles from './MainPage.module.css'

const MainPage = () => {
  return (
    <div className={styles.pageStructure}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>
        <Switch>
          <Route path="/covid/">
            <CountriesList />
          </Route>
          <Route exact path="/comparison">
            <Comparison />
          </Route>
          <Route path="/:id">
            <Country />
          </Route>
          <Route path="/">
            <CountriesList />
          </Route>
        </Switch>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default MainPage

