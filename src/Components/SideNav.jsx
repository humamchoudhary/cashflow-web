import { FiLogOut } from "react-icons/fi";
import { TbAlignBoxCenterMiddle } from "react-icons/tb";
import { MdOutlinePolicy } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";

const SideNav = ({ activePage }) => {
  const router = useRouter();
  return (
    <>
      <div className=" px-8 h-screen w-max flex flex-col gap-10 justify-end items-center fixed right-0 bottom-10">
        <div className="text-4xl flex flex-col gap-12">
          <Link
            href="terms"
            className={` text-gray-500  p-3 transition-all duration-200 ${
              activePage == "help" ? "activeNav-item" : "hover:text-gray-400"
            }`}
          >
            <TbAlignBoxCenterMiddle />
          </Link>
          <Link
            href="policy"
            className={` text-gray-500  p-3 transition-all duration-200 ${
              activePage == "support" ? "activeNav-item" : "hover:text-gray-400"
            }`}
          >
            <MdOutlinePolicy />
          </Link>
        </div>
        <div
          className="text-4xl flex flex-col gap-12"
          onClick={() => {
            router.push("/login");
          }}
        >
          <FiLogOut className=" text-red-600 hover:text-red-500 transition-all duration-200" />
        </div>
      </div>
    </>
  );
};

export default SideNav;
