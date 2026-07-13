import { FileText, Lock } from 'lucide-react';

export default function CourseProgs() {
  const weeks = [
    {
      title: "Week 1-4",
      subtitle: "Advanced story telling techniques for writers: Personas, Characters & Plots",
      lessons: [
        { name: "Introduction", locked: false },
        { name: "Course Overview", locked: false },
        { name: "Course Overview", locked: false, questions: 0, duration: "10 MINUTES", active: true },
        { name: "Course Exercise / Reference Files", locked: true },
        { name: "Code Editor Installation (Optional if you have one)", locked: true },
        { name: "Embedding PHP in HTML", locked: true },
      ]
    },
    {
      title: "Week 5-8",
      subtitle: "Advanced story telling techniques for writers: Personas, Characters & Plots",
      lessons: [
        { name: "Defining Functions", locked: true },
        { name: "Function Parameters", locked: true },
        { name: "Return Values From Functions", locked: false, questions: 2, duration: "15 MINUTES" },
        { name: "Global Variable and Scope", locked: true },
        { name: "Newer Way of creating a Constant", locked: true },
        { name: "Constants", locked: true },
      ]
    }
  ];

  return (
    <div id='target-material' className="mt-8 md:mt-0">
      <h2 className="text-xl font-bold mb-8 text-gray-900 tracking-tight">Topics for This Course</h2>
      
      {/* Progress */}
      <div className="mb-10 relative px-2 pt-10">
         <div className="h-1.5 bg-gray-200 w-full rounded-full relative overflow-visible">
            <div className="absolute top-0 left-0 h-full rounded-full" style={{ width: '63%', backgroundColor: '#49B99E' }}></div>
            
            <div className="absolute flex flex-col items-center -translate-x-1/2 bottom-full pb-1" style={{ left: '63%' }}>
                <div className="text-[10px] font-semibold text-[#4e5a87] border border-gray-300 rounded-full w-[30px] h-[30px] flex items-center justify-center bg-white z-10 shadow-sm">
                    You
                </div>
                <div className="w-1.5 h-1.5 bg-white border-b border-r border-gray-300 transform rotate-45 -mt-[4px] z-0"></div>
            </div>

            <div className="absolute flex flex-col items-center -translate-x-1/2 top-full mt-1.5" style={{ left: '63%' }}>
                <span className="text-[11px] font-semibold text-[#4e5a87]">63%</span>
            </div>
         </div>
      </div>

      {/* Accordion / List */}
      <div className="space-y-6">
        {weeks.map((week, wIndex) => (
          <div key={wIndex} className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h3 className="font-bold text-gray-900 mb-1.5">{week.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{week.subtitle}</p>
            </div>
            <div>
              {week.lessons.map((lesson, lIndex) => (
                <div key={lIndex} className={`flex flex-col border-b border-gray-50 last:border-b-0 px-6 py-4 transition-colors ${lesson.name ? 'bg-emerald-50/20' : 'hover:bg-gray-50'}`}>
                  <div className="flex items-center justify-between">
                     <div className="flex items-start space-x-3 max-w-[85%]">
                       <FileText size={16} className={`mt-0.5 ${lesson.name ? 'text-[#49B99E]' : 'text-gray-400'}`} />
                       <span className={`text-[14px] ${lesson.name ? 'font-semibold text-gray-900' : 'text-gray-600'}`}>
                         {lesson.name}
                       </span>
                     </div>
                     <div>
                       {lesson.locked ? (
                         <Lock size={14} className="text-gray-400" />
                       ) : (
                         <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                       )}
                     </div>
                  </div>
                  {(lesson.questions !== undefined || lesson.duration !== undefined) && (
                    <div className="flex ml-7 mt-2.5 space-x-4 text-xs font-bold">
                      {lesson.questions !== undefined && (
                        <span className="text-[#49B99E] uppercase tracking-wider">{lesson.questions} QUESTION</span>
                      )}
                      {lesson.duration !== undefined && (
                        <span className="text-rose-400 uppercase tracking-wider">{lesson.duration}</span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
