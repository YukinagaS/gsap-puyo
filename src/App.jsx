import { useRef, useEffect, useState } from 'react';
import AnimRow from './components/animrow';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  transformX,
  fromTest,
} from './data/animations.js';

gsap.registerPlugin(useGSAP);

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const container = useRef();

  // Undulation animation
  useGSAP(() => {
    gsap.to(".puyo", {
        scaleX: 0.7,
        scaleY: 1.3,
        duration: 0.4,
        repeat: -1,
        yoyo: true
      })
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <header className="my-4">
        <h1 className="text-4xl font-black">
          GSAP ✖︎ ぷよ
        </h1>
      </header>
      <main className="w-full px-5 flex-1 flex flex-col gap-2">
        <h2>Current: {windowWidth}</h2>
        <h2>Small: {40/16}</h2>
        <h2>Medium: {48/16}</h2>
        <h2>Large: {64/16}</h2>
        <h2>XLarge: {80/16}</h2>
        <h2>XXLarge: {96/16}</h2>
        <AnimRow
          img_src={'./img/puyo_red.png'}
          screenWidth={windowWidth}
          container={container}
          title="gsap.to(x:300)"
          animation={transformX}
        />

      </main>
      <footer className="py-4">
        <p className="font-light text-xs sm:text-sm">© Yukinaga Heavy Industries, Inc.</p>
      </footer>
    </div>
  )
}
