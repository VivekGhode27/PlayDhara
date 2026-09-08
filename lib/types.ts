export type Orientation = 'horizontal' | 'vertical';

export interface Car {
  id: string;
  color: string;
  orientation: Orientation;
  row: number;    // top-left cell row
  col: number;    // top-left cell col
  size: number;   // 2 or 3 cells
  exited?: boolean;
}

export interface Level {
  id: number;
  grid: number;   // NxN
  title: string;
  cars: Car[];
  exitRow?: number;  // which row is the exit (right side) for horizontal cars
  exitCol?: number;  // which col is the exit (bottom) for vertical cars
}
