import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { URL } from "../pages/_app";
export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  console.log("+++++++++ LOgin");
  console.log(user);
  useEffect(() => {
    async function fetchData() {
      if (user) {
        dispatch({ type: "SET_USER", payload: user });
        router.push("/dashboard");
      }
    }

    fetchData();
  }, [user]);

  return (
    <div className="flex h-screen w-screen justify-center items-center ">
      <div
        className="flex items-center w-1/3 py-40 justify-center flex-col gap-32 bg-accent rounded-md"
        style={{
          boxShadow: "0px 0px 80px 0px #1EEBE740",
        }}
      >
        <div>
          <h1 className=" font-extrabold text-3xl">Login</h1>
        </div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            // console.log(`${URL}/login`);
            const response = await fetch(`${URL}/login`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ username: username, password: password }),
            });
            if (response.ok) {
              const userData = await response.json();
              setUser(userData);
            }
          }}
          className="flex flex-col gap-8 justify-center items-center"
        >
          <input
            type="username"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className=" px-8 py-4 rounded-md text-white bg-bg border focus:border-cta focus:outline-none focus:text-cta border-white"
            style={{ width: 350 }}
          ></input>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className=" px-8 py-4 rounded-md text-white bg-bg border focus:border-cta focus:outline-none focus:text-cta border-white"
            style={{ width: 350 }}
          ></input>
          <button
            type="submit"
            className="bg-grad py-3 text-white rounded-md"
            style={{ width: 200 }}
          >
            Login
          </button>
          <div className="flex flex-row gap-4 text-white text-sm">
            <Link href="/">Forgot Password?</Link>
            <p>|</p>
            <Link href={"/signup"}>Create a new Account</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
