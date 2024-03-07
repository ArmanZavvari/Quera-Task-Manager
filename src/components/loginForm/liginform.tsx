import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/userService";
import { LoginFormData, LoginResponse } from "./../../types/types";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const navigate = useNavigate();
  // const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    const userData = {
      username: data.username,
      password: data.password,
    };
    try {
      // const result = await axios.post(
      //   "http://185.8.174.74:8000/accounts/login/",
      //   userData
      // );
      const result = await login(userData);
      const loginResponseData = result.data as LoginResponse;
      localStorage.setItem("refresh", loginResponseData.refresh);
      localStorage.setItem("access", loginResponseData.access);
      navigate("/dashboard/workspaces");
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
              className="w-full px-4 py-1 border rounded-lg"
              required
              {...register("password")}
            />
          </div>
          <div className="mb-3 text-right">
            <a
              href="/forgot"
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
              href="/register"
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
