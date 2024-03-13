import React, { useState, useEffect } from "react";
import axios from "axios";
import icons from "../../utils/icons/icons";
import ProfilePicture from "../common/profilePicture/profilePicture";
import List from "../listApi/listApi";
import { useParams } from "react-router-dom";
import config from "../../config.json";

const Card: React.FC<{ name: string }> = ({ name }) => {
  return <div>{name}</div>;
};

const ListComponent: React.FC = () => {
  const [showTasks, setShowTasks] = useState<boolean>(false);
  const [listed, setListed] = useState<any[]>([]);
  const { wid, pid } = useParams<{ wid: string; pid: string }>();
  const [boards, setBoards] = useState<any[]>([]);

  const toggleTasks = () => {
    setShowTasks(!showTasks);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("access");

    axios
      .get(config.apiUrl + `/workspaces/${wid}/projects/${pid}/boards/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        setBoards(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [wid, pid]);

  return (
    <div dir="rtl" className="flex flex-col w-[986px] mt-4">
      <div className="flex items-center ">
        <div className="flex items-center w-[493px]">
          {icons.chevron_down_circle("#323232", "20px")}
          <button
            className="bg-pink-500 text-white border rounded-md py-1 px-3"
            onClick={toggleTasks}
          >
            pending
          </button>
        </div>
        <div className="flex items-center justify-between w-[493px]">
          <p>اعضا</p>
          <p>ددلاین</p>
          <p>اولویت</p>
          <p>توضیحات</p>
        </div>
      </div>
      {showTasks && (
        <div>
          {boards.map((board) => (
            <div key={board.id}>
              {board.tasks.map((task: any, index: number) => (
                <List key={index} item={task} />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListComponent;
