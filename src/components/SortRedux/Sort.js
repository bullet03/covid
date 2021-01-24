import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import SortedCountries from "./SortedCountries"

function SortRedux () {

  const countries = useSelector((store) => store.countriesListReducer.countries)
  const [state, setState] = useState(countries)

  useEffect(() => {
    setState(countries)
  }, [state])

  const sortByDeaths = () => {
    let array = countries.sort(function (a, b) {
      return b.deaths - a.deaths
    })
    setState(array)
  }
  const sortByPopulation = () => {
    let array = countries.sort(function (a, b) {
      return b.population - a.population
    })
    setState(array)
  }
  const sortByCases = () => {
    let array = countries.sort(function (a, b) {
      return b.cases - a.cases
    })
    setState(array)
  }

   return (
     <div>
       <div>
         <SortedCountries countries={state} />
       </div>
       <div>
         <button onClick={() => sortByDeaths()}>Sort by deaths</button>
       </div>
       <div>
         <button onClick={() => sortByPopulation()}>Sort by popualtion</button>
       </div>
       <div>
         <button onClick={() => sortByCases()}>Sort by cases</button>
       </div>
     </div>
   );
}

export default SortRedux;