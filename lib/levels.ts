import { Level } from './types';

export const LEVELS: Level[] = [
  {
    id: 1,
    grid: 5,
    title: "Easy Parking",
    cars: [
      { id: 'c1', color: '#E74C3C', orientation: 'horizontal', row: 0, col: 0, size: 2 },
      { id: 'c2', color: '#3498DB', orientation: 'horizontal', row: 1, col: 1, size: 2 },
      { id: 'c3', color: '#2ECC71', orientation: 'vertical',   row: 2, col: 0, size: 2 },
      { id: 'c4', color: '#F39C12', orientation: 'horizontal', row: 3, col: 2, size: 2 },
      { id: 'c5', color: '#9B59B6', orientation: 'vertical',   row: 0, col: 3, size: 2 },
    ]
  },
  {
    id: 2,
    grid: 5,
    title: "Rush Hour",
    cars: [
      { id: 'c1', color: '#E74C3C', orientation: 'horizontal', row: 0, col: 0, size: 3 },
      { id: 'c2', color: '#3498DB', orientation: 'vertical',   row: 0, col: 3, size: 2 },
      { id: 'c3', color: '#2ECC71', orientation: 'horizontal', row: 2, col: 1, size: 2 },
      { id: 'c4', color: '#F39C12', orientation: 'vertical',   row: 2, col: 4, size: 3 },
      { id: 'c5', color: '#9B59B6', orientation: 'horizontal', row: 3, col: 0, size: 2 },
      { id: 'c6', color: '#1ABC9C', orientation: 'vertical',   row: 0, col: 2, size: 2 },
    ]
  },
  {
    id: 3,
    grid: 6,
    title: "Traffic Jam",
    cars: [
      { id: 'c1', color: '#E74C3C', orientation: 'horizontal', row: 0, col: 0, size: 2 },
      { id: 'c2', color: '#3498DB', orientation: 'vertical',   row: 0, col: 2, size: 3 },
      { id: 'c3', color: '#2ECC71', orientation: 'horizontal', row: 1, col: 3, size: 2 },
      { id: 'c4', color: '#F39C12', orientation: 'vertical',   row: 0, col: 5, size: 2 },
      { id: 'c5', color: '#9B59B6', orientation: 'horizontal', row: 3, col: 0, size: 3 },
      { id: 'c6', color: '#1ABC9C', orientation: 'vertical',   row: 3, col: 3, size: 2 },
      { id: 'c7', color: '#E67E22', orientation: 'horizontal', row: 4, col: 4, size: 2 },
      { id: 'c8', color: '#E91E63', orientation: 'vertical',   row: 1, col: 0, size: 2 },
    ]
  },
  {
    id: 4,
    grid: 6,
    title: "Gridlock",
    cars: [
      { id: 'c1', color: '#E74C3C', orientation: 'horizontal', row: 0, col: 0, size: 2 },
      { id: 'c2', color: '#3498DB', orientation: 'horizontal', row: 0, col: 3, size: 3 },
      { id: 'c3', color: '#2ECC71', orientation: 'vertical',   row: 1, col: 1, size: 3 },
      { id: 'c4', color: '#F39C12', orientation: 'horizontal', row: 2, col: 2, size: 2 },
      { id: 'c5', color: '#9B59B6', orientation: 'vertical',   row: 0, col: 5, size: 3 },
      { id: 'c6', color: '#1ABC9C', orientation: 'horizontal', row: 3, col: 3, size: 2 },
      { id: 'c7', color: '#E67E22', orientation: 'vertical',   row: 3, col: 0, size: 2 },
      { id: 'c8', color: '#E91E63', orientation: 'horizontal', row: 4, col: 1, size: 3 },
      { id: 'c9', color: '#FF5722', orientation: 'vertical',   row: 4, col: 4, size: 2 },
    ]
  },
  {
    id: 5,
    grid: 6,
    title: "Master Park",
    cars: [
      { id: 'c1',  color: '#E74C3C', orientation: 'horizontal', row: 0, col: 0, size: 3 },
      { id: 'c2',  color: '#3498DB', orientation: 'vertical',   row: 0, col: 3, size: 2 },
      { id: 'c3',  color: '#2ECC71', orientation: 'horizontal', row: 0, col: 4, size: 2 },
      { id: 'c4',  color: '#F39C12', orientation: 'vertical',   row: 1, col: 0, size: 2 },
      { id: 'c5',  color: '#9B59B6', orientation: 'horizontal', row: 2, col: 1, size: 2 },
      { id: 'c6',  color: '#1ABC9C', orientation: 'vertical',   row: 2, col: 3, size: 3 },
      { id: 'c7',  color: '#E67E22', orientation: 'horizontal', row: 3, col: 4, size: 2 },
      { id: 'c8',  color: '#E91E63', orientation: 'vertical',   row: 3, col: 1, size: 2 },
      { id: 'c9',  color: '#FF5722', orientation: 'horizontal', row: 4, col: 0, size: 3 },
      { id: 'c10', color: '#607D8B', orientation: 'vertical',   row: 4, col: 5, size: 2 },
    ]
  },
];
