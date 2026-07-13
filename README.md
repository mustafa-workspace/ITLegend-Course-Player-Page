# ITLegend Course Player Page

A modern, interactive e-learning course player interface built with Next.js and Tailwind CSS. This project serves as a comprehensive video player and curriculum dashboard for online courses.

## Features

- **Course Video Player:** Integrated video playback using `next-video` for a seamless learning experience.
- **Dynamic Course Curriculum:** An accordion-based list displaying course topics, modules, and individual lessons.
- **Progress Tracking:** A visual progress bar that displays the student's completion percentage with a stylish tooltip indicator.
- **Interactive Quizzes/Questions:** A beautiful, custom-styled popup dialog for in-course questions and knowledge checks.
- **Course Comments & Details:** Dedicated sections for course materials, discussions, and instructor details.
- **Fully Responsive:** Optimized layout for both desktop and mobile devices.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** Custom components, [shadcn/ui](https://ui.shadcn.com/), and [Base UI](https://base-ui.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Video:** [next-video](https://next-video.dev/)

## Getting Started

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/mustafa-workspace/ITLegend-Course-Player-Page.git
cd ITLegend-Course-Player-Page
npm install
```

Then, start the development server:

```bash
npm run dev
```


## Project Structure

- `app/` - Contains the main Next.js pages, layouts, and global CSS.
- `components/` - Contains all reusable React components:
  - `CourseSingleVideo.tsx` - The main video player.
  - `CourseProgs.tsx` - The curriculum accordion and progress bar.
  - `questions.tsx` - The interactive quiz/question popup dialog.
  - `CourseComments.tsx` - Course discussion section.
  - `ListCourse.tsx` - Layout wrapper for the course content tabs.
  - `ui/` - Reusable foundational UI components (Buttons, Dialogs, etc.).
- `public/` - Static assets, images, and local video files.
