interface Title {
    title:string
}

export default function CourseTitle({title}:Title) {
    return (
        <div className="mb-6">
            <h1 className="text-3xl md:text-[2.25rem] font-bold text-gray-900 leading-tight">
                {title !== '' ? title : "Course Title"}
            </h1>
        </div>
    )
}