import { Link } from "react-router-dom";


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
  "US"
]

const CountryFromList = (props) => {
  const { countries } = props;
  return (
    <div>
      {countries
        ? Object.values(countries).map((country, index) => {
            if (COUNTRIES.indexOf(country.All.country) !== -1) {
              return (
                <Link to={`/${country.All.country}`} key={index}>
                  <div>{country.All.country}</div>
                </Link>
              );
            }
          })
        : "Loading..."}
    </div>
  );
};

export default CountryFromList;