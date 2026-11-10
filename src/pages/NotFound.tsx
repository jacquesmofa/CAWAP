import { useLocation } from "react-router-dom";
import copy from '../content/pages/not-found.json';
// Text, images and links: src/content/pages/not-found.json (editable in the website editors).

export default function NotFound() {
  const location = useLocation();
  
  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="absolute bottom-0 text-9xl md:text-[12rem] font-black text-gray-50 select-none pointer-events-none z-0">{copy.main.title}</h1>
      <div className="relative z-10">
        <h1 className="text-xl md:text-2xl font-semibold mt-6">{copy.main.title2}</h1>
        <p className="mt-2 text-base text-gray-400 font-mono">{location.pathname}</p>
        <p className="mt-4 text-lg md:text-xl text-gray-500">{copy.main.text}</p>
      </div>
    </div>
  );
}