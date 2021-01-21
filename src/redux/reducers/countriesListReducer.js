import axios from "axios"
const GET_COUNTRIES_LIST = "GET_COUNTRIES_LIST"

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

const initialCountry = [{
  name: "",
  deaths: 0,
  confirmed: 0,
  popualtion: 0
}]

const initialState = {
  countries: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES_LIST: {
      return {
        ...state,
        countries: action.countries,
      };
    }
    case 'GET_UGLY': {
      let array = Object.keys(state).reduce((acc, current, index) => {
        let {All: {name, deaths, confirmed, population}}  = state[current]
        if (COUNTRIES.includes(current)) {
          return [...acc, {
              name: current,
              deaths: deaths,
              confirmed: confirmed,
              population: population,
            },
          ]
        }
          return acc
      }, [])
    }
    default:
      return state
  }
}

export const getCountriesList = () => {
  return (dispatch) => {
    axios.get("https://covid-api.mmediagroup.fr/v1/cases").then((response) => {
      dispatch({ type: GET_COUNTRIES_LIST, countries: response.data })
    })
  }
}