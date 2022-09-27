import React from 'react';
import Card from '../Card/Card';

const Foods = (props) => {
    // console.log(props)
    return (
      <div>
            <Card
                food={props.food}
                handleBookMark={props.handleBookMark}
            ></Card>
      </div>
    );
};

export default Foods;