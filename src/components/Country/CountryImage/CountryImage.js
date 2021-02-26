import styles from "./CountryImage.module.css"
import { useEffect, useState } from 'react'
import Preloader from "../../PreLoader"
import { COUNTRIES_LIST } from '../../../consts/consts'

const CountryImage = (props) => {
  const [abbreviation, setAbbreviation] = useState()
  useEffect(() => {
    COUNTRIES_LIST.forEach((it) => {
      if (Object.keys(it)[0] === props.id) {
        setAbbreviation(Object.values(it)[0]);
      }
    })
  }, [])

  if(!abbreviation) {
    return <Preloader />
  }


  return (
      <img className={styles.image} alt="country_image" src={`https://flagcdn.com/256x192/${abbreviation}.png`} />
  )
}

export default CountryImage