import CountriesListWithData from "./CountriesListWithData";
import Pagination from './Pagination'
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getCountriesList } from '../../redux/reducers/countriesListReducer'
import styles from './CountriesList.module.css'

function CountriesList () {

  const dispatch = useDispatch()
  const countries = useSelector((store) => store.countriesListReducer.countries)
  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPerPage, setCountriesPerPagePerPage] = useState(4)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    dispatch(getCountriesList())
    setLoading(true)
  }, [])


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
    </div>
  )
}

export default CountriesList