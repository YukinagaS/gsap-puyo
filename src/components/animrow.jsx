import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function AnimRow({ img_src, windowWidth, container, title, animation }) {

  const target = useRef();

  useGSAP(() => {
    animation(target.current, windowWidth)
  }, {scope: container})

  return (
    <section ref={container} className="bg-black rounded-xl flex flex-col py-2 gap-1">
      <h2 className="mb-2 text-center text-sm font-bold">
        {title}
      </h2>
        <img ref={target} src={img_src} className="puyo" />
    </section>
  )
}
