import React from 'react';

const Selected = ({ bookmark }) => {
  // console.log(bookmark);
  return (
    <div>
      <h1>I am selected items</h1>
      <ul>
        {bookmark.map((info) => (
          <li>{info.strMeal}</li>
        ))}
      </ul>
    </div>
  );
};

export default Selected;