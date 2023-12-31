import { useRouter } from "next/navigation";
import Navbar from "./(dashboard)/_components/navbar";
import { Sidebar } from "lucide-react";
import NavbarRoutes from "@/components/navbar-routes";
import HomeNavRoutes from "@/components/homepage-nav-routes";
import { useEffect, useState } from "react";
import axios from "axios";
import { Categories } from "./(dashboard)/(routes)/search/_components/categories";
import { SearchInput } from "@/components/search-input";
import HomePageCoursesList from "@/components/homepage-courses-list";
import { db } from "@/lib/db";

const HomePage = async () => {
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  const courses = await db.course.findMany({
    where: {
      isPublished: true,
    },
    include: {
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  // const router = useRouter();

  // fetching categories from the backend

  // const [categories, setCategories] = useState([]);
  // const [loading, setLoading] = useState(false);

  /* I used useEffect for fetching the data instead of directly
  using prisma to get the data from the backend because this component 
  is a client component
  */

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const res = await axios.get(`/api/dashboard`);
  //       setCategories(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData().catch(console.error);
  // }, []);

  // const onClick = () => {
  //   router.push("/dashboard");
  // };
  return (
    <>
      <div className="h-full">
        {/* Navbar div -- slightly different from general navbar*/}
        <div className="h-[80px] md:pl-0 fixed inset-y-0 w-full z-50">
          <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
            <HomeNavRoutes />
          </div>
          {categories.length > 0 && (
            <div className="p-6 md:pl-56">
              <Categories items={categories} />
            </div>
          )}
          <HomePageCoursesList items={courses} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
