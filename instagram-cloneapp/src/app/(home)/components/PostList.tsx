import axios from "@/lib/axios";
import ICard from "@/components/card";
import { IPost } from "@/app/types/typeRegister";
import { auth } from "@/lib/auth";

export default async function PostList() {
  const user = await auth();
  const { data } = await axios.get("/posts",{
    headers: {
      Authorization: `Bearer ${user?.accessToken}`,
    },
  });
  const posts: IPost[] = data.posts;

  return (
    <section className="w-full">
      {posts.map((item, idx) => {
        return (
          <div key={idx} className="w-full">
            <ICard post={item} />
          </div>
        );
      })}
    </section>
  );
}
