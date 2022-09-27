import React from 'react';

const Card = (props) => {
    // console.log(props?.food)
    // const { strMealThumb } = food;
    const {
      strMealThumb,
      strMeal
    } = props?.food;
    const { handleBookMark } = props;
    return (
      <div data-aos="flip-left">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={strMealThumb} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {strMeal}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div
                className="btn btn-outline"
                onClick={() => handleBookMark(strMeal)}
              >
                Bookmark
              </div>
              <div className="btn btn-outline">Buy</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Card;