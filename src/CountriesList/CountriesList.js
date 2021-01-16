import { useState, useEffect } from "react";
import axios from "axios";
import CountryFromList from "./CountryFromList";

function CountriesList () {
  const [countries, setCountries] = useState();
  useEffect(() => {
    axios.get("https://covid-api.mmediagroup.fr/v1/cases").then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div>
      <CountryFromList countries={countries} />
    </div>
  );
}

export default CountriesList