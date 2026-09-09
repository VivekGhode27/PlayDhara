export const BLOCKED_MEMES = [
  "Tujhse na ho payega! 😤",
  "Bhai seedha socho! 🤦",
  "Tera dimag ghas charne gaya hai kya? 🐄",
  "Arre yaar... itna bhi nahi krna tha? 😭",
  "Aankh band karke tap kar raha hai kya? 🙈",
  "Beta coding seekh, game nahi khela jata tujhse 😂",
  "Ruk, Google Maps se poochh 🗺️",
  "Dimag hai ya decoration? 🪆",
  "Yeh wala nahi, woh wala! 😩",
  "Chal hat, main khelta hoon 💀",
  "Itna paas aakar bhi nahi hua 💔",
  "Einstein hote toh kab ka nikal jaata 🧠",
];

export const BLOCKED_SAVAGE = [
  "Teen baar galat? Bhai restart maar! 💥",
  "Itni galtiyan? Resume mein mat likhna 😂",
  "Bhai phone rakh de, So ja thoda sa 😴",
  "Yaar ab toh seriously soch! 🤯",
  "Kya kar raha hai bhai seriously? 🫠",
];

export const SLOW_MEMES = [
  "So gaye kya? Uth! ☀️",
  "Itna time? Pizza aa jaata tab tak! 🍕",
  "Zindagi bhar kheloge kya? 😏",
  "Soch raha hai ya sapna dekh raha hai? 💤",
  "Ek move karne mein itna time? Shaadi kar le! 💍",
  "Jaldi kr kal subh panvel nikalna hai",
];

export const COMBO_MEMES = [
  "Bhai ki speed dekhi! ⚡",
  "Kya baat hai, aaj toh form mein hai! 🔥",
  "Pro player aa gaya! 🎮",
  "Yeh toh legend hai bhai! 👑",
  "Ek dum mast move! 💪",
  "Combo! Genius nikla tu toh! 🧠⚡",
];

export const WIN_MEMES = [
  "Sab nikal gaye! Champion! 🎉",
  "Lo kar diya kaam! 💪",
  "Dekha! Aakhir kar hi liya! 🔥",
  "Shabash beta! 👏",
  "Ek dum mast! 🚀",
  "Next level ready hai, himmat hai? 😎",
];

export const MILESTONE_MEMES: Record<number, string> = {
  5:  "Rookie Driver ban gaya! 🚗",
  10: "Road Runner hai tu! 🏃⚡",
  15: "Traffic Cop level! 👮",
  20: "Speed Racer unlock! 🏎️",
};

let lastMeme = "";
let blockedCount = 0;

export function getRandomMeme(pool: string[]): string {
  const filtered = pool.filter(m => m !== lastMeme);
  const pick = filtered[Math.floor(Math.random() * filtered.length)];
  lastMeme = pick;
  return pick;
}

export function getBlockedMeme(): string {
  blockedCount++;
  if (blockedCount >= 3) {
    blockedCount = 0;
    return getRandomMeme(BLOCKED_SAVAGE);
  }
  return getRandomMeme(BLOCKED_MEMES);
}

export function resetBlockedCount(): void {
  blockedCount = 0;
}
