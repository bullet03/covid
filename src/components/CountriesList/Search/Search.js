import { useHistory } from "react-router-dom";
import styles from './Search.module.css'
import { COUNTRIES } from "../../../consts";
import { useState } from "react";

const Search = (props) => {

  const [alert, setAlert] = useState('')
  const { reference, setReference } = props;
  let history = useHistory()

  function referenceCheck() {
    if (!COUNTRIES.includes(reference)) {
      setAlert("a mistake or wrong country name");
      return;
    }
    history.push(`${reference}`);
  }

  function handleClick() {
    referenceCheck()
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      referenceCheck();
    }
  }

  return (
    <aside>
      <p className={styles.alert}>{alert}</p>
      <button className={styles.button} type="button" onClick={handleClick}>
        Find Country
      </button>
      <input
        className={styles.input}
        type="text"
        onChange={(e) => setReference(e.target.value)}
        onKeyPress={(e) => handleKeyPress(e)}
        placeholder="e.g. Bangladesh etc."
      />
    </aside>
  );
}
export default Search