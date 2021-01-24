import styles from './SortButtons.module.css'

function SortButtons (props) {
  const { countries, setCountries, setColor } = props

  const sortByPopulation = () => {
    let array = countries.sort(function (a, b) {
      return b.population - a.population
    })
    setCountries([...array])
    setColor('population')
  }

  const sortByCases = () => {
    let array = countries.sort(function (a, b) {
      return b.cases - a.cases
    })
    setCountries([...array])
    setColor('cases')
  }

  const sortByDeaths = () => {
    let array = countries.sort(function (a, b) {
      return b.deaths - a.deaths
    })
    setCountries([...array])
    setColor('deaths')
  }

  return (
    <div className={styles.btnGroup}>
        <button className={styles.button} onClick={() => sortByCases()}>COVID sort</button>
        <button className={styles.button} onClick={() => sortByDeaths()}>Deaths sort</button>
        <button className={styles.button} onClick={() => sortByPopulation()}>Mln. sort</button>
    </div>
  )
}

export default SortButtons