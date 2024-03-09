import React, { useState } from "react";
import CustomModal from "../common/modal";
import { useForm } from "react-hook-form";
import userService, { login } from "../../services/userService";
import { FormValues, LoginResponse } from "../../types/types";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    const userData = {
      username: data.username,
      password: data.password,
      email: data.email,
    };
    try {
      const result = await userService.register(userData);

      const loginResult = await login(userData);

      const loginResponseData = loginResult.data as LoginResponse;
      localStorage.setItem("refresh", loginResponseData.refresh);
      localStorage.setItem("access", loginResponseData.access);
      navigate("/dashboard/workspaces");
      console.log(result.data);
    } catch (e) {
      console.log("Error Occured!");
      console.log(e);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {!modalOpen && (
        <div className="relative z-10 flex justify-center items-center ">
          <div className="bg-white rounded-lg p-8 shadow-md w-[640px] h-429 ">
            <h2 className="text-2xl font-bold mb-6 text-center">
              {" "}
              ثبت‌نام در کوئرا تسک منیجر{" "}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-2">
                <label
                  htmlFor="username"
                  className="block text-base leading-5 font-normal text-right mb-2"
                >
                  نام کاربری
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full px-4 py-1  border rounded-lg"
                  required
                  {...register("username")}
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block text-base leading-5 font-normal text-right mb-2"
                >
                  ایمیل
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-1 border rounded-lg"
                  required
                  {...register("email")}
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-base leading-5 font-normal text-right mb-2"
                >
                  رمز عبور
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-1 border rounded-lg"
                  required
                  {...register("password")}
                />
              </div>
              <div className="flex justify-end  mb-2">
                <label
                  htmlFor="rules"
                  className="block text-base leading-5 font-normal text-right mb-2 ml-2"
                >
                  <button
                    onClick={() => {
                      setModalOpen(true);
                    }}
                    className="hover:underline"
                  >
                    قوانین و مقررات را می پذیرم
                  </button>
                </label>
                <input
                  type="checkbox"
                  id="rules"
                  className="w-5 h-5 rounded border border-gray-400 text-gray-600 ml-2"
                  required
                  {...register("checkbox")}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500  text-white my-4 hover:bg-green-600 font-bold py-2 px-4 rounded"
              >
                ثبت نام
              </button>
            </form>
          </div>
        </div>
      )}

      {modalOpen && (
        <CustomModal
          modalOpen={modalOpen}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};

export default Register;
