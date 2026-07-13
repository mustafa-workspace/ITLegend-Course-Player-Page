import { Clock, BookOpen, Users, Globe } from 'lucide-react';

export default function CourseMaterial() {
  const materials = [
    { icon: <Clock size={20} className="text-gray-500" />, label: 'Duration:', value: '3 weeks' },
    { icon: <BookOpen size={20} className="text-gray-500" />, label: 'Lessons:', value: '8' },
    { icon: <Users size={20} className="text-gray-500" />, label: 'Enrolled:', value: '65 students' },
    { icon: <Globe size={20} className="text-gray-500" />, label: 'Language:', value: 'English' }
  ];

  return (
    <div  className="mt-8 mb-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 tracking-tight">Course Materials</h2>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-8">
           {materials.map((m, i) => (
             <div key={i} className="flex items-center justify-between text-gray-600">
               <div className="flex items-center space-x-3">
                 {m.icon}
                 <span className="font-medium text-[15px]">{m.label}</span>
               </div>
               <span className="font-semibold text-gray-900">{m.value}</span>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
