import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const SignupLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loginError, setLoginError] = useState("");
  const [signupError, setSignUpError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user_info")) {
      navigate("/");
    }
  }, [navigate]);

  const signUp = async (e) => {
    e.preventDefault(); // Prevent form submission
    // console.warn(name, email, password);
    let item = { name, email, password };

    try {
      let response = await fetch(
        "https://service.apikeeda.com/api/v1/user/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-apikeeda-key": "s1725946207784yei381221785mx",
          },
          body: JSON.stringify(item),
        },
      );

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      let result = await response.json();

      if (result.error) {
        setSignUpError(result.error);
      } else {
        localStorage.setItem("user_info", JSON.stringify(result));
        navigate("/ ");
      }
    } catch (error) {
      setSignUpError("It's already existing. Please try again.");
    }
  };

 
  const login = async (e) => {
    e.preventDefault(); // Prevent form submission
    // console.warn(email, password);
    let item = { email, password };

    try {
      let response = await fetch(
        "https://service.apikeeda.com/api/v1/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-apikeeda-key": "o1725946236144poe697446116rz",
          },
          body: JSON.stringify(item),
        },
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }

      let result = await response.json();

      if (result.error) {
        setLoginError(result.error);
      } else {
        localStorage.setItem("user_info", JSON.stringify(result));
        navigate("/");
      }
    } catch (error) {
      setLoginError("An error occurred during login. Please try again.");
    }
  };

  const toggleForm = (e) => {
    e.preventDefault(); // Prevent link behavior
    const loginForm = document.getElementById("loginForm");
    const signUpForm = document.getElementById("signUpForm");

    if (loginForm.classList.contains("hidden")) {
      signUpForm.classList.add("animate-slideOut");
      setTimeout(() => {
        signUpForm.classList.add("hidden");
        signUpForm.classList.remove("animate-slideOut");
        loginForm.classList.remove("hidden");
        loginForm.classList.add("animate-slideIn");
      }, 500);
    } else {
      loginForm.classList.add("animate-slideOut");
      setTimeout(() => {
        loginForm.classList.add("hidden");
        loginForm.classList.remove("animate-slideOut");
        signUpForm.classList.remove("hidden");
        signUpForm.classList.add("animate-slideIn");
      }, 500);
    }
  };

  return (
    <div>
      <div className="w-full max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
        <div id="form-container">
          {/* Login Form */}
          <div id="loginForm" className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Login</h2>
            <form onSubmit={login}>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-neutral-900 transition"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-neutral-900 transition"
                  placeholder="Enter your password"
                  required
                />
              </div>
              {loginError && (
                <div className="mb-4 text-red-500">{loginError}</div>
              )}
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-zinc-800 text-white py-2 px-4 rounded-lg hover:bg-zinc-900 transition-all duration-300"
                >
                  Login
                </button>
                <a
                  href="#"
                  className="text-zinc-950 hover:underline"
                  onClick={toggleForm}
                >
                  Sign Up
                </a>
              </div>
            </form>
          </div>
          {/* Sign Up Form (Initially Hidden) */}
          <div id="signUpForm" className="space-y-6 hidden">
            <h2 className="text-2xl font-bold text-center">Sign Up</h2>
            <form onSubmit={signUp}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-neutral-900 transition"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-neutral-900 transition"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-neutral-900 transition"
                  placeholder="Enter your password"
                  required
                />
              </div>
              {signupError && (
              <div className="mb-4 text-red-500">
                {signupError}
              </div>
            )}
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-zinc-800 text-white py-2 px-4 rounded-lg hover:bg-zinc-950 transition-all duration-300"
                >
                  Sign Up
                </button>
                <a
                  href="#"
                  className="text-black hover:underline"
                  onClick={toggleForm}
                >
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupLogin;
