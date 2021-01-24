import styles from "./CountryButtons.module.css"

function CountryButtons (props) {

  const { setCovDetRation, setPopCovRation, confirmed, deaths, population } = props

  return (
    <div>
      <button
        className={styles.buttonSort}
        type="button"
        onClick={() => {
          setCovDetRation(Math.round(confirmed / deaths));
        }}
      >
        COVID/death
      </button>
      <button
        className={styles.buttonSort}
        type="button"
        onClick={() => {
          setPopCovRation(Math.round(population / confirmed));
        }}
      >
        Popualtion/COVID
      </button>
      <div>
        <button
          className={styles.buttonDefault}
          type="button"
          onClick={() => {
            setPopCovRation()
            setCovDetRation()
          }}
        >
          Discharge
        </button>
      </div>
    </div>
  );
}

export default CountryButtons