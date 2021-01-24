function SortButtons (props) {

  const {setState, countries} = props

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

export default SortButtons