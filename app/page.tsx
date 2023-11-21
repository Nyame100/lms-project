"use client";
import { useRouter } from "next/navigation";
import Navbar from "./(dashboard)/_components/navbar";
import { Sidebar } from "lucide-react";
import NavbarRoutes from "@/components/navbar-routes";
import HomeNavRoutes from "@/components/homepage-nav-routes";

const HomePage = () => {
  const router = useRouter();

  const onClick = () => {
    router.push("/dashboard");
  };
  return (
    <div className="h-full">
      {/* Navbar div -- slightly different from general navbar*/}
      <div className="h-[80px] md:pl-0 fixed inset-y-0 w-full z-50">
        <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
          {/* Remove NavbarRoutes and input your own routes to signup or signin */}
          {/* <NavbarRoutes /> */}
          <HomeNavRoutes />
        </div>
      </div>
      {/* Sidebar div */}
      {/* <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div> */}
    </div>
    // <div>
    //   <div>This is the home page</div>
    //   <button onClick={onClick}>Click me</button>
    // </div>
  );
};

export default HomePage;
