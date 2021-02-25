import { Link } from "react-router-dom";
import Preloader from "../../PreLoader";
import style from "./CountriesListWithData.module.css";

const CountriesListWithData = (props) => {

  const { countries, loading } = props

  if (!loading) {
    return <Preloader />
  }

  return (
      <div className={style.cards}>
        {countries.map((country) => {
          return (
            <Link
              to={`/${country.name}`}
              key={country.name}
              className={style.link}
            >
              <div className={style.countryCard}>{country.name}</div>
            </Link>
          )
        })}
      </div>
  )
}

export default CountriesListWithData;