import React, { useState } from "react";
import icons from "../../utils/icons/icons";

const CommentTextarea: React.FC = () => {
  const [comment, setComment] = useState<string>("");

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSendComment = () => {
    console.log("Comment sent:", comment);
  };

  return (
    <div className="w-[660px] h-[209px]">
      <textarea
        className="text-right w-full h-full p-2 border rounded-t-lg border-gray-300"
        placeholder="کامنت شما"
        value={comment}
        onChange={handleTextareaChange}
      />
      <div className="flex items-center justify-between">
        <div>
          <button
            className="bottom-2 right-2 px-3 py-2 bg-teal-500 text-white rounded-md"
            onClick={handleSendComment}
          >
            ثبت کامنت
          </button>
        </div>
        <div className="flex items-center">
          <button className="mx-1">{icons.emoji("#C9CBDA", "24px")}</button>
          <button className="mx-1">{icons.paper("#C9CBDA", "24px")}</button>
          <button className="mx-1">{icons.attach("#C9CBDA", "24px")}</button>
          <button className="mx-1">{icons.email("#C9CBDA", "24px")}</button>
        </div>
      </div>
    </div>
  );
};

export default CommentTextarea;
