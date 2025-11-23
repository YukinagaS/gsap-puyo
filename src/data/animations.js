import gsap from 'gsap';

export const getMultiplier = (windowWidth) => {
  const breakpoints = [
    { width: 640, multiplier: 2.5},
    { width: 768, multiplier: 3},
    { width: 1024, multiplier: 4},
    { width: 1280, multiplier: 5},
    { width: 1536, multiplier: 6},
  ];

  return breakpoints.findLast(bp => windowWidth >= bp.width)?.multiplier ?? 1;
};

export const transformX = (element, windowWidth) => {
  console.log(getMultiplier(window.innerWidth));

  return gsap.to(element, {
    x: () => (300 * getMultiplier(windowWidth)),
    duration: 0.5,
    repeat: -1,
    yoyo: true
  });
};

export const fromTest = (element) => {
  return gsap.from(element, {
    x: 1000,
    duration: 0.7,
    repeat: -1,
    yoyo: true
  });
};
