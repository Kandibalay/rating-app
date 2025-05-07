"use client";
import Image from "next/image";
import Rating from "../../public/images/icon-star.svg";
import { useState } from "react";
import Thanks from "@/component/thanks";
import { MdError } from "react-icons/md";

export default function Home() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const ratingNumbers = [1, 2, 3, 4, 5];

  const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
    setError("");
  };
  const handleSubmit = () => {
    if (selectedRating === null) {
      setError("Please select a rating before submitting");
      return;
    }
    setIsSubmitted(true);
  };
  const handleReturnToRating = () => {
    setIsSubmitted(false);
    setSelectedRating(null);
  };

  const ratingStars = (number) => {
    return (
      <div className="flex gap-3 justify-start">
        {[...Array(number)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-700 w-10 p-3 rounded-full flex items-center justify-center"
          >
            <Image src={Rating} alt="icon-star" width={20} height={20} />
          </div>
        ))}
      </div>
    );
  };

  if (isSubmitted) {
    return (
      <div >
        <Thanks
          selectedRating={selectedRating}
          handleReturnToRating={handleReturnToRating}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-gray-800 items-center justify-center w-[80%] md:w-[40%] lg:w-[30%] xl:w-[25%] mx-auto mt-40 gap-4 p-6 rounded-lg max-w-[400px]">
      <div className="w-full">
        {selectedRating ? (
          ratingStars(selectedRating)
        ) : (
          <div className="bg-gray-700 w-10 p-3 rounded-full">
            <Image src={Rating} alt="icon-star" width={20} height={20} />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-[18px]">How did we do?</h2>
        <p className="text-[12px] text-[#959eac] font-extralight">
          Please Let us Know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-between">
          {ratingNumbers.map((rating) => (
            <button
              key={rating}
              onClick={() => handleRatingSelect(rating)}
              aria-checked={selectedRating === rating}
              role="radio"
              aria-label={`Rate ${rating} out of 5 stars`}
              className="flex bg-gray-700 text-[#959eac]  w-10 h-10 items-center justify-center rounded-full cursor-pointer hover:bg-[#fb7413] hover:text-[#121417] active:bg-white active:text-[#121417]"
            >
              {rating}
            </button>
          ))}
        </div>

        {error && (
          <div
            className="flex gap-1 items-center text-[12px] text-red-500 text-sm  text-center"
            role="alert"
          >
            <span>
              <MdError className="text-[18px]"/>
            </span>{" "}
            {error}
          </div>
        )}

        <button
          type="submit"
          onClick={handleSubmit}
          aria-label="Submit rating"
          className="bg-[#fb7413] py-2 text-[#121417] font-semibold uppercase text-[12px] rounded-full hover:bg-white transition-colors ease-in-out duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
