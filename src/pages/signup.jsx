import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { URL } from "../pages/_app";

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [confirmpass, setConfirmPass] = useState("");
  const [error, setError] = useState(false);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmpass) {
      setError(true);
      return;
    }

    const userData = {
      name,
      username,
      password,
      gender: selectedOption,
      email,
    };

    const response = await fetch(`${URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      router.push("/dashboard");
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div
        className="flex items-center w-1/3 py-40 justify-center flex-col gap-32 bg-accent rounded-md"
        style={{
          boxShadow: "0px 0px 80px 0px #1EEBE740",
        }}
      >
        <div>
          <h1 className="font-extrabold text-3xl">Sign Up</h1>
        </div>
        <form
          onSubmit={handleSignup}
          className="flex flex-col gap-8 justify-center items-center"
        >
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className={`px-8 py-4 rounded-md text-white bg-bg border focus:text-cta focus:border-cta focus:outline-none ${
              error && !name && "border-red-500"
            }`}
            style={{ width: 350 }}
          ></input>

          <div>
            <select
              value={selectedOption}
              onChange={handleSelectChange}
              className={`px-8 py-4 rounded-md text-white bg-bg border focus:text-cta focus:border-cta focus:outline-none ${
                error && !selectedOption && "border-red-500"
              }`}
              style={{ width: 350 }}
            >
              <option value="">Select Gender</option>
              <option value="option1">Male</option>
              <option value="option2">Object</option>
            </select>
          </div>

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className={`px-8 py-4 rounded-md text-white bg-bg border focus:text-cta focus:border-cta focus:outline-none ${
              error && !username && "border-red-500"
            }`}
            style={{ width: 350 }}
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className={`px-8 py-4 rounded-md text-white bg-bg border focus:text-cta focus:border-cta focus:outline-none ${
              error && !email && "border-red-500"
            }`}
            style={{ width: 350 }}
          ></input>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className={`px-8 py-4 rounded-md text-white bg-bg border focus:text-cta focus:border-cta focus:outline-none ${
              error && !password && "border-red-500"
            }`}
            style={{ width: 350 }}
          ></input>
          <input
            type="password"
            name="password"
            value={confirmpass}
            onChange={(e) => {
              setConfirmPass(e.target.value);
            }}
            placeholder="Confirm Password"
            className={`px-8 py-4 rounded-md text-white bg-bg border focus:text-cta focus:border-cta focus:outline-none ${
              error && password !== confirmpass && "border-red-500"
            }`}
            style={{ width: 350 }}
          ></input>

          {error && (
            <p className="text-red-500">
              An error occurred. Please check your information and try again.
            </p>
          )}

          <button
            type="submit"
            className="bg-grad py-3 text-white rounded-md"
            style={{ width: 200 }}
          >
            Signup
          </button>
          <div className="flex flex-row gap-4 text-white text-sm">
            <Link href="/">Forgot Password?</Link>
            <p>|</p>
            <Link href={"/login"}>Already have an account</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
