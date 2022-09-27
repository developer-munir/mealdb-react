import React, { useState } from 'react';

const Selected = ({ bookmark, mealid }) => {
  return (
    <div>
      <h1>I am selected items</h1>
      <ul>
        {bookmark.map((info) => (
          <li key={info.idMeal}>{info.strMeal}</li>
        ))}
      </ul>
    </div>
  );
};

export default Selected;