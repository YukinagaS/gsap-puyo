import { useRef } from 'react';
import AnimRow from './components/animrow';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  transformX,
  fromTest,
} from './data/animations.js';

gsap.registerPlugin(useGSAP);

export default function App() {
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

  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <header className="my-4">
        <h1 className="text-4xl font-black">
          GSAP ✖︎ ぷよ
        </h1>
      </header>
      <main className="w-full md:w-150 px-5 flex-1 flex flex-col gap-2">

        <AnimRow
          img_src={'./img/puyo_red.png'}
          container={container}
          title="gsap.to(x:300)"
          animation={transformX}
        />

        <AnimRow
          img_src={'./img/puyo_blue.png'}
          container={container}
          title="gsap.from(x:300)"
          animation={fromTest}
        />

      </main>
      <footer className="py-4">
        <p className="font-light text-xs sm:text-sm">© Yukinaga Heavy Industries, Inc.</p>
      </footer>
    </div>
  )
}
