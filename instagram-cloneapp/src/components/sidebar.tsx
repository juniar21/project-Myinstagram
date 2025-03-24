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
    <div className="fixed w-[300px] border-r-4 h-full flex flex-col">
      <div className="p-8">
        <div className="grid grid-cols-1 justify-items-start gap-8">
          <Image
            src={"/instagram.png"}
            height={100}
            width={150}
            alt="logoinstag"
            className="mb-4"
          />
          <div className="flex gap-5 text-[20px] hover:font-bold">
            <GoHomeFill className="text-3xl" />
            <p>Home</p>
          </div>
          <div className="flex gap-5 text-[20px] hover:font-bold">
            <IoSearchOutline className="text-3xl" />
            <p>Search</p>
          </div>
          <div className="flex gap-5 text-[20px] hover:font-bold">
            <MdOutlineExplore className="text-3xl" />
            <p>Explore</p>
          </div>
          <div className="flex gap-5 text-[20px] hover:font-bold">
            <BiSolidMoviePlay className="text-3xl" />
            <p>Reels</p>
          </div>
          <div className="flex gap-5 text-[20px] hover:font-bold">
            <PiMessengerLogoBold className="text-3xl" />
            <p>Messages</p>
          </div>
          <div className="flex gap-5 text-[20px] hover:font-bold">
            <FaRegHeart className="text-3xl" />
            <p>Notifications</p>
          </div>
          <div className="flex gap-5 text-[20px] hover:font-bold">
            <CiSquarePlus className="text-3xl" />
            <p>Create</p>
          </div>
          <div className="flex gap-5 text-[20px] hover:font-bold">
            <RxAvatar className="text-3xl" />
            <p>Profile</p>
          </div>
        </div>

        <div className="flex gap-5 text-[20px] hover:font-bold mt-[40px]">
          <CiMenuBurger className="text-3xl" />
          <p>More</p>
        </div>
      </div>
    </div>
  );
}
