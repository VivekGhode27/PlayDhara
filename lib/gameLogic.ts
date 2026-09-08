import { Car, Orientation } from './types';

export function buildGrid(cars: Car[], gridSize: number): (string | null)[][] {
  const grid: (string | null)[][] = Array.from({ length: gridSize }, () =>
    Array(gridSize).fill(null)
  );
  for (const car of cars) {
    if (car.exited) continue;
    for (let i = 0; i < car.size; i++) {
      const r = car.orientation === 'vertical' ? car.row + i : car.row;
      const c = car.orientation === 'horizontal' ? car.col + i : car.col;
      if (r >= 0 && r < gridSize && c >= 0 && c < gridSize) {
        grid[r][c] = car.id;
      }
    }
  }
  return grid;
}

export function canMove(
  car: Car,
  direction: 'forward' | 'backward',
  cars: Car[],
  gridSize: number
): boolean {
  const grid = buildGrid(cars, gridSize);

  if (car.orientation === 'horizontal') {
    if (direction === 'forward') {
      // move right — check if rightmost cell + 1 is free or out of bounds (exit)
      const nextCol = car.col + car.size;
      if (nextCol >= gridSize) return true; // can exit
      return grid[car.row][nextCol] === null;
    } else {
      const prevCol = car.col - 1;
      if (prevCol < 0) return false;
      return grid[car.row][prevCol] === null;
    }
  } else {
    if (direction === 'forward') {
      const nextRow = car.row + car.size;
      if (nextRow >= gridSize) return true; // can exit
      return grid[nextRow][car.col] === null;
    } else {
      const prevRow = car.row - 1;
      if (prevRow < 0) return false;
      return grid[prevRow][car.col] === null;
    }
  }
}

export function moveCar(
  car: Car,
  direction: 'forward' | 'backward',
  cars: Car[],
  gridSize: number
): { updatedCars: Car[]; exited: boolean } {
  if (!canMove(car, direction, cars, gridSize)) {
    return { updatedCars: cars, exited: false };
  }

  let exited = false;

  const updatedCars = cars.map(c => {
    if (c.id !== car.id) return c;
    if (car.orientation === 'horizontal') {
      const newCol = direction === 'forward' ? car.col + 1 : car.col - 1;
      if (newCol + car.size > gridSize || newCol < 0) {
        exited = true;
        return { ...c, exited: true };
      }
      return { ...c, col: newCol };
    } else {
      const newRow = direction === 'forward' ? car.row + 1 : car.row - 1;
      if (newRow + car.size > gridSize || newRow < 0) {
        exited = true;
        return { ...c, exited: true };
      }
      return { ...c, row: newRow };
    }
  });

  return { updatedCars, exited };
}

export function isLevelComplete(cars: Car[]): boolean {
  return cars.every(c => c.exited === true);
}
