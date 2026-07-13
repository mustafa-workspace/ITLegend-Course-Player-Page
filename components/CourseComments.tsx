export default function CourseComments() {
  const comments = [
    { name: "Student Name Goes Here", date: "Oct 10, 2021", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", avatar: "https://ui-avatars.com/api/?name=Student+One&background=f3f4f6&color=6b7280" },
    { name: "Student Name Goes Here", date: "Oct 15, 2021", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", avatar: "https://ui-avatars.com/api/?name=Student+Two&background=f3f4f6&color=6b7280" },
    { name: "Student Name Goes Here", date: "Oct 19, 2021", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", avatar: "https://ui-avatars.com/api/?name=Student+Three&background=f3f4f6&color=6b7280" },
  ];

  return (
    <div id="target-comments" className="mt-12 mb-16">
      <h2  className="text-2xl font-bold mb-8 text-gray-900 tracking-tight">Comments</h2>
      <div className="space-y-8">
        {comments.map((c, i) => (
          <div key={i} className="flex space-x-4 border-b border-gray-50 pb-8 last:border-0 last:pb-0">
            <div className="shrink-0">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200">
                <img src={c.avatar} alt="Avatar" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">{c.name}</h4>
              <p className="text-xs text-gray-400 mb-2 mt-0.5">{c.date}</p>
              <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl">{c.text}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12">
        <textarea 
          placeholder="Write a comment" 
          rows={5}
          className="w-full border border-gray-200 rounded-xl p-5 focus:outline-none focus:ring-2 focus:ring-[#49B99E]/50 focus:border-[#49B99E] resize-none text-[15px] placeholder-gray-400 shadow-sm transition-all"
        ></textarea>
        <button className="mt-4 bg-[#49B99E] hover:bg-[#3da38a] text-black px-6 py-3 rounded-lg font-medium flex items-center transition ease-in shadow-sm">
          Submit Review <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  );
}
