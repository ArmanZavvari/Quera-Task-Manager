import React from "react";
import Button from "../common/button";
import icons from "../../utils/icons/icons";
const handleClickBut = () => {
  console.log("sup");
};
const WorkSpaces: React.FC = () => {
  return (
    <div className="mr-7 mt-8">
      <div className="border-b-2 border-gray-100 pb-8">
        <h2 className="text-2xl my-8 font-extrabold text-gray-700">
          درس مدیریت پروژه
        </h2>
        <div className="flex ">
          <Button
            text={"پروژه اول"}
            onClick={handleClickBut}
            className="bt-1 rounded-2xl text-base font-extrabold ml-8"
            width={"200px"}
            height={"80px"}
            textColor="white"
          />
          <Button
            text={"پروژه دوم"}
            onClick={handleClickBut}
            className="bt-1 rounded-2xl text-base font-extrabold ml-8"
            width={"200px"}
            height={"80px"}
            textColor="white"
          />
          <Button
            text={"پروژه سوم"}
            onClick={handleClickBut}
            className="bt-1 rounded-2xl text-base font-extrabold ml-8"
            width={"200px"}
            height={"80px"}
            textColor="white"
          />
          <Button
            text={"پروژه چهارم"}
            onClick={handleClickBut}
            className="bt-1 rounded-2xl text-base font-extrabold ml-8"
            width={"200px"}
            height={"80px"}
            textColor="white"
          />
          <Button
            text={"پروژه پنجم"}
            onClick={handleClickBut}
            className="bt-1 rounded-2xl text-base font-extrabold ml-8"
            width={"200px"}
            height={"80px"}
            textColor="white"
          />
        </div>
      </div>
      <div className="border-b-2 border-gray-100 pb-8 ">
        <h2 className="text-2xl my-8 font-extrabold text-gray-700">
          کارهای شخصی
        </h2>
        <div className="flex ">
          <Button
            text={"پروژه اول"}
            onClick={handleClickBut}
            className="bt-2 rounded-2xl text-base font-extrabold ml-8"
            width={"200px"}
            height={"80px"}
            textColor="white"
          />
          <Button
            text={"پروژه دوم"}
            onClick={handleClickBut}
            className="bt-2 rounded-2xl text-base font-extrabold ml-8"
            width={"200px"}
            height={"80px"}
            textColor="white"
          />
          <Button
            text={"پروژه سوم"}
            onClick={handleClickBut}
            className="bt-2 rounded-2xl text-base font-extrabold ml-8"
            width={"200px"}
            height={"80px"}
            textColor="white"
          />
        </div>
      </div>
      <div className="border-b-2 border-gray-100 pb-8 ">
        <h2 className="text-2xl my-8 font-extrabold text-gray-700">
          درس کامپایلر
        </h2>
        <div className="flex ">
          <button className="bt-3 flex items-center gap-x-1  text-base font-extrabold ml-8  w-[200px] h-[80px] justify-center text-red-500">
            {icons.plus_square("red", "20px")}
            <p>ساختن پروژه جدید</p>
          </button>
        </div>
      </div>
      <div className=" pb-8 ">
        <h2 className="text-2xl my-8 font-extrabold text-gray-700">
          درس طراحی الگوریتم
        </h2>
        <div className="flex ">
          <Button
            text={"پروژه اول"}
            onClick={handleClickBut}
            className="bt-4 rounded-2xl text-base font-extrabold ml-8"
            width={"200px"}
            height={"80px"}
            textColor="white"
          />
          <Button
            text={"پروژه دوم"}
            onClick={handleClickBut}
            className="bt-4 rounded-2xl text-base font-extrabold ml-8"
            width={"200px"}
            height={"80px"}
            textColor="white"
          />
          <Button
            text={"پروژه سوم"}
            onClick={handleClickBut}
            className="bt-4 rounded-2xl text-base font-extrabold ml-10"
            width={"200px"}
            height={"80px"}
            textColor="white"
          />
          <Button
            text={"پروژه چهارم"}
            onClick={handleClickBut}
            className="bt-4 rounded-2xl text-base font-extrabold ml-10"
            width={"200px"}
            height={"80px"}
            textColor="white"
          />
        </div>
      </div>
    </div>
  );
};
export default WorkSpaces;
