import gsap from 'gsap';

export const transformX = (element) => {
  return gsap.to(element, {
    x: 300,
    duration: 0.7,
    repeat: -1,
    yoyo: true
  });
};

export const fromTest = (element) => {
  return gsap.from(element, {
    x: 300,
    duration: 0.7,
    repeat: -1,
    yoyo: true
  });
};
