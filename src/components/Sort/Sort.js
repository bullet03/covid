import axios from 'axios'
import { useEffect, useReducer } from "react";
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

const initialState = {
  countries: [],
  color: ''
}

function reducer(state, action) {
  let array
  switch (action.type) {
    case 'get_data':
      let obj = action.countries;
      array = Object.keys(obj).reduce((acc, current) => {
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
      return {
        ...state,
        countries: array
      }
    case 'covid_sort':
      array = state.countries.sort(function (a, b) {
        return b.cases - a.cases
      })
      return {
        ...state,
        countries: array,
        color: 'cases'
      }
    case 'death_sort':
      array = state.countries.sort(function (a, b) {
        return b.deaths - a.deaths
      })
      return {
        ...state,
        countries: array,
        color: 'deaths'
      }
    case 'mln_sort':
      array = state.countries.sort(function (a, b) {
        return b.population - a.population
      })
      return {
        ...state,
        countries: array,
        color: 'population'
      }
    default:
      return state
  }
}

function Sort () {

  const [countriesReducer, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get("https://covid-api.mmediagroup.fr/v1/cases")
      .then((response) => response.data)
      .then((data) => dispatch({type: 'get_data', countries: data}))
  }, [])

  return (
    <div className={`${styles.structure} ${styles.center}`}>
      <div className={styles.table}>
        <table className={styles.tableItself}>
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
        <SortedCountries countries={countriesReducer.countries} color={countriesReducer.color} />
      </div>
      <div>
        <SortButtons dispatch={dispatch} />
      </div>
    </div>
  )
}

export default Sort