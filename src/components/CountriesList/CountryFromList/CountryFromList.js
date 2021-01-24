import { Link } from "react-router-dom";
import style from './CountryFromList.module.css'

const CountryFromList = (props) => {
  const { countries } = props
  return (
    <div className={style.cards}>
      {countries
        ? (countries).map((country) => {
              return (
                <Link to={`/${country.name}`} key={country.name} className={style.link}>
                  <div className={style.countryCard}>
                    <div className={style.textCard}>{country.name}</div>
                  </div>
                </Link>
              );
          })
        : "Loading..."}
    </div>
  );
};

export default CountryFromList;