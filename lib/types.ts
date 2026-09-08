export type Direction = 'up' | 'down' | 'left' | 'right';

export interface Arrow {
  id: string;
  color: string;
  direction: Direction;  // which way it exits
  row: number;
  col: number;
  size: number;          // 1, 2, or 3 cells (in direction axis)
  exited?: boolean;
}

export interface Level {
  id: number;
  grid: number;
  title: string;
  arrows: Arrow[];
}
