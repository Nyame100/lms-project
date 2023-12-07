import Image from "next/image";
import Link from "next/link";

interface HomePageCourseCardProps {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  category: string;
}

const HomePageCourseCard = ({
  id,
  title,
  imageUrl,
  price,
  category,
}: HomePageCourseCardProps) => {
  return (
    <Link href={`/courses/${id}`}>
      <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
          <Image fill className="object-cover" alt={title} src={imageUrl} />
        </div>
        <div className="flex flex-col pt-2">
          <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
            {title}
          </div>
          <p className="text-xs text-muted-foreground">{category}</p>
        </div>
      </div>
    </Link>
  );
};

export default HomePageCourseCard;
