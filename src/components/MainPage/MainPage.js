import { Route, Switch } from "react-router-dom";
import Country from '../Country'
import Header from "../Header";
import Sort from "../Sort"
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
          <Route exact path="/sort">
            <Sort />
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

