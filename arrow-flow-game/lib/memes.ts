export const MISTAKE_MEMES = [
  "Tujhse na ho payega! 😤",
  "Bhai seedha socho! 🤦",
  "Tera dimag ghas charne gaya hai kya? 🐄",
  "Arre yaar... itna bhi nahi? 😭",
  "Itna paas aakar bhi nahi hua 💔",
  "Einstein hote toh kab ka solve ho jaata 🧠",
  "Bhai try toh kar raha hai... 😅",
  "Socha nahi? Socho! 🤔",
  "Galat diksha, bhai! ⬆️➡️",
  "Yeh wala nahi, woh wala! 😩",
  "Chal hata, main khelta hoon 💀",
  "Teri galti hai bhai, apna dimag laga! 🔧",
];

export const SLOW_MEMES = [
  "So gaye kya? Uth! ☀️",
  "Itna time? Pizza aa jaata toh tak! 🍕",
  "Zindagi bhar kheloge kya? 😏",
  "Bhai jaldi kar, duniya ghoom rahi hai ⏰",
];

export const WIN_MEMES = [
  "Dekha! Aakhir kar hi liya! 🔥",
  "Bhai genius nikla tu! 🎉",
  "Lo kar diya kaam! 💪",
  "Shabash beta! 👏",
];

let lastMeme = "";

export function getRandomMeme(pool: string[]): string {
  const filtered = pool.filter(m => m !== lastMeme);
  const pick = filtered[Math.floor(Math.random() * filtered.length)];
  lastMeme = pick;
  return pick;
}
