import { useState, useEffect } from 'react'
import axios from 'axios'


const COUNTRIES = ["Afghanistan", 'Armenia', "France"]

function App() {
  const [base, setBase] = useState()
  useEffect(() => {

    axios.get("https://covid-api.mmediagroup.fr/v1/cases")
      .then(response => {
        debugger
        setBase(response.data)
      })

  }, [])

  return (
    <div>
      {base ? Object.values(base).map((it, index) => {
        if (COUNTRIES.indexOf(it.All.country) !== -1) {
          return <div key={index}>{it.All.country}</div>;
        }
      }) : 'Loading...'}
      {/* {JSON.stringify(base)} */}
    </div>
  );
}

export default App;
