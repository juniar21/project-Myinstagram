/* eslint-disable @typescript-eslint/no-explicit-any */
import Sidebar from "@/components/sidebar";
import Image from "next/image";

export default async function Home() {
  
  const res = await fetch(
    "http://localhost:8000/api/posts"
  );
  
  const data = await res.json();
  console.log(data.post);
  return (
    <div>
          {" "}
          <Sidebar />
          <div className="container mx-auto">
            <div className="p-4 ml-[300px]">
            {data.posts.length > 0 ? (
            data.posts.map((post: any) => (
              <div key={post.id} className="p-4 border-b border-gray-300">
                <h2 className="font-bold">{post.user.username}</h2>
                <Image
                  src={post.imageUrl}
                  width={500}
                  height={500}
                  alt={post.caption}
                  className="object-cover rounded-lg my-2"
                />
                <p className="text-gray-500">{post.caption}</p>
                <p className="text-gray-500">{post.user.email}</p>
              </div>
            ))
          ) : (
            <p>No posts available.</p>
          )}
            </div>
          </div>
        </div>
      );
}
