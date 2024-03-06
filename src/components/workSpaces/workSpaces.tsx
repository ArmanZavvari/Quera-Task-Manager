import React from "react";
import Button from "../common/button";
import icons from "../../utils/icons/icons";

type SubItem = {
  id: number;
  name: string;
};

type Item = {
  id: number;
  name: string;
  color: string;
  sublist: SubItem[];
};

const WorkSpaces: React.FC = () => {
  const workSpaceData: Item[] = [
    {
      id: 1,
      name: "درس مدیریت پروژه",
      color: "#40c057",
      sublist: [
        { id: 1, name: "پروژه اول" },
        { id: 2, name: "پروژه دوم" },
        { id: 3, name: "پروژه سوم" },
        { id: 4, name: "پروژه چهارم" },
        { id: 5, name: "پروژه پنجم" },
        { id: 6, name: "پروژه ششم" },
      ],
    },
    {
      id: 2,
      name: "کارهای شخصی",
      color: "#fab005",
      sublist: [
        { id: 1, name: "پروژه اول" },
        { id: 2, name: "پروژه دوم" },
      ],
    },
    {
      id: 3,
      name: "درس کامپایلر",
      color: "#fa5252",
      sublist: [],
    },
    {
      id: 4,
      name: "درس طراحی الگوریتم",
      color: "#228be6",
      sublist: [
        { id: 1, name: "پروژه اول" },
        { id: 2, name: "پروژه دوم" },
        { id: 3, name: "پروژه سوم" },
        { id: 4, name: "پروژه چهارم" },
      ],
    },
  ];

  const handleClickBut = () => {
    console.log("sup");
  };
  const hexToRgba = (hex: string, opacity: number) => {
    hex = hex.replace(/^#/, "");
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  return (
    <>
      <div className="mr-7 mt-8">
        {workSpaceData.map((item, index) => (
          <div className="border-b-2 border-gray-100 pb-8">
            <h2
              key={item.id}
              className="text-2xl my-8 font-extrabold text-gray-700"
            >
              {item.name}
            </h2>
            <div className="flex">
              {item.sublist.length === 0 ? (
                <button
                  className={`bt-3 flex items-center gap-x-1 text-base font-extrabold ml-8 rounded-2xl w-[200px] h-[80px] justify-center border-box border-4 border-transparent
                  `}
                  style={{
                    boxShadow: "0px 3px 4px 0px rgba(0,0,0,0.2)",
                    background: `linear-gradient(white, white) padding-box,linear-gradient(249.83deg, ${
                      item.color
                    } 0%, ${hexToRgba(item.color, 0.5)} 100%) border-box`,
                    color: item.color,
                  }}
                >
                  {icons.plus_square(item.color, "20px")}
                  <p>ساختن پروژه جدید</p>
                </button>
              ) : (
                item.sublist.map((subItem, subIndex) => (
                  <Button
                    key={subIndex}
                    text={subItem.name}
                    onClick={handleClickBut}
                    className="rounded-2xl text-base font-extrabold ml-8"
                    width={"200px"}
                    height={"80px"}
                    textColor="white"
                    customStyle={{
                      boxShadow: "0px 3px 4px 0px rgba(0,0,0,0.2)",
                      background: `linear-gradient(249.83deg, ${
                        item.color
                      } 0%, ${hexToRgba(item.color, 0.5)} 100%)`,
                    }}
                  />
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default WorkSpaces;
