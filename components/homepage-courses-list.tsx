import { Course, Category } from "@prisma/client";
import HomePageCourseCard from "./homepage-course-card";

type CourseWithCategory = Course & {
  category: Category | null;
};

interface HomePageCoursesListProps {
  items: CourseWithCategory[];
}

const HomePageCoursesList = ({ items }: HomePageCoursesListProps) => {
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        {items.map((item) => (
          <HomePageCourseCard
            key={item.id}
            id={item.id}
            title={item.title}
            imageUrl={item.imageUrl!}
            price={item.price!}
            category={item?.category?.name!}
          />
        ))}
      </div>
      {items.length === 0 && (
        <div className="text-center text-sm text-muted-foreground mt-10">
          No courses found
        </div>
      )}
    </div>
  );
};

export default HomePageCoursesList;
