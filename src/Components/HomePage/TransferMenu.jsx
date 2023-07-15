import React, { useState, useEffect } from "react";
import { URL } from "../../pages/_app";
const TransferScreen = ({ onClose, setChange, username }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedReason, setSelectedReason] = useState("");
  const [transaction, setTransaction] = useState({});
  const [error, setError] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSelectReasonChange = (event) => {
    setSelectedReason(event.target.value);
  };

  useEffect(() => {
    if (selectedOption === "cashflow") {
      setTransaction((prevTransaction) => ({
        ...prevTransaction,
        dest_type: "Inter Bank",
      }));
    } else {
      setTransaction((prevTransaction) => ({
        ...prevTransaction,
        dest_type: "Local Bank",
      }));
    }
  }, [selectedOption]);

  useEffect(() => {
    setTransaction((prevTransaction) => ({
      ...prevTransaction,
      type: selectedReason,
    }));
  }, [selectedReason]);

  async function handleFormSubmit(event) {
    event.preventDefault();

    const updatedTransaction = {
      ...transaction,
      mode: "Online transaction",
      transaction: "outgoing",
      username: username,
    };
    try {
      const response = await fetch(`${URL}/make_transaction`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTransaction),
      });

      if (response.ok) {
        const ret = await response.json();
        console.log(ret);
        if (ret.success) {
          onClose();
        } else {
          if (ret.saving_check) {
            setSaving(true);
          } else {
            setError(true);
          }
        }
      }
    } catch (e) {
      setError(true);
    }
  }
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      {saving ? (
        <SavingsMenu
          username={username}
          closeSaving={() => {
            setSaving(false);
          }}
        />
      ) : (
        <div>
          <div
            className="fixed top-0 left-0 right-0 bottom-0 z-10 bg-accent opacity-50"
            onClick={() => {
              onClose();
            }}
          ></div>
          <div className=" p-5 rounded-lg flex flex-col gap-10 justify-between items-center z-20 bg-accent py-8 px-11  relative">
            <p
              className=" absolute right-0 text-xl font-extrabold hover:cursor-pointer hover:text-gray-400 duration-150"
              onClick={() => onClose()}
            >
              X
            </p>
            <h2 className="text-xl font-bold">Transfer Money</h2>
            {error && (
              <p className="text-red-500">
                An error occurred. Please try again.
              </p>
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
                  selectedOption == "cashflow"
                    ? "Holder's Name"
                    : "Account Number"
                }
                value={transaction.destination}
                onChange={(e) => {
                  // setUsername(e.target.value);
                  setTransaction((prevTransaction) => ({
                    ...prevTransaction,
                    destination: e.target.value,
                  }));
                }}
                className={`px-8 py-4 rounded-md text-white bg-bg border focus:border-cta focus:outline-none focus:text-cta ${
                  error || !transaction.destination
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
                value={transaction.amount}
                onChange={(e) => {
                  setTransaction((prevTransaction) => ({
                    ...prevTransaction,
                    amount: e.target.value,
                  }));
                }}
                className={`px-8 py-4 rounded-md text-white bg-bg border focus:border-cta focus:outline-none focus:text-cta ${
                  error || !transaction.amount
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
      )}
    </div>
  );
};

export default TransferScreen;

function SavingsMenu({ username, closeSaving }) {
  const [amount, setAmount] = useState();
  const [error, setError] = useState(false);
  const [text, setText] = useState();
  async function handleFormSubmit(event) {
    event.preventDefault();

    const updatedTransaction = {
      amount: amount,
      username: username,
      text: text,
    };
    try {
      const response = await fetch(`${URL}/open_savings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTransaction),
      });

      if (response.status == 200) {
        const ret = await response.json();
        console.log(ret);
        if (ret.success) {
          closeSaving();
        }
      } else {
        setError(true);
      }
    } catch (e) {
      setError(true);
    }
  }
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div
        className="fixed top-0 left-0 right-0 bottom-0 z-20 bg-accent opacity-50"
        onClick={() => {
          closeSaving();
        }}
      ></div>
      <div className=" p-5 rounded-lg flex flex-col gap-10 justify-between items-center z-20 bg-accent py-8 px-11  relative">
        <p
          className=" absolute right-0 text-xl font-extrabold hover:cursor-pointer hover:text-gray-400 duration-150"
          onClick={() => closeSaving()}
        >
          X
        </p>
        <h2 className="text-xl font-bold">Transfer Money</h2>
        {error && (
          <p className="text-red-500">An error occurred. Please try again.</p>
        )}

        <form action="" className="flex flex-col gap-5">
          <input
            required
            type="text"
            name="text"
            placeholder="Enter detailed reason to unlock savings"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            className={`px-8 py-4 rounded-md text-white bg-bg border focus:border-cta focus:outline-none focus:text-cta `}
            style={{ width: 350 }}
          ></input>
          <input
            required
            type="number"
            name="ammount"
            placeholder="Amount"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            className={`px-8 py-4 rounded-md text-white bg-bg border focus:border-cta focus:outline-none focus:text-cta`}
            style={{ width: 350 }}
          ></input>

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
}

// position: fixed;
// top: 0;
// left: 0;
// right: 0;
// bottom: 0;
// background-color: rgba(0, 0, 0, 0.5); /* Black color with 50% opacity */
// z-index: 1;
