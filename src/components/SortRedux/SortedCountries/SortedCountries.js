import styles from './SortedCountries.module.css'

const SortedCountries = (props) => {

  const { countries } = props;

  return (
    <div>
      <div className={styles.table}>
        {countries.map((country) => {
          return (
            <table key={country.name} className={styles}>
              <tbody>
                <tr>
                  <td>{country.name}</td>
                  <td>{country.cases}</td>
                  <td>{country.deaths}</td>
                  <td>{country.population}</td>
                </tr>
              </tbody>
            </table>
          )
        })}
      </div>
    </div>
  );
}

export default SortedCountries