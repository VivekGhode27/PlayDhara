export type Direction = 'up' | 'down' | 'left' | 'right' | 'up-right' | 'up-left' | 'down-right' | 'down-left';

export interface Cell {
  id: string;
  direction: Direction;
  correct: Direction;
  isFixed?: boolean; // source/sink cells that can't rotate
}

export interface Level {
  id: number;
  grid: number; // grid size NxN
  cells: Cell[][];
  title: string;
}

const dirs: Direction[] = ['up', 'right', 'down', 'left'];

function randomDir(): Direction {
  return dirs[Math.floor(Math.random() * 4)] as Direction;
}

// Hand-crafted levels
export const LEVELS: Level[] = [
  // Level 1 — 3x3 simple
  {
    id: 1,
    grid: 3,
    title: "Warm up",
    cells: [
      [
        { id:'0-0', direction:'down',  correct:'down'  },
        { id:'0-1', direction:'left',  correct:'down'  },
        { id:'0-2', direction:'down',  correct:'left'  },
      ],
      [
        { id:'1-0', direction:'right', correct:'right' },
        { id:'1-1', direction:'up',    correct:'right' },
        { id:'1-2', direction:'down',  correct:'down'  },
      ],
      [
        { id:'2-0', direction:'up',    correct:'up'    },
        { id:'2-1', direction:'right', correct:'right' },
        { id:'2-2', direction:'left',  correct:'up'    },
      ],
    ]
  },
  // Level 2 — 4x4
  {
    id: 2,
    grid: 4,
    title: "Getting serious",
    cells: [
      [
        { id:'0-0', direction:'right', correct:'down'  },
        { id:'0-1', direction:'down',  correct:'right' },
        { id:'0-2', direction:'left',  correct:'down'  },
        { id:'0-3', direction:'up',    correct:'left'  },
      ],
      [
        { id:'1-0', direction:'up',    correct:'down'  },
        { id:'1-1', direction:'left',  correct:'right' },
        { id:'1-2', direction:'right', correct:'left'  },
        { id:'1-3', direction:'down',  correct:'down'  },
      ],
      [
        { id:'2-0', direction:'left',  correct:'right' },
        { id:'2-1', direction:'up',    correct:'down'  },
        { id:'2-2', direction:'down',  correct:'right' },
        { id:'2-3', direction:'right', correct:'up'    },
      ],
      [
        { id:'3-0', direction:'down',  correct:'up'    },
        { id:'3-1', direction:'right', correct:'right' },
        { id:'3-2', direction:'up',    correct:'up'    },
        { id:'3-3', direction:'left',  correct:'left'  },
      ],
    ]
  },
  // Level 3 — 4x4 harder
  {
    id: 3,
    grid: 4,
    title: "Think twice",
    cells: [
      [
        { id:'0-0', direction:'down',  correct:'right' },
        { id:'0-1', direction:'right', correct:'down'  },
        { id:'0-2', direction:'up',    correct:'left'  },
        { id:'0-3', direction:'left',  correct:'down'  },
      ],
      [
        { id:'1-0', direction:'left',  correct:'up'    },
        { id:'1-1', direction:'up',    correct:'right' },
        { id:'1-2', direction:'down',  correct:'down'  },
        { id:'1-3', direction:'right', correct:'left'  },
      ],
      [
        { id:'2-0', direction:'right', correct:'down'  },
        { id:'2-1', direction:'down',  correct:'left'  },
        { id:'2-2', direction:'left',  correct:'up'    },
        { id:'2-3', direction:'up',    correct:'right' },
      ],
      [
        { id:'3-0', direction:'up',    correct:'right' },
        { id:'3-1', direction:'left',  correct:'up'    },
        { id:'3-2', direction:'right', correct:'left'  },
        { id:'3-3', direction:'down',  correct:'up'    },
      ],
    ]
  },
  // Level 4 — 5x5
  {
    id: 4,
    grid: 5,
    title: "Flow master",
    cells: Array.from({length:5}, (_, r) =>
      Array.from({length:5}, (_, c) => {
        const correct = dirs[(r + c) % 4] as Direction;
        const direction = dirs[(r + c + 1) % 4] as Direction;
        return { id:`${r}-${c}`, direction, correct };
      })
    )
  },
  // Level 5 — 5x5 harder
  {
    id: 5,
    grid: 5,
    title: "No mercy",
    cells: Array.from({length:5}, (_, r) =>
      Array.from({length:5}, (_, c) => {
        const correct = dirs[(r * 2 + c) % 4] as Direction;
        const direction = dirs[(r * 2 + c + 2) % 4] as Direction;
        return { id:`${r}-${c}`, direction, correct };
      })
    )
  },
];

export function rotateDirection(dir: Direction): Direction {
  const cycle: Direction[] = ['up', 'right', 'down', 'left'];
  const i = cycle.indexOf(dir);
  if (i === -1) return dir;
  return cycle[(i + 1) % 4];
}

export function checkComplete(cells: Cell[][]): boolean {
  return cells.every(row => row.every(cell => cell.direction === cell.correct));
}
