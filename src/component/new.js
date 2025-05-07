'use client'
import { useState } from 'react';
import { Star } from 'lucide-react';

export default function RatingInteractive() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const ratingOptions = [1, 2, 3, 4, 5];
  
  const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
    setError('');
  };
  
  const handleSubmit = () => {
    if (selectedRating === null) {
      setError('Please select a rating before submitting');
      return;
    }
    
    setIsSubmitted(true);
  };
  
  const handleReturnToRating = () => {
    setIsSubmitted(false);
    setSelectedRating(null);
  };
  
  // Function to render stars based on rating
  const renderStars = (count) => {
    return (
      <div className="flex gap-3 justify-start">
        {[...Array(count)].map((_, index) => (
          <div 
            key={index}
            className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center"
          >
            <Star 
              size={20}
              fill="#f97316" 
              color="#f97316" 
            />
          </div>
        ))}
      </div>
    );
  };
  
  if (isSubmitted) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white p-6">
        <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full flex flex-col items-center">
          <div className="text-orange-500 mb-4 flex justify-center w-full">
            {renderStars(selectedRating)}
          </div>
          <h2 className="text-2xl font-bold mb-2">Thank you!</h2>
          <p className="text-center text-gray-400 mb-6">
            You selected {selectedRating} out of 5. Your feedback helps us improve our service.
          </p>
          <button 
            onClick={handleReturnToRating}
            className="text-sm text-gray-400 underline hover:text-white transition-colors"
            aria-label="Return to rating screen"
          >
            Rate again
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white p-6">
      <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-start mb-6">
          <div className="p-3 flex justify-center items-center">
            {selectedRating ? renderStars(selectedRating) : (
              <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center">
                <Star size={20} color="#f97316" />
              </div>
            )}
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-2" id="rating-title">How did we do?</h2>
        <p className="text-gray-400 mb-6">
          Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering.
        </p>
        
        <div 
          className="flex justify-between mb-6" 
          role="radiogroup" 
          aria-labelledby="rating-title"
        >
          {ratingOptions.map((rating) => (
            <button
              key={rating}
              className={`h-12 w-12 rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                selectedRating === rating 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
              }`}
              onClick={() => handleRatingSelect(rating)}
              aria-checked={selectedRating === rating}
              role="radio"
              aria-label={`Rate ${rating} out of 5 stars`}
            >
              {rating}
            </button>
          ))}
        </div>
        
        {error && (
          <div className="text-red-500 text-sm mb-4 text-center" role="alert">
            {error}
          </div>
        )}
        
        <button
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-orange-300"
          onClick={handleSubmit}
          aria-label="Submit rating"
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}