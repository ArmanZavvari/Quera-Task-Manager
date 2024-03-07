import React from "react";
import { useForm } from "react-hook-form";
import { ForgetPasswordData } from "../../types/types";
import { forgetPassword } from "../../services/userService";

const Forgot: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgetPasswordData>();

  const onSubmit = async (data: ForgetPasswordData) => {
    const userData = {
      email: data.email,
    };
    try {
      const result = await forgetPassword(userData);
      console.log(result.data);
    } catch (e) {
      console.log("Error Occured!");
      console.log(e);
    }
  };

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
            <a href="/" className="text-teal-500 pt-4">
              بازگشت
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
