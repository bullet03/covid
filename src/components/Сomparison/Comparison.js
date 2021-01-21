import { useSelector } from 'react-redux'

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
  "US",
]

function Comparison () {

  const countries = useSelector((store) => store.countriesListReducer.countries)

  return (
    <div>
      {countries
        ? Object.values(countries).map((country) => {
            if (COUNTRIES.indexOf(country.All.country) !== -1) {
              return (
                  <div>{country.All.country} {country.All.confirmed}</div>
              )
            }
          })
        : "Loading..."}
    </div>
  );
}

export default Comparison