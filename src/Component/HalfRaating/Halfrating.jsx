// import React, { useState } from "react";
// import "./HalfRating.css"; 

// const HalfRating = () => {
//   const [rating, setRating] = useState(4.5); // Set initial rating to 3 stars

//   return (
//     <div className="rating">
//       {[...Array(5)].map((star, index) => {
//         index += 1;
//         return (
//           <button
//             type="button"
//             key={index}
//             className={index <= rating ? "on" : "off"} // Only first 3 stars will be colored
//             onClick={() => setRating(index)}
//           >
//             <span className="star">&#9733;</span>
//           </button>
//         );
//       })}
//     </div>
//   );
// };

// export default HalfRating;

import React, { useState } from "react";
import "./HalfRating.css"; // CSS file for star styles

const Rating = () => {
  const [rating, setRating] = useState(4.6); // Set initial rating to 4.7 stars

  return (
    <div className="rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= Math.floor(rating) ? "on" : (index - rating <= 0.3 && index - rating > 0) ? "partial" : "off"} // Logic for full, partial, and off stars
            onClick={() => setRating(index)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default Rating;
