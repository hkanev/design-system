import React, { useState } from "react";
import "./Pagination.scss";

export default function Pagination() {
  const [pagination, setPagination] = useState({
    totalItems: 24,
    currentPage: 3,
    itemsPerPage: 6,
  });

  function changeCurrentPage(newPage) {
    setPagination(() => {
      return {
      ...pagination,
      currentPage: newPage
    }});
  }

  function renderPages(pagination) {
    const totalPages = Math.ceil(
      pagination.totalItems / pagination.itemsPerPage
    );
    let content = [];
    let firstVisiblePage = 1;
    let lastVisiblePage = totalPages;
    if (totalPages > 3) {
      firstVisiblePage = pagination.currentPage - 1;
      lastVisiblePage = pagination.currentPage + 1;
    }
    if (pagination.currentPage == 1) {
      firstVisiblePage = 1;
    }
    if (pagination.currentPage == totalPages) {
      lastVisiblePage = pagination.currentPage;
    }

    for (let i = firstVisiblePage; i <= lastVisiblePage; i++) {
      content.push(<li className={i == pagination.currentPage ? 'active' : ''} onClick={() => changeCurrentPage(i)}>{i}</li>);
    }

    return content;
  }

  return (
    <ul className="pagination">
      <li>Prev</li>
      {renderPages(pagination)}
      <li>Next</li>
    </ul>
  );
}
