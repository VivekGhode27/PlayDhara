import { Level } from './types';

export const LEVELS: Level[] = [
  {
    id: 1, grid: 4, title: "Shuru Karo",
    arrows: [
      { id:'a1', color:'#E74C3C', direction:'right', row:1, col:0, size:2 },
      { id:'a2', color:'#3498DB', direction:'left',  row:0, col:2, size:2 },
      { id:'a3', color:'#2ECC71', direction:'down',  row:2, col:0, size:2 },
      { id:'a4', color:'#F39C12', direction:'up',    row:2, col:3, size:2 },
    ]
  },
  {
    id: 2, grid: 5, title: "Thoda Aur",
    arrows: [
      { id:'a1', color:'#E74C3C', direction:'right', row:0, col:0, size:3 },
      { id:'a2', color:'#3498DB', direction:'down',  row:0, col:4, size:3 },
      { id:'a3', color:'#2ECC71', direction:'left',  row:2, col:1, size:2 },
      { id:'a4', color:'#F39C12', direction:'up',    row:3, col:0, size:2 },
      { id:'a5', color:'#9B59B6', direction:'right', row:4, col:2, size:2 },
    ]
  },
  {
    id: 3, grid: 5, title: "Getting Hard",
    arrows: [
      { id:'a1', color:'#E74C3C', direction:'right', row:0, col:0, size:2 },
      { id:'a2', color:'#3498DB', direction:'down',  row:0, col:3, size:2 },
      { id:'a3', color:'#2ECC71', direction:'right', row:1, col:0, size:2 },
      { id:'a4', color:'#F39C12', direction:'up',    row:1, col:4, size:2 },
      { id:'a5', color:'#9B59B6', direction:'left',  row:3, col:3, size:2 },
      { id:'a6', color:'#1ABC9C', direction:'down',  row:3, col:1, size:2 },
    ]
  },
  {
    id: 4, grid: 6, title: "Traffic Jam",
    arrows: [
      { id:'a1', color:'#E74C3C', direction:'right', row:0, col:0, size:3 },
      { id:'a2', color:'#3498DB', direction:'down',  row:0, col:4, size:2 },
      { id:'a3', color:'#2ECC71', direction:'up',    row:0, col:5, size:2 },
      { id:'a4', color:'#F39C12', direction:'left',  row:2, col:2, size:3 },
      { id:'a5', color:'#9B59B6', direction:'down',  row:3, col:0, size:2 },
      { id:'a6', color:'#1ABC9C', direction:'right', row:3, col:3, size:3 },
      { id:'a7', color:'#E67E22', direction:'up',    row:4, col:1, size:2 },
    ]
  },
  {
    id: 5, grid: 6, title: "Master",
    arrows: [
      { id:'a1', color:'#E74C3C', direction:'right', row:0, col:0, size:2 },
      { id:'a2', color:'#3498DB', direction:'down',  row:0, col:3, size:2 },
      { id:'a3', color:'#2ECC71', direction:'up',    row:0, col:5, size:2 },
      { id:'a4', color:'#F39C12', direction:'left',  row:2, col:4, size:2 },
      { id:'a5', color:'#9B59B6', direction:'down',  row:2, col:1, size:2 },
      { id:'a6', color:'#1ABC9C', direction:'right', row:4, col:1, size:3 },
      { id:'a7', color:'#E67E22', direction:'left',  row:5, col:3, size:3 },
      { id:'a8', color:'#E91E63', direction:'up',    row:3, col:0, size:2 },
    ]
  },
];
