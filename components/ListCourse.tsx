'use client';
import { MessageCircle, Menu, CircleQuestionMarkIcon, Podium } from 'lucide-react';
import DialogQuestions from "@/components/questions";
import { use, useState } from 'react';

export default function ListMaterial() {
    // Handl Smooth El
    const HandlSmooth = (e:string) => {
        const element = document.getElementById(e);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const [dialogQactive,setDialogQ] = useState(false);

    const HandlClickQues = () => {
        setDialogQ(true); 
    }
  
    return (
        <>
        <div className="flex space-x-3 mt-6 mb-8">
            <span  className='cursor-pointer text-gray-500 border border-gray-200 p-2.5 rounded-full hover:border-gray-400 hover:text-gray-700 ease-in transition flex items-center justify-center' onClick={() => HandlSmooth('target-comments')}><MessageCircle size={18}/></span>
            <span id="menu" className='cursor-pointer text-gray-500 border border-gray-200 p-2.5 rounded-full hover:border-gray-400 hover:text-gray-700 ease-in transition flex items-center justify-center' onClick={() => HandlSmooth('target-material')} ><Menu size={18}/></span>
            <span id="question-mark" className='cursor-pointer text-gray-500 border border-gray-200 p-2.5 rounded-full hover:border-gray-400 hover:text-gray-700 ease-in transition flex items-center justify-center CircleQuestionMarkIcon' onClick={HandlClickQues}><CircleQuestionMarkIcon size={18}/></span>
            <span id="podium" className='cursor-pointer text-gray-500 border border-gray-200 p-2.5 rounded-full hover:border-gray-400 hover:text-gray-700 ease-in transition flex items-center justify-center'><Podium size={18}/></span>
        </div>
        <DialogQuestions dialog={dialogQactive} setDialog={setDialogQ}/>
        </>
    );
}