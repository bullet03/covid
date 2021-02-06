import { useHistory } from "react-router-dom";
import styles from './Search.module.css'

const Search = (props) => {

  const { reference, setReference } = props;
  let history = useHistory()

  function handleClick() {
    history.push(`${reference}`);
  }

  return (
    <div className={styles.center}>
      <button className={styles.button} type="button" onClick={handleClick}>
        Find Country
      </button>
      <input className={styles.input} type="text" onChange={(e) => setReference(e.target.value)} placeholder="e.g. Bangladesh etc."/>
    </div>
  )
}
export default Search