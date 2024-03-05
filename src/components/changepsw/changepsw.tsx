import React from "react";

const Changepsw: React.FC = () => {
  return (
    <div className="relative z-10 flex justify-center items-center ">
      <div className="bg-white rounded-lg p-8 shadow-md w-[640px] h-429 ">
        <h2 className="text-2xl font-bold mb-6 text-center">
          تغییر رمز عبور
        </h2>
        <form>
          <div className="mb-2">
            <label
              htmlFor="newpass"
              className="block text-base leading-5 font-normal text-right mb-3"
            >
              رمز عبور جدید را وارد کنید
            </label>
            <input
              type="password" // Corrected input type
              id="newpass"
              name="newpass"
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="repeatpass"
              className="block text-base leading-5 font-normal text-right mb-2"
            >
              تکرار رمز عبور
            </label>
            <input
              type="password" // Corrected input type
              id="repeatpass"
              name="repeatpass"
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white my-4 hover:bg-green-600 font-bold py-2 px-4 rounded"
          >
            اعمال تغییرات
          </button>
        </form>
      </div>
    </div>
  );
};

export default Changepsw;
