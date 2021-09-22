export function getRandomColor() {
  let letters = "BCDEF";
  let color = "#";
  let color2 = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
    color2 += letters[Math.floor(Math.random() * letters.length)];
  }
  return [color, color2];
}
