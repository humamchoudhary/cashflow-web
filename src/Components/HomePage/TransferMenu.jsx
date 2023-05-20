import React, { useState, useEffect } from "react";
import { URL } from "../../pages/_app";
const TransferScreen = ({ onClose, setChange, username }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedReason, setSelectedReason] = useState("");
  const [transection, setTransection] = useState({});
  const [error, setError] = useState(false);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSelectReasonChange = (event) => {
    setSelectedReason(event.target.value);
  };

  useEffect(() => {
    if (selectedOption === "cashflow") {
      setTransection((prevTransection) => ({
        ...prevTransection,
        dest_type: "Inter Bank",
      }));
    } else {
      setTransection((prevTransection) => ({
        ...prevTransection,
        dest_type: "Local Bank",
      }));
    }
  }, [selectedOption]);

  useEffect(() => {
    setTransection((prevTransection) => ({
      ...prevTransection,
      type: selectedReason,
    }));
  }, [selectedReason]);

  async function handleFormSubmit(event) {
    event.preventDefault();

    const updatedTransection = {
      ...transection,
      mode: "Online transaction",
      transection: "outgoing",
      username: username,
    };
    try {
      const response = await fetch(`${URL}/make_transection`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTransection),
      });

      if (response.ok) {
        const ret = await response.json();
        console.log(ret);
        if (ret.success) {
          onClose();
        } else {
          setError(true);
        }
      }
    } catch (e) {
      setError(true);
    }
  }
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div className="fixed top-0 left-0 right-0 bottom-0 z-10 bg-accent opacity-50"></div>
      <div className=" p-5 rounded-lg flex flex-col gap-10 justify-between items-center z-20 bg-accent py-8 px-11">
        <h2 className="text-xl font-bold">Transfer Money</h2>
        {error && (
          <p className="text-red-500">An error occurred. Please try again.</p>
        )}
        <form action="" className="flex flex-col gap-5">
          <div>
            <select
              required
              value={selectedOption}
              onChange={handleSelectChange}
              className={`px-8 py-4 rounded-md text-white bg-bg border focus:text-cta focus:border-cta focus:outline-none ${
                error || !selectedOption
                  ? "border-red-500 text-red-500"
                  : " border-white"
              }`}
              style={{ width: 350 }}
            >
              <option value="">Select Bank</option>
              <option value="cashflow">CashFlow</option>
              <option value="local">Local Bank</option>
            </select>
          </div>
          <input
            required
            type="name"
            name="acNo"
            placeholder={
              selectedOption == "cashflow" ? "Holder's Name" : "Account Number"
            }
            value={transection.destination}
            onChange={(e) => {
              // setUsername(e.target.value);
              setTransection((prevTransection) => ({
                ...prevTransection,
                destination: e.target.value,
              }));
            }}
            className={`px-8 py-4 rounded-md text-white bg-bg border focus:border-cta focus:outline-none focus:text-cta ${
              error || !transection.destination
                ? "border-red-500 text-red-500"
                : " border-white"
            }`}
            style={{ width: 350 }}
          ></input>
          <input
            required
            type="number"
            name="ammount"
            placeholder="Amount"
            value={transection.amount}
            onChange={(e) => {
              setTransection((prevTransection) => ({
                ...prevTransection,
                amount: e.target.value,
              }));
            }}
            className={`px-8 py-4 rounded-md text-white bg-bg border focus:border-cta focus:outline-none focus:text-cta ${
              error || !transection.amount
                ? "border-red-500 text-red-500"
                : " border-white"
            }`}
            style={{ width: 350 }}
          ></input>
          <div>
            <select
              required
              value={selectedReason}
              onChange={handleSelectReasonChange}
              className={`px-8 py-4 rounded-md text-white bg-bg border focus:border-cta focus:outline-none focus:text-cta ${
                error || !selectedReason
                  ? "border-red-500 text-red-500"
                  : " border-white"
              }`}
              style={{ width: 350 }}
            >
              <option value="">Reason</option>
              <option value="Family Support">Family Support</option>
              <option value="Rent">Rent</option>
              <option value="Misc">Misc</option>
            </select>
          </div>

          <button
            onClick={handleFormSubmit}
            type="submit"
            className="px-8 py-2 bg-grad rounded-md text-white text-lg"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default TransferScreen;

// position: fixed;
// top: 0;
// left: 0;
// right: 0;
// bottom: 0;
// background-color: rgba(0, 0, 0, 0.5); /* Black color with 50% opacity */
// z-index: 1;
