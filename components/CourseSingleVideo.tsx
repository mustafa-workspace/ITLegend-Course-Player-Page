import Video from 'next-video';
import MaterialCourse from '@/public/videos/get-started.mp4.json';
import { Asset } from 'next-video/dist/cjs/assets.js';
import {Play } from 'lucide-react';
import ListMaterial from './ListCourse';
export default function CourseVideo() {
    return (
        <>
            <div className="CourseVideos mt-3 z-50 max-sm:sticky top-1 left-1 right-1 rounded-2xl overflow-hidden">
                <div className='icon-play relative overflow-hidden'>
                    <div className='bottom-3 absolute  z-50'><Play/></div>
                </div>
                <Video
                className='rounded-3xl' 
                src={MaterialCourse as Asset}
                poster={'/youThum.jpg'}
                 />
            </div>
            <ListMaterial/>
        </>
    ) 

};