import React from "react";

const Forgotmsg: React.FC = () => {
  return (
    <div className="relative z-10 flex justify-center items-center ">
      <div className="bg-white rounded-lg p-8 shadow-md w-[640px] h-429 ">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {" "}
          فراموشی رمز عبور{" "}
        </h2>
        <p className="font-normal text-sm leading-5 text-center">
          لینک تغییر رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی کنید.
        </p>
      </div>
    </div>
  );
};

export default Forgotmsg;
