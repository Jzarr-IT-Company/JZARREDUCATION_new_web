import React, { useState } from "react";
import "./Rating.css"; // CSS file for star styles

const Rating = () => {
  const [rating, setRating] = useState(0); // State to manage the selected rating
  const [hover, setHover] = useState(0);   // State to manage the hover state

  return (
    <div className="rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={"on"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default Rating;
