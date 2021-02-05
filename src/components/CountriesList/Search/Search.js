import { useHistory } from "react-router-dom";

const Search = (props) => {

  const { reference, setReference } = props;
  let history = useHistory()

  function handleClick() {
    history.push(`${reference}`);
  }

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Find Country
      </button>
      <input type="text" onChange={(e) => setReference(e.target.value)} placeholder="e.g. Bangladesh etc."/>
    </div>
  );
}
export default Search