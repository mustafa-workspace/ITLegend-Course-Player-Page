import Image from "next/image";
import CourseTitle from '@/components/Title';
import CourseVideo from "@/components/CourseSingleVideo";
import CourseMaterial from "@/components/CourseMaterial";
import CourseComments from "@/components/CourseComments";
import CourseProgs from "@/components/CourseProgs";


export default function Home() {
  return (
    <div className="container p-4 mx-auto max-w-7xl">
      <main className="content">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 font-medium mb-4 flex items-center space-x-2">
          <span className="hover:text-gray-800 cursor-pointer transition">Home</span>
          <span>›</span>
          <span className="hover:text-gray-800 cursor-pointer transition">Courses</span>
          <span>›</span>
          <span className="text-gray-800">Course Details</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Left Column (Video, Materials, Comments) */}
          <div className="md:col-span-8">
            <CourseTitle title={"Starting SEO as your Home Based Business"} />
            <CourseVideo/>
            <CourseMaterial />
            <CourseComments />
          </div>
          
          {/* Right Column (Course Progression / Topics) */}
          <div className="md:col-span-4 mt-8 md:mt-0">
            <CourseProgs />
          </div>
        </div>
      </main>
    </div>
  );
}
