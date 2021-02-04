import CountriesListWithData from "./CountriesListWithData";
import Pagination from './Pagination'
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getCountriesList } from '../../redux/reducers/countriesListReducer'
// import { useHistory } from "react-router-dom";
import styles from './CountriesList.module.css'

function CountriesList () {

  const dispatch = useDispatch()
  const countries = useSelector((store) => store.countriesListReducer.countries)
  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPerPage, setCountriesPerPagePerPage] = useState(4)
  const [loading, setLoading] = useState(false)
  // const [ref, setRef] = useState()

  useEffect(() => {
    dispatch(getCountriesList())
    setLoading(true)
  }, [])

  // let history = useHistory();

  // function handleClick() {
  //   history.push(`${ref}`);
  // }

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
      <CountriesListWithData countries={currentCountries} loading={loading} />
      <Pagination
        countriesPerPage={countriesPerPage}
        totalCountries={countries.length}
        paginate={paginate}
      />
      {/* <button type="button" onClick={handleClick}>
        Go home
      </button>
      <input type="text" onChange={(e) => setRef(e.target.value)} /> */}
    </div>
  );
}

export default CountriesList