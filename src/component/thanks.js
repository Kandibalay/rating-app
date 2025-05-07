import Image from "next/image";
import POS from "../../public/images/illustration-thank-you.svg";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function Thanks({handleReturnToRating, selectedRating}) {
  
  return (
    <div className="flex flex-col bg-gray-800 items-center justify-center w-[80%] md:w-[40%] lg:w-[30%] xl:w-[25%] mx-auto mt-40 gap-4 p-6 rounded-lg max-w-[400px]">
      <div>
        <Image src={POS} alt="thank-you" width={100} height={100} className="mx-auto" />
      </div>
      <div className="text-[#fb7413] bg-[#252d37] px-3 py-1 rounded-full font-semibold text-[12px] text-center">
        You selected {selectedRating} out of 5
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-[18px] text-center">Thank you!</h2>
        <p className="text-[12px] text-[#959eac] font-extralight text-center">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
        <button onClick={handleReturnToRating} type="submit" className="flex bg-[#fb7413] items-center justify-center gap-1 w-[40%] mx-auto py-1 text-[#121417] font-semibold uppercase text-[10px] rounded-full hover:bg-white transition-colors"><span><IoIosArrowRoundBack className="text-[18px]"/></span>Back</button>
      </div>
    </div>
  );
}
