import React from 'react';
import Pagination from '@mui/material/Pagination';
import '../css/Pagination.css';

const PaginationControlled = ({ totalPosts, postsPerPage, setcurrentPage, currentpage }) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const handleChange = (event, newPage) => {
    setcurrentPage(newPage);
  };



  
  return (
    <div className='Pagination'>
      <Pagination
        count={totalPages}
        page={currentpage}
        onChange={handleChange}
        className="Page"
      />
      <p></p>
    </div>
  );
};

export default PaginationControlled;
