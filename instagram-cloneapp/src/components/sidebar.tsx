import Image from "next/image";
import { GoHomeFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { BiSolidMoviePlay } from "react-icons/bi";
import { PiMessengerLogoBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { CiSquarePlus, CiMenuBurger } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";

export default function Sidebar() {
  return (
    <div className="fixed w-[300px] bottom-0 max-md:w-full max-xl:w-[100px] max-md:border-r-4 md:h-full flex md:flex-col bg-white max-md:justify-center transition-all delay-500 duration-800">
      <div className="p-8">
        <div className="max-md:flex md:grid md:grid-cols-1 md:justify-items-start gap-8 max-md:justify-items-end">
          <Image
            src={"/instagram.png"}
            height={100}
            width={150}
            alt="logoinstag"
            className="mb-4 max-xl:hidden "
          />
          <div className="flex gap-5 text-[20px] hover:font-bold">
            <GoHomeFill className="text-3xl" />
            <p className="max-xl:hidden">Home</p>
          </div>
          <div className="flex gap-5 text-[20px] hover:font-bold max-md:hidden">
            <IoSearchOutline className="text-3xl" />
            <p className="max-xl:hidden">Search</p>
          </div>
          <div className="flex gap-5 text-[20px] hover:font-bold">
            <MdOutlineExplore className="text-3xl" />
            <p className="max-xl:hidden">Explore</p>
          </div>
          <div className="flex gap-5 text-[20px] hover:font-bold">
            <BiSolidMoviePlay className="text-3xl" />
            <p className="max-xl:hidden">Reels</p>
          </div>
          <div className="flex gap-5 text-[20px] hover:font-bold">
            <PiMessengerLogoBold className="text-3xl" />
            <p className="max-xl:hidden">Messages</p>
          </div>
          <div className="flex gap-5 text-[20px] hover:font-bold max-md:hidden">
            <FaRegHeart className="text-3xl" />
            <p className="max-xl:hidden">Notifications</p>
          </div>
          <div className="flex gap-5 text-[20px] hover:font-bold">
            <CiSquarePlus className="text-3xl" />
            <p className="max-xl:hidden">Create</p>
          </div>
          <div className="flex gap-5 text-[20px] hover:font-bold">
            <RxAvatar className="text-3xl" />
            <p className="max-xl:hidden">Profile</p>
          </div>
        </div>

        <div className="flex gap-5 text-[20px] hover:font-bold mt-[40px] max-md:hidden">
          <CiMenuBurger className="text-3xl" />
          <p className="max-xl:hidden">More</p>
        </div>
      </div>
    </div>
  );
}
