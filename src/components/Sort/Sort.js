import axios from 'axios'
import { useEffect, useState } from 'react'
import SortButtons from './SortButtons/SortButtons'
import SortedCountries from './SortedCountries/SortedCountries'
import styles from './Sort.module.css'

const COUNTRIES = [
  "Bangladesh",
  "Brazil",
  "China",
  "India",
  "Indonesia",
  "Mexico",
  "Nigeria",
  "Pakistan",
  "Russia",
  "US",
]

function Sort () {
  const [countries, setCountries] = useState()
  const [color, setColor] = useState('red')
  useEffect(()=> {
    axios.get('https://covid-api.mmediagroup.fr/v1/cases')
      .then((response) => {
        let obj = response.data
        let array = Object.keys(obj).reduce((acc, current) => {
          let {
            All: { deaths, confirmed, population },
          } = obj[current];
          if (COUNTRIES.includes(current)) {
            return [
              ...acc,
              {
                name: current,
                deaths,
                cases: confirmed,
                population,
              },
            ];
          }
          return acc;
        }, []);
        setCountries(array)
      })
  }, [])

  return (
    <div className={styles.structure}>
      <div className={styles.table}>
        <table>
          <tbody>
            <tr>
              <td className={`${styles.tdCenter} ${styles.tdName}`}>Country</td>
              <td className={`${styles.tdCenter} ${styles.tdNumber}`}>#</td>
              <td className={`${styles.tdCenter} ${styles.tdCases}`}>COVID</td>
              <td className={`${styles.tdCenter} ${styles.tdDeaths}`}>
                Deaths
              </td>
              <td className={`${styles.tdCenter} ${styles.tdMillions}`}>
                Mln.
              </td>
            </tr>
          </tbody>
        </table>
        <SortedCountries countries={countries} color={color} />
      </div>
      <div>
        <SortButtons
          countries={countries}
          setCountries={setCountries}
          setColor={setColor}
          color={color}
        />
      </div>
    </div>
  );
}

export default Sort