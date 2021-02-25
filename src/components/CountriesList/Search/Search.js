import { useHistory } from "react-router-dom";
import styles from './Search.module.css'
import COUNTRIES from "../../../assets/consts";

const Search = (props) => {

  const { reference, setReference } = props;
  let history = useHistory()

  function handleClick() {
    if (!COUNTRIES.includes(reference)) {
      alert("a mistake, please type in one from the abovementioned list");
      return;
    }
    history.push(`${reference}`);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      if (!COUNTRIES.includes(reference)) {
        alert("a mistake, please type in one from the abovementioned list");
        return;
      }
      history.push(`${reference}`);
    }
  }

  return (
    <aside>
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