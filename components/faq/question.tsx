import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface questionprops {
  id?: number;
  title: string;
  info: string;
}

const Question = ({ title, info }: questionprops) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);
  return (
    <article>
      <header
        className={`flex p-[24px] bg-secondary-brown-light-active rounded-t-lg justify-between shadow-lg items-center ${
          !showInfo ? "rounded-b-lg" : ""
        } `}
      >
        <h4 className="font-poppins text-[16px] sm:text-[20px] font-medium">
          {title}
        </h4>
        <button
          className="w-[20px] h-[20px] flex justify-center "
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? (
            <FaChevronUp className="w-[20px] h-[20px]" />
          ) : (
            <FaChevronDown className="w-[20px] h-[20px]" />
          )}
        </button>
      </header>
      {showInfo && (
        <div className=" bg-secondary-brown-light-active px-[24px] pb-[24px] pr-[40px] rounded-b-lg ">
          <p className="font-poppins text-[16px] sm:text-[20px] "> {info}</p>
        </div>
      )}
    </article>
  );
};

export default Question;
