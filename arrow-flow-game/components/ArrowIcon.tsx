import { Direction } from "@/lib/levels";

const rotationMap: Record<Direction, number> = {
  up: 0,
  'up-right': 45,
  right: 90,
  'down-right': 135,
  down: 180,
  'down-left': 225,
  left: 270,
  'up-left': 315,
};

interface ArrowIconProps {
  direction: Direction;
  correct: Direction;
  size?: number;
}

export default function ArrowIcon({ direction, correct, size = 32 }: ArrowIconProps) {
  const rotation = rotationMap[direction];
  const isCorrect = direction === correct;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      style={{
        transform: `rotate(${rotation}deg)`,
        transition: 'transform 0.2s cubic-bezier(0.34,1.56,0.64,1)',
        color: isCorrect ? '#2D7A4F' : '#0D1B3E',
      }}
    >
      {/* Arrow shaft */}
      <line
        x1="16" y1="26"
        x2="16" y2="8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Arrow head */}
      <polyline
        points="9,15 16,7 23,15"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
