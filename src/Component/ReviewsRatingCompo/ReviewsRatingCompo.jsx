import React from 'react'

function ReviewsRatingCompo({rating}) {
   // Convert rating string to a number and round to nearest half
   const parsedRating = parseFloat(rating);
   const fullStars = Math.floor(parsedRating);
   const halfStar = parsedRating % 1 !== 0;
   const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
 
   return (
     <div style={{ display: 'flex', alignItems: 'center' }}>
       {/* Render full stars */}
       {[...Array(fullStars)].map((_, index) => (
         <span key={index} style={{ color: 'gold', fontSize: '24px' }}>★</span>
       ))}
       
       {/* Render half star if needed */}
       {halfStar && <span style={{ color: 'gold', fontSize: '24px' }}>★</span>}
       
       {/* Render empty stars */}
       {[...Array(emptyStars)].map((_, index) => (
         <span key={index} style={{ color: 'gray', fontSize: '24px' }}>★</span>
       ))}
     </div>
   );
}

export default ReviewsRatingCompo