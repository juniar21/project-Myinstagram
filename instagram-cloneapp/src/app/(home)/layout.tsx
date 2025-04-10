import Sidebar from "./components/sidebar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex ">
        <div className="md:w-3/12">
          <Sidebar />
        </div>
        <div className="w-4/12 max-xl:w-full">{children}</div>
      </div>
    </>
  );
}
