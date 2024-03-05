import React, { useState } from "react";
import icons from "../../../../utils/icons/icons";
import NewWorkSpace from "./components/newWorkSpace/newWorkSpace";
import NewProject from "./components/newProject/newProject";

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

const Dashsidebar: React.FC = () => {
  const [isListVisible, setListVisible] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenPro, setModalProOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [itemVisibility, setItemVisibility] = useState<{
    [key: number]: boolean;
  }>({});
  const [hoveredSubItem, setHoveredSubItem] = useState<number | null>(null);

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

  const toggleListVisibility = () => {
    setListVisible(!isListVisible);
  };

  const toggleItemVisibility = (index: number) => {
    setItemVisibility((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalProOpen(false);
  };
  const handleItemClick = (item: Item) => {
    console.log(`آیتم ${item.name} با شناسه ${item.id} انتخاب شد.`);
  };

  const handleSubItemClick = (subItem: SubItem) => {
    console.log(`آیتم ${subItem.name} با شناسه ${subItem.id} انتخاب شد.`);
  };

  return (
    <>
      <div dir="rtl">
        <div
          className={`transition slide-down ${
            isListVisible
              ? "slide-down-enter slide-down-enter-active"
              : "slide-down-exit slide-down-exit-active"
          }`}
          style={{ width: 274 }}
        >
          <div className="flex justify-between py-2">
            <h2 className="text-base font-extrabold">ورک اسپیس ها</h2>
            <button onClick={toggleListVisibility}>
              {isListVisible
                ? icons.chevron_down("black", "20px")
                : icons.chevron_right("black", "20px")}
            </button>
          </div>
          {isListVisible && (
            <div
              className={`transition slide-down ${
                isListVisible
                  ? "slide-down-enter slide-down-enter-active"
                  : "slide-down-exit slide-down-exit-active"
              }`}
            >
              <div className="flex justify-center items-center bg-gray-100/80 rounded my-3 pr-2 h-8">
                {icons.search("black", "20px")}
                <input
                  type="text"
                  placeholder="جستجو کنید"
                  className="bg-gray-100/80 rounded pr-2"
                  style={{ width: 274 }}
                />
              </div>
              <button
                className="bg-gray-400 rounded-md py-2 mb-1 flex justify-center items-center gap-1"
                style={{ width: 274 }}
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                {icons.plus_square("black", "24px")}
                ساختن اسپیس جدید
              </button>
              <div className="text-right my-2">
                <ul>
                  {workSpaceData.map((item, index) => (
                    <li
                      key={item.id}
                      style={{ cursor: "pointer" }}
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <div className="flex items-center justify-between gap-[5px] p-1 my-2 hover:bg-[#FAFAFA] rounded">
                        <div className="flex items-center gap-[5px]">
                          <span
                            className="w-[15px] h-[15px] rounded-[4px] inline-block"
                            style={{ backgroundColor: item.color }}
                          ></span>
                          <button onClick={() => toggleItemVisibility(item.id)}>
                            {item.name}
                          </button>
                        </div>
                        {hoveredItem === item.id && (
                          <button
                            onClick={() => handleItemClick(item)}
                            className=" px-2"
                          >
                            {icons.dots("#323232", "20px")}
                          </button>
                        )}
                      </div>
                      {itemVisibility[item.id] && (
                        <ul className="indent-5">
                          {item.sublist.length === 0 ? (
                            <button
                              className="my-1 mr-[-20px] border-2 border-[#208d8e] text-[#208d8e] rounded-lg p-1 w-[274px] hover:bg-[#208d8e] hover:text-white"
                              onClick={() => {
                                setModalProOpen(true);
                              }}
                            >
                              ساختن پروژه جدید
                            </button>
                          ) : (
                            item.sublist.map((subItem, subIndex) => (
                              <li
                                key={subIndex}
                                className="hover:bg-[#FAFAFA] focus:bg-[#e9f9ff] rounded py-2 relative flex items-center justify-between"
                                onMouseEnter={() =>
                                  setHoveredSubItem(subItem.id)
                                }
                                onMouseLeave={() => setHoveredSubItem(null)}
                              >
                                {subItem.name}
                                {hoveredItem === item.id &&
                                  hoveredSubItem === subItem.id && (
                                    <button
                                      className="px-3"
                                      onClick={() =>
                                        handleSubItemClick(subItem)
                                      }
                                    >
                                      {icons.dots("#323232", "20px")}
                                    </button>
                                  )}
                              </li>
                            ))
                          )}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      {modalOpen && (
        <NewWorkSpace modalOpen={modalOpen} handleClose={handleCloseModal} />
      )}
      {modalOpenPro && (
        <NewProject
          modalOpenPro={modalOpenPro}
          handleClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default Dashsidebar;
