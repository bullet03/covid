import { useParams } from "react-router-dom"
import axios from 'axios'
import { useState, useEffect } from 'react'
import CountryImage from "./CountryImage"
import styles from './Country.module.css'
import CountryButtons from "./CountryButtons"
import Preloader from "../PreLoader"

const Country = () => {

  const { id } = useParams()
  const [country, setCountry] = useState()
  const [covDetRation, setCovDetRation] = useState()
  const [popCovRation, setPopCovRation] = useState()
  useEffect(() => {
    axios.get("https://covid-api.mmediagroup.fr/v1/cases")
      .then(response => {
        setCountry(response.data)
      })
  }, [])


  return country ? (
    <div>
      { Object.values(country).map((it, index) => {
        if(id === it.All.country) {
          return (
            <div key={index}>
              <CountryImage id={id} />
              <table className={styles.table}>
                <tbody>
                  <tr className={styles.tr}>
                    <td className={styles.tdLeft}>Name</td>
                    <td className={styles.tdBold}>{it.All.country}</td>
                  </tr>
                  <tr className={styles.tr}>
                    <td className={styles.tdLeft}>Total cases of COVID:</td>
                    <td className={styles.tdBold}>{it.All.confirmed}</td>
                  </tr>
                  <tr className={styles.tr}>
                    <td className={styles.tdLeft}>Total deaths:</td>
                    <td className={styles.tdBold}>{it.All.deaths}</td>
                  </tr>
                  <tr className={styles.tr}>
                    <td className={styles.tdLeft}>Population:</td>
                    <td className={styles.tdBold}>{it.All.population}</td>
                  </tr>
                  <tr className={styles.tr}>
                    <td className={styles.tdLeft}>Covid to death</td>
                    <td className={styles.tdBold}>{covDetRation}</td>
                  </tr>
                  <tr className={styles.tr}>
                    <td className={styles.tdLeft}>Population to COVID</td>
                    <td className={styles.tdBold}>{popCovRation}</td>
                  </tr>
                </tbody>
              </table>
              <CountryButtons
                setPopCovRation={setPopCovRation}
                setCovDetRation={setCovDetRation}
                confirmed={it.All.confirmed}
                deaths={it.All.deaths}
                population={it.All.population}
              />
            </div>
          );
        }
      })}
    </div>
  ) : <Preloader />
}

export default Country