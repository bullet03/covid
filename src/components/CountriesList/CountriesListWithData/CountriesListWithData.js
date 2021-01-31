import { Link } from "react-router-dom";
import style from "./CountriesListWithData.module.css";

const CountriesListWithData = (props) => {

  const { countries, loading } = props

  if(loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <div className={style.cards}>
        {countries.map((country) => {
          return (
            <Link
              to={`/${country.name}`}
              key={country.name}
              className={style.link}
            >
              <div className={style.countryCard}>
                <div className={style.textCard}>{country.name}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  )
}

export default CountriesListWithData;