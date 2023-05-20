import { RiUser3Line } from "react-icons/ri";
import { AiOutlineScan, AiOutlineWifi, AiOutlinePlus } from "react-icons/ai";
import { CiWallet } from "react-icons/ci";
import { BsCalendarEvent, BsSend } from "react-icons/bs";
import Layout from "../Components/Layout";
import TransectionHistory from "../Components/HomePage/TransecctionHistory";
import LineGraph from "../Components/HomePage/Graph";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MdRefresh } from "react-icons/md";
import { useDispatch } from "react-redux";
import { URL } from "../pages/_app";
import TransferScreen from "../Components/HomePage/TransferMenu";

export default function Dashboard() {
  const [showTransferScreen, setShowTransferScreen] = useState(false);
  const [transection, setTransection] = useState({});

  const handleTransferButtonClick = () => {
    setShowTransferScreen(true);
    console.log(showTransferScreen);
  };
  function handleSetTransection(transfer_data) {
    setTransection(transfer_data);
  }
  const handleCloseTransferScreen = () => {
    refreshTransactions();
    setShowTransferScreen(false);
  };
  useEffect(() => {
    console.log(transection);
  }, [transection]);

  const dispatch = useDispatch();

  const [user, setUser] = useState(useSelector((state) => state.user));
  const [data, setData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Expense",
        data: [12, 19, 9, 5, 15, 3],
        fill: true,
        backgroundColor: "rgba(30, 235, 236, 0.5)",
        borderColor: "rgba(30, 235, 236, 1)",
        pointRadius: 0,
        borderRadius: 500,
        cubicInterpolationMode: "monotone",
      },
      {
        label: "Income",
        data: [8, 12, 6, 15, 15, 20],
        fill: true,
        backgroundColor: "rgba(197, 43, 222, 0.5)",
        borderColor: "rgba(197, 43, 222, 1)",
        pointRadius: 0,
        cubicInterpolationMode: "monotone",
      },
    ],
  });
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else {
      setData({
        labels: user.months,
        datasets: [
          {
            label: "Expense",
            data: user.expense,
            fill: true,
            backgroundColor: "rgba(30, 235, 236, 0.5)",
            borderColor: "rgba(30, 235, 236, 1)",
            pointRadius: 0,
            borderRadius: 500,
            cubicInterpolationMode: "monotone",
          },
          {
            label: "Income",
            data: user.income,
            fill: true,
            backgroundColor: "rgba(197, 43, 222, 0.5)",
            borderColor: "rgba(197, 43, 222, 1)",
            pointRadius: 0,
            cubicInterpolationMode: "monotone",
          },
        ],
      });
    }
  }, [user]);
  const refreshTransactions = async () => {
    // console.log(`${URL}/login`);
    const response = await fetch(`${URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user.username,
        password: user.password,
      }),
    });
    if (response.ok) {
      const userData = await response.json();
      setUser(userData);
    }
  };
  return (
    <Layout activePage="home">
      {user && user.username ? (
        <div className="flex flex-row gap-20 px-28 py-2 mt-8 mr-28">
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between ">
              <div className="flex flex-row gap-8 justify-center items-center">
                <RiUser3Line className=" text-8xl bg-grad p-4 rounded-lg text-white" />

                <div className="flex flex-col gap-2">
                  <p className="font-light text-xl">{user.username}</p>
                  <h1 className="font-bold text-3xl">
                    {user.currency} {user.balance}
                  </h1>
                </div>
              </div>
              <div className="flex flex-row gap-6 justify-center items-center">
                <div className="flex flex-col gap-2 justify-center items-end">
                  <h1 className="font-bold text-3xl">
                    {user.date} {user.month}, {user.year}
                  </h1>
                  <p>{user.day}</p>
                </div>
                <BsCalendarEvent className=" text-7xl text-gray-300 font-thin" />
              </div>
            </div>
            <h1 className=" mt-4 mb-3 font-semibold text-xl flex flex-row justify-between">
              Transection History
              <div
                className="text-white justify-end  flex text-4xl hover:cursor-pointer hover:text-gray-300 duration-150"
                onClick={refreshTransactions}
              >
                <MdRefresh />
              </div>
            </h1>

            <TransectionHistory user={user} />
            <div className="relative bottom-7">
              <h1 className=" mt-7 mb-6 font-semibold text-xl">Statistics</h1>
              <div className="flex flex-col gap-8 p-10 bg-accent rounded-lg">
                <LineGraph data={data} />
              </div>
            </div>
          </div>
          <div className="w-[846px] bg-accent p-10 rounded-lg">
            <div className="flex flex-row justify-evenly items-center rounded-xl bg-grad py-2 text-white text-4xl">
              <div
                className="flex flex-row hover:text-gray-300 duration-300 hover:cursor-pointer px-9 py-4"
                onClick={handleTransferButtonClick}
              >
                <BsSend />
              </div>
              <div className="w-[1px] h-14 flex flex-col  bg-white" />
              <div className="flex flex-row hover:text-gray-300 duration-300 hover:cursor-pointer px-9 py-4">
                <AiOutlineScan />
              </div>
              <div className="w-[1px] h-14 flex flex-col  bg-white" />
              <div className="flex flex-row hover:text-gray-300 duration-300 hover:cursor-pointer px-9 py-4">
                <CiWallet />
              </div>
            </div>

            <div className=" mt-20">
              <p className="text-lg ">Total Balance</p>
              <p className="text-3xl font-bold ">
                {user.currency} {user.balance}
              </p>
            </div>
            <div className=" mt-16">
              <p className="text-lg ">Monthly Overview</p>
              <p className="text-3xl font-bold ">
                {user.month}, {user.year}
              </p>
            </div>
            <div className=" flex flex-row mt-16 justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-md ">Income</p>
                <p className="text-xl font-bold">
                  {user.currency}
                  {user.income.reduce((result, number) => result + number)}
                </p>
              </div>
              <div className="w-[1px] h-14 flex flex-col  bg-white" />

              <div className="flex flex-col gap-1">
                <p className="text-md ">Expenses</p>
                <p className="text-xl font-bold">
                  {user.currency}{" "}
                  {user.expense.reduce((result, number) => result + number)}
                </p>
              </div>
              <div className="w-[1px] h-14 flex flex-col  bg-white" />

              <div className="flex flex-col gap-1">
                <p className="text-md ">Savings</p>
                <p className="text-xl font-bold">$ 200</p>
              </div>
            </div>

            <div className="mt-16 flex flex-col gap-6">
              <p className="text-xl font-semibold">Cards</p>

              <div className="bg-grad flex flex-col w-[314px] h-[181px] hover:cursor-pointer rounded-2xl py-5 px-8  justify-between">
                <p className="flex flex-row justify-end text-2xl font-semibold ">
                  Visa
                </p>

                <div className="mt-6 flex flex-row justify-between">
                  <div
                    style={{
                      backgroundColor: "#E5C875",
                      width: 50,
                      height: 32,
                    }}
                    className=" rounded-md"
                  />
                  <AiOutlineWifi className=" rotate-90 text-4xl text-white mr-2" />
                </div>

                <div className="flex flex-row justify-between items-end ">
                  <div className="flex flex-col gap-0">
                    <p className="font-bold text-2xl">xxxx-xxxx-xxxx-xxxx</p>
                    <p className=" text-lg font-medium">Muhammad Humam</p>
                  </div>
                  <p className="text-lg font-medium">xx/xx</p>
                </div>
              </div>
              <div className=" bg-gray-300 bg-opacity-20 hover:bg-opacity-30 duration-300 hover:cursor-pointer flex flex-col w-[314px] h-[181px] rounded-2xl py-5 px-8  justify-center items-center">
                <AiOutlinePlus className="text-5xl text-white" />
                <p>Add a Card</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {showTransferScreen && (
        <TransferScreen
          onClose={handleCloseTransferScreen}
          username={user.username}
        />
      )}
    </Layout>
  );
}
