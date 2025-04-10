"use client";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { BsChat } from "react-icons/bs";
import { BsSend } from "react-icons/bs";
import { GrBookmark } from "react-icons/gr";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useState } from "react";
import { IPost } from "@/app/types/typeRegister";
import { convertTime } from "@/utils/time";
import { FcLike } from "react-icons/fc";


interface IProps {
  post: IPost;
}

export default function ICard({ post }: IProps) {
  const [isExpanded, setIsExpanded] = useState(false); 
  return (
    <div className="border border-grey-500 w-full rounded-sm p-2">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center mt-2">
          <div className="overflow-auto object-cover rounded-full w-[30px] h-[30px]">
            <Image
              src={post.user.avatar || "/avatar.jpg"}
              alt={post.user.username}
              width={30}
              height={30}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-2">
            <span className="font-bold ">{post.user.username}</span>
            <span className="font-bold -translate-y-[4px] ">.</span>
            <span className="">{convertTime(post.createdAt)}</span>
          </div>
        </div>
        <div className="mt-2 flex items-center">
          <HiOutlineDotsHorizontal />
        </div>
      </div>
      <div className="w-full relative overflow-hidden h-[400px] border mt-2">
        <Image
          src={post.imageUrl}
          alt={post.user.username + "post"}
          fill
          priority
        />
      </div>
      
      <div className="flex justify-between">
        <div className="flex p-2 gap-4">
          {
            post.liked ? <FcLike className="text-[28px]" /> : <CiHeart className="text-[30px]" />
          }
          <BsChat className="text-[20px] scale-x-[-1] mt-1 " />
          <BsSend className="text-[21px] mt-1" />
        </div>
        <div className="flex p-2 gap-4">
          <GrBookmark className="text-[21px] mt-1" />
        </div>
      </div>
      <div className="px-2 top-0">
        <p className={isExpanded ? "" : "line-clamp-2"}>
          <span className="font-bold">{post.likeCount} suka</span> <br />
          <span className="font-bold ">{post.user.username} </span>
          {post.caption}
        </p>
        <button
          className="text-gray-600 font-semibold hover:underline mt-1"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Less" : "...More"}
        </button>
      </div>
      <div className="p-2 top-0">
        <p className="font-bolt text-gray-600">Add a comment...</p>
      </div>
    </div>
  );
}
