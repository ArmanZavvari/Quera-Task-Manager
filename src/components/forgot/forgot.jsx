import React from "react";
import { useForm } from "react-hook-form";

const Forgot = () => {
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
          فراموشی رمز عبور{" "}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-base leading-5 font-normal text-right mb-2"
            >
              ایمیل خود را وارد کنید
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-1 border rounded-lg"
              required
              {...register("email")}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-teal-500  text-white mt-4 hover:bg-green-600 font-bold py-3 px-4 mb-6 rounded"
            >
              دریافت ایمیل بازیابی رمز عبور
            </button>
          </div>
          <div>
            <a
              href="http://localhost:3000/login"
              className="text-teal-500 pt-4"
            >
              بازگشت
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
