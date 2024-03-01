<<<<<<< HEAD:src/components/login form/loginform.jsx
import React from "react";
=======
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
>>>>>>> f0401c67f8b9488e8c55d81fa5d561592edee0ac:src/components/loginForm/liginform.jsx

const ListComponent = () => {
  return (
    <div className="flex">
      <div className="inline-block w-16 h-16 rounded-md bg-pink-500">sccscscsc</div>

      <p>این یک تیتر برای این تسک است</p>
    </div>
  );
};

export default ListComponent;
