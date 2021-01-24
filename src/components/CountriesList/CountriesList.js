import CountryFromList from "./CountryFromList"
import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getCountriesList } from '../../redux/reducers/countriesListReducer'


function CountriesList () {

  const countries = useSelector((store) => store.countriesListReducer.countries)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCountriesList())
  }, [])

  return (
    <div>
      <CountryFromList countries={countries} />
    </div>
  );
}

export default CountriesList