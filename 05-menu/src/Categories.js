import React from 'react';

const Categories = ({changeSelected}) => {

  return (
      <div className="btn-container">
          <button onClick={() => changeSelected("all")} type="button" className="filter-btn">All</button>
          <button onClick={() => changeSelected("breakfast")}  type="button" className="filter-btn">Breakfast</button>
          <button onClick={() => changeSelected("lunch")}  type="button" className="filter-btn">Lunch</button>
          <button onClick={() => changeSelected("shakes")}  type="button" className="filter-btn">Shakes</button>
      </div>
  )
};

export default Categories;
