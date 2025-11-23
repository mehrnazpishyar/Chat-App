import React, { useState } from "react";
import assets from "../assets/assets";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (currentState === "Sign Up") {
      setCurrentState("Login");
      return;
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center gap-8 max-sm:flex-col backdrop-blur-2xl">
      <form
        onSubmit={onSubmitHandler}
        className="border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg h-[450px] sm:h-auto"
      >
        <h2 className="font-medium text-2xl flex justify-between items-center">
          {currentState}
          {isSubmitted && (
            <img
              onClick={() => setIsSubmitted(false)}
              src={assets.arrowIcon}
              alt=""
              className="w-5 cursor-pointer"
            />
          )}
        </h2>
        {currentState === "Sign Up" && !isSubmitted && (
          <input
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            type="text"
            name=""
            id=""
            className={`p-2 border border-gray-500 rounded-md focus:outline-none ${
              currentState === "Login" || isSubmitted
                ? "opacity-0 h-0 p-0 m-0 border-none"
                : ""
            }`}
            placeholder="Full Name"
            required={currentState === "Sign Up" && !isSubmitted}
          />
        )}
        {!isSubmitted && (
          <>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email Address"
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </>
        )}
        <button
          type="submit"
          className="py-3 bg-linear-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer"
        >
          {currentState === "Sign Up" ? "create Account" : "Login Now"}
        </button>

          <div
            className={`flex items-center gap-2 text-sm text-gray-500 transition-all duration-300 ${
              currentState !== "Sign Up" ? "opacity-0 h-0 overflow-hidden" : ""
            }`}
          >
            <input type="checkbox" required={currentState === "Sign Up"} />
            <p>Agree to the terms of use & privacy policy.</p>
          </div>
      
        <div className="flex flex-col gap-2">
          {currentState === "Sign Up" ? (
            <p className="flex items-center gap-2 justify-center text-sm text-gray-600">
              Already have a account?
              <span
                onClick={() => {
                  setCurrentState("Login");
                  setIsSubmitted(false);
                }}
                className="font-medium text-violet-500 cursor-pointer"
              >
                Login here
              </span>
            </p>
          ) : (
            <p className="flex items-center gap-2 justify-center text-sm text-gray-600">
              Create an account
              <span
                onClick={() => {
                  setCurrentState("Sign Up");
                }}
                className="font-medium text-violet-500 cursor-pointer"
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
