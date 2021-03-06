import { useState } from 'react';
import styles from './Pagination.module.css'

const Pagination = (props) => {

  const { countriesPerPage, totalCountries, paginate } = props;
  const [active, setActive] = useState()
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
      <div className={styles.pagination}>
        {pageNumbers.map((number) => {
          return (
            <a
              onClick={() => {
                paginate(number);
                setActive(number);
              }}
              href="#"
              key={number}
              className={`${number === active ? styles.active : ""}`}
            >
              {number}
            </a>
          );
        })}
      </div>
  );
}

export default Pagination