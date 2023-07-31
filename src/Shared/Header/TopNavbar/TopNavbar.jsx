import React, { useEffect, useState } from 'react'
import { useTitle } from '../../../Componets/useTitle/useTitle';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Full-Stack Developer', 'Mren-Stack Developer', 'React Developer', 'Web Developer'];
const TopNavbar = () => {
  const [index, setIndex] = useState(0);
  const user = ['#9e9e9e']
  useTitle('Home')
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div className="w-[100%] px-4 m-auto flex items-center bg-[#010101]">
      <div className="flex-1">
      <TextTransition className='text-center mt-3 mb-2 ms-10 text-base text-[#d33b33] font-bold font-poppins' springConfig={presets.slow}>{TEXTS[index % TEXTS.length]}</TextTransition>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a>Link</a></li>
        </ul>
      </div>
    </div>
  )
}

export default TopNavbar