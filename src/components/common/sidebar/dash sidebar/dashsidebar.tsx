import React, { useEffect, useState } from "react";
import icons from "../../../../utils/icons/icons";
import NewWorkSpace from "./components/newWorkSpace/newWorkSpace";
import NewProject from "./components/newProject/newProject";
import { ProjectData, WorkSpacesData } from "../../../../types/types";
import { workSpaces } from "../../../../services/workSpaceService";
import { projects } from "../../../../services/projectService";
import { response } from "express";

const Dashsidebar: React.FC = () => {
  const [isListVisible, setListVisible] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenPro, setModalProOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [itemVisibility, setItemVisibility] = useState<{
    [key: number]: boolean;
  }>({});
  const [hoveredSubItem, setHoveredSubItem] = useState<string | null>(null);
  const [id, setId] = useState<string>("");
  const [workSpaceData, setWorkSpaceData] = useState<WorkSpacesData[]>([]);
  const [projectData, setProjectData] = useState<ProjectData[]>([]);
  useEffect(() => {
    console.log("projectData", projectData);
    // });
  }, [projectData]);
  useEffect(() => {
    workSpaces()
      .then((response) => {
        setWorkSpaceData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching workspaces:", error);
        console.log(error);
      });
    //   projects(workSpaceData.id)
    // .then((response) => {
    //   setProjectData(response.data);
    //   console.log("hi");
    // })
    // .catch((error) => {
    //   console.error("Error fetching projects:", error);
    //   console.log("err");
    //   console.log(id);
    // });
  }, []);

  // useEffect(() => {
  //   // projects(workSpaceData.id)
  //   //   .then((response) => {
  //   //     setProjectData(response.data);
  //   //     console.log("hi");
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error("Error fetching projects:", error);
  //   //     console.log("err");
  //   //     console.log(id);
  //   //   });
  //   console.log("workSpaceData", workSpaceData);
  //   workSpaceData.map;
  // }, [id, workSpaceData]);

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
  const handleItemClick = (item: WorkSpacesData) => {
    console.log(`آیتم ${item.name} با شناسه ${item.id} انتخاب شد.`);
  };

  const handleSubItemClick = (item: ProjectData) => {
    console.log(`آیتم ${item.name} با شناسه ${item.id} انتخاب شد.`);
  };
  const handleProject = (response: any, item: any) => {};

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
                          <button
                            onClick={() => {
                              toggleItemVisibility(Number(item.id));
                              projects(item.id)
                                .then((response) => {
                                  const newArray = response.data.map(
                                    (v: any) => ({ ...v, workspaceId: item.id })
                                  );
                                  console.log(newArray);

                                  setProjectData([...projectData, ...newArray]);
                                })
                                .catch((error) => {
                                  console.error(
                                    "Error fetching projects:",
                                    error
                                  );
                                  console.log("err");
                                  console.log(id);
                                });
                            }}
                          >
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
                      {itemVisibility[Number(item.id)] && (
                        <ul className="indent-5">
                          {projectData.map((sub) =>
                            sub.workspaceId !== item.id ? (
                              ""
                            ) : Array.isArray(sub) && sub.length === 0 ? (
                              <button
                                key={`${item.id}-new-project-button`}
                                id={item.id}
                                className="my-1 mr-[-20px] border-2 border-[#208d8e] text-[#208d8e] rounded-lg p-1 w-[274px] hover:bg-[#208d8e] hover:text-white"
                                onClick={() => {
                                  setModalProOpen(true);
                                  setId(item.id);
                                  console.log(item.id);
                                }}
                              >
                                ساختن پروژه جدید
                              </button>
                            ) : (
                              Array.isArray(sub) &&
                              sub.map((items: ProjectData) => (
                                <li
                                  key={items.id}
                                  className="hover:bg-[#FAFAFA] focus:bg-[#e9f9ff] rounded py-2 relative flex items-center justify-between"
                                  onMouseEnter={() =>
                                    setHoveredSubItem(items.id)
                                  }
                                  onMouseLeave={() => setHoveredSubItem(null)}
                                >
                                  {items.name}
                                  {hoveredItem === item.id &&
                                    hoveredSubItem === items.id && (
                                      <button
                                        className="px-3"
                                        onClick={() =>
                                          handleSubItemClick(items)
                                        }
                                      >
                                        {icons.dots("#323232", "20px")}
                                      </button>
                                    )}
                                </li>
                              ))
                            )
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
          id={id}
          modalOpenPro={modalOpenPro}
          handleClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default Dashsidebar;
