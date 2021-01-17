import { useParams } from "react-router-dom"
import axios from 'axios'
import { useState, useEffect } from 'react'
import CountryImage from "./CountryImage"

const Country = () => {

  const { id } = useParams()
  const [country, setCountry] = useState()
  const [covDetRation, setCovDetRation] = useState(0)
  const [popCovRation, setPopCovRation] = useState(0)
  useEffect(() => {
    axios.get("https://covid-api.mmediagroup.fr/v1/cases")
      .then(response => {
        setCountry(response.data)
      })
  }, [])


  return (
    <div>
      {country ? Object.values(country).map((it, index) => {
        if(id === it.All.country) {
          return (
            <div key={index}>
              <CountryImage id={id}/>
              <div>{it.All.country}</div>
              <div>Total cases of COVID: {it.All.confirmed}</div>
              <div>Total deaths: {it.All.deaths}</div>
              <div>Population: {it.All.population}</div>
              <div><button type="button" onClick={()=>{setCovDetRation(it.All.confirmed / it.All.deaths)}}>COVID/death ratio</button></div>
              <div><button type="button" onClick={()=>{setPopCovRation(it.All.population / it.All.confirmed)}}>Popualtion/COVID ratio</button></div>
              <div>{covDetRation}</div>
              <div>{popCovRation}</div>
            </div>
          );
        }
      }): 'Loading...'}


    </div>
  )
}

export default Country