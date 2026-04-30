import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Hello Guysss", "form submitted");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-10">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <input
            required
            className="text-black outline-none bg-transparent border-2 border-emerald-600 py-4 px-5 text-xl rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            required
            className="text-black outline-none bg-transparent border-2 border-emerald-600 py-4 px-5 text-xl rounded-full mt-4 placeholder:text-gray-400"
            type="password"
            placeholder="Enter Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="mt-5 text-white bg-emerald-600 py-4 px-5 text-xl rounded-full"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;