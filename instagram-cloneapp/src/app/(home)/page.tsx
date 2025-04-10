import Logout from "@/components/logout";
import PostList from "./components/PostList";
import { auth } from "@/lib/auth"

export default async function Home() {
  const data = await auth();
  return (
    <div className="flex gap-5 mt-5">
      <div className="flex w-full justify-center">
        <PostList />
      </div>
      <div className="hidden lg:flex flex-1/3 h-6 gap-3">
        {data?.user?.email}
        <Logout />
      </div>
    </div>
  );
}