import React, { useState } from "react";

const ProfileForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // اینجا می‌توانید فرآیند ارسال اطلاعات را انجام دهید
    console.log({
      username,
      email,
      currentPassword,
      newPassword,
      confirmNewPassword,
    });
    setUsername("");
    setEmail("");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[354px] py-3 pr-1 flex flex-col mx-6"
    >
      <h2 className="text-right mt-3 mb-10 font-bold" style={{ fontSize: 31 }}>
        اطلاعات حساب
      </h2>
      <div className="my-2 mt-2 flex flex-col gap-1">
        <label htmlFor="username" className="block text-gray-700">
          نام کاربری
        </label>
        <input
          type="text"
          id="username"
          className=" rounded py-1 border border-gray-400"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="my-2 mt-2 flex flex-col gap-1">
        <label htmlFor="email" className="block text-gray-700">
          ایمیل
        </label>
        <input
          type="email"
          id="email"
          className=" rounded py-1 border border-gray-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="my-2 mt-2 flex flex-col gap-1">
        <label htmlFor="currentPassword" className="block text-gray-700">
          رمز عبور فعلی
        </label>
        <input
          type="password"
          id="currentPassword"
          className=" rounded py-1 border border-gray-400"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
      </div>
      <div className="my-2 mt-2 flex flex-col gap-1">
        <label htmlFor="newPassword" className="block text-gray-700">
          رمز عبور جدید
        </label>
        <input
          type="password"
          id="newPassword"
          className=" rounded py-1 border border-gray-400"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div className="my-2 mt-2 flex flex-col gap-1">
        <label htmlFor="confirmNewPassword" className="block text-gray-700">
          تکرار رمز عبور جدید
        </label>
        <input
          type="password"
          id="confirmNewPassword"
          className=" rounded py-1 border border-gray-400"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
      </div>
      <button className="p-i-b mt-8" type="submit">
        ثبت تغییرات
      </button>
    </form>
  );
};

export default ProfileForm;
