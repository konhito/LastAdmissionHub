import React from "react";

interface StarRatingProps {
  rating: number;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, className = "" }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className={`flex items-center justify-center ${className}`}>
      {[...Array(5)].map((_, index) => (
        <span key={index} className="text-[#d9c498] text-xl">
          {index < fullStars
            ? "★"
            : hasHalfStar && index === fullStars
            ? "★"
            : "★"}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
