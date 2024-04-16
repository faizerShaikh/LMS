import { CourseSpecializationInterface } from "interfaces";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../buttons";

export interface CrousesCardProps {
  specialization: CourseSpecializationInterface;
}

export function CoursesCard({ specialization }: CrousesCardProps) {
  return (
    <div className="w-[30%] h-[300px] mx-2  shadow-2xl rounded-md mb-4">
      <Image
        width={500}
        height={160}
        src={`${process.env.BASE_MEDIA_URL}${specialization?.course?.course_image}`}
        alt="img"
        className="w-full rounded-t-md"
      />
      <div className="flex flex-col justify-between">
        <div className="p-4">
          <p className="font-bold m-0 min-h-12">
            {specialization.name.length > 40
              ? `${specialization.name.slice(0, 45)}...`
              : specialization.name}
          </p>
        </div>
        <div className="px-4 mb-3">
          <Link href={`courses/${specialization.slug}`} className="text-white">
            <Button className="bg-blue-900 py-2 w-full rounded-md text-white">
              View Details{" "}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
