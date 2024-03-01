import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import icons from "../../utils/icons/icons";

type FormData = {
  project: string;
  user: string;
  description: string;
  attachment: File | null;
  cover: File | null;
};

const TaskForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [description, setDescription] = useState("");
  const [projects] = useState(["پروژه ۱", "پروژه ۲"]);

  const [selectedUser, setSelectedUser] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isTaskOpen, setIsTaskOpen] = useState(true);
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const handleUserSelect = (user: string) => {
    setSelectedUser(user);
    setIsOpen(false); // بستن لیست گزینه‌ها پس از انتخاب
  };
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };
  const handleCloseTask = () => {
    setIsTaskOpen(false);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[1150px] border rounded-3xl"
    >
      {isTaskOpen && (
        <>
          <div className="flex justify-between items-center mx-6 my-6">
            <div className="flex justify-between items-center">
              <span className="bg-gray-300 mx-1 w-[16px] h-[16px] rounded ml-2"></span>
              <h2 className=" text-2xl font-medium">عنوان تسک</h2>
            </div>
            <button onClick={handleCloseTask}>
              {icons.close("#BDBDBD", "32px")}
            </button>
          </div>
          <div className="flex mr-6">
            <div className="mb-4 flex items-center">
              <label htmlFor="project" className="p-2">
                در
              </label>
              <select
                {...register("project")}
                id="project"
                className=" border rounded-md py-1 px-3 w-[150px]"
                style={{
                  appearance: "none",
                }}
              >
                {projects.map((project, index) => (
                  <option key={index} value={project}>
                    {project}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4 relative flex items-center ">
              <label htmlFor="user" className="block p-2">
                برای
              </label>
              <div
                className=" border-dashed border-2 rounded-full flex justify-center items-center cursor-pointer w-[34px] h-[34px] "
                onClick={() => setIsOpen(!isOpen)}
              >
                {icons.user_add("gray", "20px")}
                {selectedUser}
              </div>
              {isOpen && (
                <div className="absolute z-10  mt-1 bg-white border rounded">
                  <div
                    className="cursor-pointer py-2 px-4 hover:bg-gray-100"
                    onClick={() => handleUserSelect("کاربر ۱")}
                  >
                    کاربر ۱
                  </div>
                  <div
                    className="cursor-pointer py-2 px-4 hover:bg-gray-100"
                    onClick={() => handleUserSelect("کاربر ۲")}
                  >
                    کاربر ۲
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="mb-7 mt-5 mx-6">
            <label htmlFor="description" className="block mb-1"></label>
            <textarea
              {...register("description")}
              id="description"
              className="w-full border rounded-xl py-4 px-6"
              rows={6}
              placeholder="توضیحاتی برای این تسک بنویسید"
              value={description}
              onChange={handleDescriptionChange}
              style={{ resize: "none" }}
            ></textarea>
          </div>
          <div className="mb-8 mr-6 flex items-center">
            <p className="ml-6">افزودن پیوست :</p>
            <div>
              <label
                htmlFor="attachment"
                className="block custom-file-input-task"
              >
                {icons.attach("#208D8E", "20px")}
                {"  "}
                <p className="pr-1">آپلود فایل</p>
              </label>
              <input
                type="file"
                {...register("attachment")}
                id="attachment"
                className="w-full hidden"
              />
            </div>
          </div>
          <div className="mb-8 mr-6 flex items-center">
            <p className="ml-6">افزودن کاور :</p>
            <div>
              <label htmlFor="cover" className="block custom-file-input-task">
                {icons.attach("#208D8E", "20px")}
                <p className="pr-1">آپلود فایل</p>
              </label>
              <input
                type="file"
                {...register("cover")}
                id="cover"
                className="w-full hidden"
              />
            </div>
          </div>
          <div className="flex items-center justify-between m-6">
            <div className="flex items-center gap-x-5">
              <button className="rounded-full border-dashed border-2 p-2 flex justify-center items-center">
                {icons.flag("#C1C1C1", "30px")}
              </button>
              <button className="rounded-full border-dashed border-2 p-2 flex justify-center items-center">
                {icons.calender_full("#C1C1C1", "30px")}
              </button>
              <button className="rounded-full border-dashed border-2 p-2 flex justify-center items-center">
                {icons.tag("#C1C1C1", "30px")}
              </button>
            </div>
            <button type="submit" className="button-bg px-7 py-1 text-s">
              ساختن تسک
            </button>
          </div>
        </>
      )}
    </form>
  );
};

export default TaskForm;
