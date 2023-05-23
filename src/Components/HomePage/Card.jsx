import React, { useState, useEffect } from "react";
import { AiOutlineWifi, AiOutlinePlus } from "react-icons/ai";

function Cards({ user }) {
  const [details, setDetails] = useState();
  useEffect(() => {
    console.log(details);
  }, [details]);

  return (
    <div className=" flex flex-col gap-6">
      <p className="text-xl font-semibold">Cards</p>
      {details && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <div
            className="fixed top-0 left-0 right-0 bottom-0 z-10 bg-accent opacity-50"
            onClick={() => setDetails()}
          ></div>
          <div className=" p-5 rounded-lg flex flex-col gap-10 justify-between items-center z-20 bg-accent py-8 px-11 relative">
            <p
              className=" absolute right-0 text-xl font-extrabold hover:cursor-pointer hover:text-gray-400 duration-150"
              onClick={() => setDetails()}
            >
              x
            </p>
            <h2 className="text-xl font-bold">Card Details</h2>
            <Card
              data={details}
              index={0}
              hidden={false}
              setDetails={setDetails}
              clickable={false}
            />
            <div className="flex w-full flex-col gap-5 justify-start items-start self-start">
              <p className="font-semibold">Card Limits</p>
              <div className="w-full">
                <p className=" font-medium mb-2">Daily Limits</p>
                <div className="w-full h-1 bg-slate-400 rounded-md mb-2">
                  <div
                    style={{
                      width: `${
                        (details.limits.daily.spent /
                          details.limits.daily.total) *
                        100
                      }%`,
                    }}
                    className="h-1 bg-green-500 rounded-md"
                  ></div>
                </div>
                <div className="flex flex-row justify-between">
                  <p>$ {details.limits.daily.spent}</p>
                  <p>$ {details.limits.daily.total}</p>
                </div>
              </div>
              <div className="w-full mt-10">
                <p className=" font-medium mb-2">Monthly Limit</p>
                <div className="w-full h-1 bg-slate-400 rounded-md">
                  <div className="w-[200px] h-1 bg-green-500 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {user.Cards.map((card, index) => (
        <Card
          data={card}
          hidden={true}
          index={index}
          setDetails={setDetails}
          clickable={true}
        />
      ))}
      <div className=" bg-gray-300 bg-opacity-20 hover:bg-opacity-30 duration-300 hover:cursor-pointer flex flex-col w-[314px] h-[181px] rounded-2xl py-5 px-8  justify-center items-center">
        <AiOutlinePlus className="text-5xl text-white" />
        <p>Add a Card</p>
      </div>
    </div>
  );
}

export default Cards;

function Card({ data, index, setDetails, clickable, hidden }) {
  return (
    <div
      key={index}
      onClick={() => {
        if (clickable) {
          setDetails(data);
        }
      }}
      className="bg-grad flex flex-col w-[314px] h-[181px] hover:cursor-pointer rounded-2xl py-5 px-8  justify-between"
    >
      <p className="flex flex-row justify-end text-2xl font-semibold ">
        {data.card_type}
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
          {hidden ? (
            <p className="font-bold text-2xl">xxxx-xxxx-xxxx-xxxx</p>
          ) : (
            <p className="font-bold text-2xl">{data.card_number}</p>
          )}

          <p className=" text-lg font-medium">{data.card_name}</p>
        </div>
        {hidden ? (
          <p className="text-lg font-medium">xx/xx</p>
        ) : (
          <p className="text-lg font-medium">{data.exp_date}</p>
        )}
        {hidden ? (
          <p className="text-lg font-medium">xxx</p>
        ) : (
          <p className="text-lg font-medium">{data.cvv}</p>
        )}
      </div>
    </div>
  );
}
