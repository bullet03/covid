import Preloader from '../../PreLoader'
import styles from './SortedCountries.module.css'

const SortedCountries = (props) => {
  const { countries, color } = props
  return countries ? (
    <div>
      <div className={styles.table}>
        {countries.map((country, index) => {
          return (
            <table key={country.name} className={styles.tableItself}>
              <tbody>
                <tr>
                  <td  className={`${styles.tdName} ${styles.tdCenter}`} style={{fontWeight: 'bold', color: "#36485a"}}>{country.name}</td>
                  <td className={`${styles.tdNumber} ${styles.tdCenter}`}>{index+1}</td>
                  <td className={`${styles.tdCases}`} style={color === 'cases' ? {fontWeight: 'bold', color: "#36485a"} : {}}>{country.cases}</td>
                  <td className={styles.tdDeaths} style={color === 'deaths' ? {fontWeight: 'bold', color: "#36485a"} : {}}>{country.deaths}</td>
                  <td className={styles.tdMillions} style={color === 'population' ? {fontWeight: 'bold', color: "#36485a"} : {}}>{`${Math.round(country.population/1000000)}`}</td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>
    </div>
  ) : <Preloader />
}

export default SortedCountries