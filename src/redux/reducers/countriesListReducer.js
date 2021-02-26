import axios from "axios"
import { COUNTRIES } from "../../consts";
const GET_COUNTRIES = "GET_COUNTRIES"


const initialState = {
  countries: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES: {
      let obj = action.countries;
      let array = Object.keys(obj).reduce((acc, current ) => {
        let { All: { deaths, confirmed, population }} = obj[current]
        if (COUNTRIES.includes(current)) {
          return [...acc, {
              name: current,
              deaths,
              cases: confirmed,
              population,
            },
          ]
        }
        return acc
      }, [])
      return {
        ...state,
        countries: array,
      }
    }
    default:
      return state;
  }
}

export const getCountriesList = () => {
  return (dispatch) => {
    axios.get("https://covid-api.mmediagroup.fr/v1/cases").then((response) => {
      dispatch({ type: GET_COUNTRIES, countries: response.data });
    })
  }
}