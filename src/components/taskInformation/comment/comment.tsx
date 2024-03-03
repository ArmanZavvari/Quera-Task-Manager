import React, { useState, useRef, useEffect } from "react";
import icons from "../../../utils/icons/icons";

const Comment: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [comment, setComment] = useState<string>("");
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleInputClick = () => {
    setExpanded(!expanded);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    console.log("ارسال کامنت:", comment);
    setComment("");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={wrapperRef} dir="rtl">
      <div
        className={`absolute top-0 left-0 w-full ${
          expanded
            ? "-mt-40 bg-white shadow-sm rounded-e-xl rounded-t-xl p-2 h-[209px]"
            : "border-t"
        }`}
        style={{ boxShadow: expanded ? "0px -7px 18px -10px #00000040" : "" }}
      >
        <textarea
          value={comment}
          onClick={handleInputClick}
          onChange={handleInputChange}
          className={`p-2 w-full resize-none outline-none ${
            expanded ? "h-[135px]" : "h-10 rounded-e-xl "
          }`}
          placeholder={`${expanded ? "کامنت" : "کامنت شما"}`}
        />
        <div className="absolute top-3 left-5">
          {icons.comment("#AEAEAE", "20px")}
        </div>
        {expanded && (
          <div className="flex justify-between items-center transition-opacity duration-500 ease-in-out">
            <div className="flex items-center gap-x-5 mr-3">
              <button>{icons.email("#C9CBDA", "24px")}</button>
              <button>{icons.link("#C9CBDA", "24px")}</button>
              <button>{icons.paper("#C9CBDA", "24px")}</button>
              <button>{icons.emoji("#C9CBDA", "24px")}</button>
            </div>
            <button
              onClick={handleSubmit}
              className="bg-[#208D8E] text-white px-3 py-1 mt-2 ml-3 rounded-lg text-sm font-extrabold"
            >
              ثبت کامنت
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
