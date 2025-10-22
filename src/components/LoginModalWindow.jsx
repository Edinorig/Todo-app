import React from "react";
import { useForm } from "react-hook-form";
import { setCookie } from "./util";

const LoginModalWindow = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="relative w-2/4 bg-amber-400 p-4 rounded-lg">
        <div className="wrapperModalWindowHeader flex flex-row justify-between  ">
          <h1>Its mofal window</h1>
          <button onClick={() => onClose()}>Close Window</button>
        </div>
        <form
          className="flex flex-col"
          onSubmit={handleSubmit((data) => {
            console.log(data);
            onClose();
            setCookie("username", data.username, 7);
            setCookie("password", data.password, 7);    
          })}
        >
          <input
            {...register("username", {
              required: "Username is required",
              minLength: { value: 3, message: "Minimum 3 characters" },
            })}
            placeholder="Username"
            className="bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-black"
          />
          <p className="text-red-600 text-sm">{errors.username?.message}</p>

          <input
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters" },
            })}
            placeholder="Password"
            className="bg-gray-50 border border-gray-300 rounded-lg p-2.5 mt-2 text-black"
          />
          <p className="text-red-600 text-sm">{errors.password?.message}</p>

          <input
            type="submit"
            className="cursor-pointer mt-4 bg-blue-500 text-white p-2 rounded"
          />
        </form>
      </div>
    </div>
  );
};

export default LoginModalWindow;
