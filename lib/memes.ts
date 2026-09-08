export const BLOCKED_MEMES = [
  "Tujhse na ho payega! 😤",
  "Bhai seedha socho! 🤦",
  "Tera dimag ghas charne gaya hai kya? 🐄",
  "Arre yaar... itna bhi nahi? 😭",
  "Itna paas aakar bhi nahi hua 💔",
  "Einstein hote toh kab ka nikal jaata 🧠",
  "Bhai try toh kar raha hai... 😅",
  "Yeh wala nahi, woh wala! 😩",
  "Chal hata, main khelta hoon 💀",
  "Traffic inspector aa jayega abhi! 🚔",
  "Parking warden dekh raha hai! 👀",
  "Itni jagah hai aur phir bhi nahi nikla? 🅿️",
];

export const SLOW_MEMES = [
  "So gaye kya? Uth! ☀️",
  "Itna time? Pizza aa jaata tab tak! 🍕",
  "Zindagi bhar kheloge kya? 😏",
  "Bhai jaldi kar, towing wala aa raha hai! 🚗",
];

export const WIN_MEMES = [
  "Sab gaadi nikal gayi! 🔥",
  "Parking khali! Champion hai tu! 🎉",
  "Lo kar diya kaam! 💪",
  "Shabash beta, parking master! 👏",
  "Ek dum mast! 🚀",
];

let lastMeme = "";

export function getRandomMeme(pool: string[]): string {
  const filtered = pool.filter(m => m !== lastMeme);
  const pick = filtered[Math.floor(Math.random() * filtered.length)];
  lastMeme = pick;
  return pick;
}
