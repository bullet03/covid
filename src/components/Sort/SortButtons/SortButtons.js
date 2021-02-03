import styles from './SortButtons.module.css'

function SortButtons (props) {

  const { dispatch } = props

  return (
    <div className={styles.btnGroup} >
        <button className={styles.button} onClick={() => {dispatch({type: 'covid_sort'})}}>
          COVID sort
        </button>
        <button className={styles.button} onClick={() => {dispatch({type: 'death_sort'})}}>
          Deaths sort
        </button>
        <button className={styles.button} onClick={() => {dispatch({type: 'mln_sort'})}}>
          Mln. sort
        </button>
    </div>
  )
}

export default SortButtons