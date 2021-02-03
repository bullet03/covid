import styles from "./CountryImage.module.css"
import { useEffect, useState } from 'react'
import Preloader from "../../PreLoader"

const COUNTRIES_LIST = [
  {Bangladesh: "bd"},
  {Brazil: "br"},
  {China: "cn"},
  {India: "in"},
  {Indonesia: "id"},
  {Mexico: 'mx'},
  {Nigeria: "ng"},
  {Pakistan: "pk"},
  {Russia: "ru"},
  {US: "us"}
]

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
      <img className={styles.image} alt="" src={`https://flagcdn.com/256x192/${abbreviation}.png`} />
  )
}

export default CountryImage