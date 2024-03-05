import React, { useState } from "react";
import icons from "../../../../utils/icons/icons";
import NewWorkSpace from "./components/newWorkSpace/newWorkSpace";
import NewProject from "./components/newProject/newProject";

const Dashsidebar: React.FC = () => {
  const [isListVisible, setListVisible] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenPro, setModalProOpen] = useState(false);
  const [itemVisibility, setItemVisibility] = useState<boolean[]>([
    true,
    true,
    true,
  ]);

  const toggleListVisibility = () => {
    setListVisible(!isListVisible);
  };

  const toggleItemVisibility = (index: number) => {
    const updatedVisibility = [...itemVisibility];
    updatedVisibility[index] = !updatedVisibility[index];
    setItemVisibility(updatedVisibility);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalProOpen(false);
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
                  <li style={{ cursor: "pointer" }}>
                    <div className="sb-li py-2">
                      <span className="sq1"></span>
                      <button
                        onClick={() => toggleItemVisibility(0)}
                        className="text-base"
                      >
                        درس مدیریت پروژه
                      </button>
                    </div>
                    {itemVisibility[0] && <ul className="indent-5"></ul>}
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    <div className="sb-li py-2">
                      <span className="sq2"></span>
                      <button onClick={() => toggleItemVisibility(1)}>
                        کارهای شخصی
                      </button>
                    </div>
                    {itemVisibility[1] && (
                      <ul className="indent-5">
                        <li className="li-hov rounded py-2">پروژه اول</li>
                        <li className="li-hov rounded py-2">پروژه دوم</li>
                      </ul>
                    )}
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    <div className="sb-li py-2">
                      <span className="sq3"></span>
                      <button onClick={() => toggleItemVisibility(2)}>
                        درس کامپایلر
                      </button>
                    </div>
                    {itemVisibility[2] && (
                      <button
                        className="sb-li-bt my-1"
                        onClick={() => {
                          setModalProOpen(true);
                        }}
                      >
                        ساختن پروژه جدید
                      </button>
                    )}
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    <div className="sb-li py-2">
                      <span className="sq4"></span>
                      <button onClick={() => toggleItemVisibility(3)}>
                        درس طراحی الگوریتم
                      </button>
                    </div>
                    {itemVisibility[3] && (
                      <button className="sb-li-bt my-2">
                        ساختن پروژه جدید
                      </button>
                    )}
                  </li>
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
