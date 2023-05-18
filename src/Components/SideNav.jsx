import { AiOutlineHistory, AiOutlineHome } from "react-icons/ai";
import { RiSettingsLine, RiUser3Line, RiFeedbackLine } from "react-icons/ri";
import { FaExchangeAlt, FaWallet } from "react-icons/fa";
import { FiHelpCircle, FiLogOut } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import Link from "next/link";

const SideNav = ({ activePage }) => {
  console.log(activePage);
  return (
    <>
      <div
        style={{
          boxShadow: "-100px 0px 201px 5px #1EEBE7",
        }}
        className="fixed w-[90px] h-screen -z-10"
      ></div>
      <div className=" px-8 bg-accent h-screen w-max flex flex-col gap-[72px] justify-center items-center fixed left-0 top-0">
        <div className="text-4xl flex flex-col gap-12">
          <Link
            href="/"
            className={` text-gray-500  p-3 transition-all duration-200 ${
              activePage == "home" ? "activeNav-item" : "hover:text-gray-400"
            }`}
          >
            <AiOutlineHome />
          </Link>
          <Link
            href="wallet"
            className={` text-gray-500  p-3 transition-all duration-200 ${
              activePage == "wallet" ? "activeNav-item" : "hover:text-gray-400"
            }`}
          >
            <FaWallet />
          </Link>
          <Link
            href="transfer"
            className={` text-gray-500  p-3 transition-all duration-200 ${
              activePage == "transfer"
                ? "activeNav-item"
                : "hover:text-gray-400"
            }`}
          >
            <FaExchangeAlt />
          </Link>
          <Link
            href="history"
            className={` text-gray-500  p-3 transition-all duration-200 ${
              activePage == "history" ? "activeNav-item" : "hover:text-gray-400"
            }`}
          >
            <AiOutlineHistory />
          </Link>
        </div>

        <div className="text-4xl flex flex-col gap-12">
          <Link
            href="user"
            className={` text-gray-500  p-3 transition-all duration-200 ${
              activePage == "user" ? "activeNav-item" : "hover:text-gray-400"
            }`}
          >
            <RiUser3Line />
          </Link>
          <Link
            href="settings"
            className={` text-gray-500  p-3 transition-all duration-200 ${
              activePage == "settings"
                ? "activeNav-item"
                : "hover:text-gray-400"
            }`}
          >
            <RiSettingsLine />
          </Link>
        </div>
        <div className="text-4xl flex flex-col gap-12">
          <Link
            href="help"
            className={` text-gray-500  p-3 transition-all duration-200 ${
              activePage == "help" ? "activeNav-item" : "hover:text-gray-400"
            }`}
          >
            <FiHelpCircle />
          </Link>
          <Link
            href="support"
            className={` text-gray-500  p-3 transition-all duration-200 ${
              activePage == "support" ? "activeNav-item" : "hover:text-gray-400"
            }`}
          >
            <BiSupport />
          </Link>
          <Link
            href="feedback"
            className={` text-gray-500  p-3 transition-all duration-200 ${
              activePage == "feedback"
                ? "activeNav-item"
                : "hover:text-gray-400"
            }`}
          >
            <RiFeedbackLine />
          </Link>
        </div>
        <div className="text-4xl flex flex-col gap-12">
          <FiLogOut className=" text-red-600 hover:text-red-500 transition-all duration-200" />
        </div>
      </div>
    </>
  );
};

export default SideNav;
