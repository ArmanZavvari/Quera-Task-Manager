import React, { useState, useEffect } from "react";
import Button from "../common/button";
import icons from "../../utils/icons/icons";
import { workSpaces } from "../../services/workSpaceService";
import { projects } from "../../services/projectService";
import { WorkSpacesData } from "../../types/types";

const WorkSpaces: React.FC = () => {
  const [workSpaceData, setWorkSpaceData] = useState<WorkSpacesData[]>([]);

  useEffect(() => {
    workSpaces()
      .then((response) => {
        getProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching workspaces:", error);
        console.log(error);
      });
  }, []);

  const getProjects = (workspaces: WorkSpacesData[]) => {
    const data: WorkSpacesData[] = [];
    workspaces.map(async (workspace) => {
      projects(workspace.id)
        .then((response) => {
          data.push({ ...workspace, projects: response.data });
        })
        .catch((error) => {
          console.error("Error fetching projects:", error);
        })
        .finally(() => {
          setWorkSpaceData(data);
        });
    });
  };

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
          <div className="border-b-2 border-gray-100 pb-8" key={item.id}>
            <h2 className="text-2xl my-8 font-extrabold text-gray-700">
              {item.name}
            </h2>
            <div className="flex">
              {item.projects.length === 0 ? (
                <button
                  className={`bt-3 flex items-center gap-x-1 text-base font-extrabold ml-8 rounded-2xl w-[200px] h-[80px] justify-center border-box border-4 border-transparent`}
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
                item.projects.map((element: any) => (
                  <Button
                    key={element.id}
                    text={element.name}
                    onClick={handleClickBut}
                    className="rounded-2xl text-base font-extrabold ml-8"
                    width={"200px"}
                    height={"80px"}
                    textColor="black"
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
