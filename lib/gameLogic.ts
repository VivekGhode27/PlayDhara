import { Arrow, Direction } from './types';

export function buildGrid(arrows: Arrow[], gridSize: number): (string | null)[][] {
  const grid: (string | null)[][] = Array.from({ length: gridSize }, () =>
    Array(gridSize).fill(null)
  );
  for (const a of arrows) {
    if (a.exited) continue;
    // Arrow occupies cells based on direction axis
    const isVertical = a.direction === 'up' || a.direction === 'down';
    for (let i = 0; i < a.size; i++) {
      const r = isVertical ? a.row + i : a.row;
      const c = isVertical ? a.col : a.col + i;
      if (r >= 0 && r < gridSize && c >= 0 && c < gridSize) {
        if (grid[r][c] !== null) continue; // skip if already occupied
        grid[r][c] = a.id;
      }
    }
  }
  return grid;
}

// Check if path from arrow to edge is clear
export function canExit(arrow: Arrow, arrows: Arrow[], gridSize: number): boolean {
  const grid = buildGrid(arrows, gridSize);
  const { direction, row, col, size } = arrow;

  if (direction === 'right') {
    const startCol = col + size;
    for (let c = startCol; c < gridSize; c++) {
      if (grid[row][c] !== null) return false;
    }
    return true;
  }
  if (direction === 'left') {
    for (let c = col - 1; c >= 0; c--) {
      if (grid[row][c] !== null) return false;
    }
    return true;
  }
  if (direction === 'down') {
    const startRow = row + size;
    for (let r = startRow; r < gridSize; r++) {
      if (grid[r][col] !== null) return false;
    }
    return true;
  }
  if (direction === 'up') {
    for (let r = row - 1; r >= 0; r--) {
      if (grid[r][col] !== null) return false;
    }
    return true;
  }
  return false;
}

export function isLevelComplete(arrows: Arrow[]): boolean {
  return arrows.every(a => a.exited === true);
}
