import React, { useState } from 'react';
import ItemsList from './ItemsList';
import movies from '../data';

const NumberPaginationExample = () => {
  const [items] = useState(movies);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const onPageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  console.log(startIndex)
  const endIndex = startIndex + itemsPerPage;
  console.log(endIndex)
  const currentItems = items.slice(startIndex, endIndex);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <h1>Number Pagination Example</h1>
      <ItemsList items={currentItems} />
      <nav>
        <ul className="pagination">
          {pageNumbers.map(pageNumber => (
            <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}>
              <button className="page-link" onClick={() => onPageChange(pageNumber)}>
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NumberPaginationExample;