import Link from "next/link";
import React, { useState } from "react";
import { Dropdown } from "@nextui-org/react";

export default function signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [confirmpass, setConfirmPass] = useState("");
  // const [selectedItem, setSelectedItem] = useState("Select Gender");

  const handleSignup = (e) => {
    console.log("signup");
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center ">
      <div
        className="flex items-center w-1/3 py-40 justify-center flex-col gap-32 bg-accent rounded-md"
        style={{
          boxShadow: "0px 0px 80px 0px #1EEBE740",
        }}
      >
        <div>
          <h1 className=" font-extrabold text-3xl">Sign Up</h1>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log({ username, password, email });
          }}
          className="flex flex-col gap-8 justify-center items-center"
        >
          <input
            type="name"
            name="name"
            placeholder="Full name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className=" px-8 py-4 rounded-md text-white bg-bg border focus:text-cta focus:border-cta focus:outline-none focus:dropshadow border-white"
            style={{ width: 350 }}
          ></input>

          <div>
            <select
              value={selectedOption}
              onChange={handleSelectChange}
              className=" px-8 py-4 rounded-md text-white bg-bg border focus:text-cta focus:border-cta focus:outline-none border-white "
              style={{ width: 350 }}
            >
              <option value="">Select Gender</option>
              <option value="option1">Male</option>
              <option value="option2">Object</option>
            </select>
          </div>

          <input
            type="username"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className=" px-8 py-4 rounded-md text-white bg-bg border focus:text-cta focus:border-cta focus:outline-none border-white"
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
            className=" px-8 py-4 rounded-md text-white bg-bg border focus:text-cta focus:border-cta focus:outline-none border-white"
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
            className=" px-8 py-4 rounded-md text-white bg-bg border focus:text-cta focus:border-cta focus:outline-none border-white"
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
            className=" px-8 py-4 rounded-md text-white bg-bg border focus:text-cta focus:border-cta focus:outline-none border-white"
            style={{ width: 350 }}
          ></input>

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
            <Link href={"/login"}>Already have a account</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
