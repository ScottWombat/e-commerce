import React,{useState} from "react";
import * as styles from './products.module.css';
const Pagination = ({ productsPerPage, totalProducts, currentPage, paginate }) => {
  const [checked, setChecked] = useState(true)
  const next_page = currentPage + 1;
  const current_records = productsPerPage * currentPage;
  const showLoadMore = current_records < totalProducts;
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={styles.pagination_wrapper}>
      <div className={styles.pagination_text}>You have viewed {current_records} of {totalProducts} products</div>
      {showLoadMore &&
        <div className={styles.pagination_button}>
          <a onClick={() => paginate(next_page)}>load more1</a>
        </div>
      }
      <div className={styles.paging + ' '+ styles.p4}>
      <ul>
      {pageNumbers.map(number => (
        <a className={currentPage === number ? styles.is_active : ""} onClick={() => paginate(number)}><li></li></a>
      ))}
      </ul>
      </div>

    </div>
  );
}

export default Pagination;