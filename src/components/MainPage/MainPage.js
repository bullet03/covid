import React from "react";
import { Route, Switch } from "react-router-dom";
import Country from '../Country'
import Header from "../Header";
import Sort from "../Sort"
import Footer from '../Footer'
import CountriesList from "../CountriesList";
import styles from './MainPage.module.css'

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.content}>
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
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default MainPage

