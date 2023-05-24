import { BsArrowDownLeft, BsArrowUpRight } from "react-icons/bs";

const TransactionHistory = ({ user }) => {
  if (!user.transaction_log || user.transaction_log.length === 0) {
    return (
      <div className="flex flex-col gap-8 p-10 bg-accent rounded-lg w-full h-full overflow-scroll max-h-[500px] min-h-[500px] mb-8 justify-center items-center">
        <p>No transactions available.</p>;
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-8 p-10 bg-accent rounded-lg w-full h-full overflow-scroll max-h-[500px] min-h-[500px] mb-8">
        {user.transaction_log.map((transaction, index) => (
          <div
            key={index}
            className="flex flex-row justify-between items-center bg-white bg-opacity-0 py-3 px-5 hover:bg-opacity-10 duration-200 rounded-md"
          >
            <div className="flex flex-row gap-3 items-center">
              {transaction.transaction === "outgoing" ? (
                <div className="bg-red-400 p-5 text-2xl rounded-full">
                  <BsArrowUpRight />
                </div>
              ) : (
                <div className="bg-green-400 p-5 text-2xl rounded-full">
                  <BsArrowDownLeft />
                </div>
              )}

              <div className="flex flex-col">
                <h1 className="text-xl font-bold">{transaction.destination}</h1>
                <p>{transaction.type}</p>
              </div>
            </div>
            <p className="font-light text-gray-300">{transaction.mode}</p>
            <p className="text-xl font-bold">
              {user.currency} {transaction.amount}
            </p>
          </div>
        ))}
      </div>
    );
  }
};

export default TransactionHistory;
