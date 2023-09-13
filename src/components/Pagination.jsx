import * as React from 'react';

const Pagination = ({totalPosts , postsPerPage, setcurrentPage, currentpage})  =>{

    let pages = [];

    for (let i = 1; i <=Math.ceil(totalPosts/postsPerPage); i++) {
        pages.push(i);
    }

  return (
    <div className='Pagination'>
    {pages.map((page, index) =>{
        return <button key={index} 
        onClick={() => setcurrentPage(page)}
        className={page == currentpage ? 'Active' : ''}>
            {page}</button>;
    })}
    
    </div>
    );
  
};

export default Pagination;

//C:\Users\gouve\Documents\DEV\pokedex\src\components\Pagination.jsx