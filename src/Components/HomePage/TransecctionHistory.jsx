import { BsArrowDownLeft, BsArrowUpRight } from "react-icons/bs";

const TransectionHistory = ({ user }) => {
  console.log(user);
  return (
    <div className="flex flex-col gap-8 p-10 bg-accent rounded-lg  w-full h-full overflow-scroll max-h-[500px] min-h-[500px] mb-8">
      {user.transection_log.map((transection, index) => (
        <div
          key={index}
          className="flex flex-row justify-between items-center bg-white bg-opacity-0 py-3 px-5 hover:bg-opacity-10 duration-200 rounded-md"
        >
          <div className="flex flex-row gap-3 items-center">
            {transection.transection == "outgoing" ? (
              <div className=" bg-red-400 p-5 text-2xl rounded-full">
                <BsArrowUpRight />
              </div>
            ) : (
              <div className=" bg-green-400 p-5 text-2xl rounded-full">
                <BsArrowDownLeft />
              </div>
            )}

            <div className="flex flex-col">
              <h1 className="text-xl font-bold">{transection.destination}</h1>
              <p>{transection.type}</p>
            </div>
          </div>
          <p className="font-light text-gray-300">{transection.mode}</p>
          <p className="text-xl font-bold">
            {user.currency} {transection.amount}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TransectionHistory;
