const SORT_BY_POPULATION = 'SORT_BY_POPULATION'
const SORT_BY_DEATHS = "SORT_BY_DEATHS"

const initialState = {
  countriesSorted: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SORT_BY_POPULATION: {
      let array = action.countries.sort(function (a, b) {
        return b.population - a.population
      })
      return {
        ...state,
        countriesSorted: array
      };
    }
    case SORT_BY_DEATHS: {
      let array = action.countries.sort(function (a, b) {
        return b.deaths - a.deaths
      })
      return {
        ...state,
        countriesSorted: array
      }
    }
    default:
      return state
  }
}


export const sortByPopulation = (countries) => ({ type: SORT_BY_POPULATION, countries })
export const sortByDeaths = (countries) => ({ type: SORT_BY_DEATHS, countries })

