export const particlesData = Array.from({ length: 25 }).map(() => ({
  size: Math.random() * 6 + 4,
  left: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 10 + Math.random() * 10,
  xMove: Math.random() * 30 - 15,
}));