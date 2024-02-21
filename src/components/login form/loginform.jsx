import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="relative z-10 flex justify-center items-center ">
      <div className="bg-white rounded-lg p-8 shadow-md w-[640px] h-429 ">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {" "}
          (: به کوئرا تسک منیجر خوش برگشتی{" "}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-base leading-5 font-normal text-right mb-2"
            >
              نام کاربری
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-1 mb-2 border rounded-lg"
              required
              {...register("username")}
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
              name="password"
              className="w-full px-4 py-1 border rounded-lg"
              required
              {...register("password")}
            />
          </div>
          <div className="mb-3 text-right">
            <a
              href="http://localhost:3000/forgot"
              className="font-medium text-xs leading-17 hover:underline"
            >
              رمز عبور خود را فراموش کرده اید ؟
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500  text-white my-4 hover:bg-green-600 font-bold py-2 px-4 rounded"
          >
            ورود
          </button>
          <div className="flex justify-center items-center">
            <a
              href="http://localhost:3000/register"
              className="text-teal-500 mr-2 text-base leading-tight hover:text-green-600"
            >
              ثبت نام
            </a>
            <p className="text-base leading-tight">ثبت نام نکرده ای ؟</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
