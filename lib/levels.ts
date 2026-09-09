import { Level } from './types';

// 60 solver-verified level variants — 20 unique levels × up to 3 variants
export const ALL_LEVELS: (Level & { variant: string })[] = [
  {
    "id": 1,
    "variant": "A",
    "grid": 4,
    "title": "Baby Steps",
    "arrows": [
      {
        "id": "a1",
        "direction": "right",
        "row": 2,
        "col": 0,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "down",
        "row": 0,
        "col": 0,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "up",
        "row": 0,
        "col": 2,
        "size": 2,
        "color": "#2ECC71"
      }
    ]
  },
  {
    "id": 1,
    "variant": "B",
    "grid": 4,
    "title": "Baby Steps",
    "arrows": [
      {
        "id": "a1",
        "direction": "right",
        "row": 2,
        "col": 0,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "right",
        "row": 0,
        "col": 1,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "right",
        "row": 1,
        "col": 0,
        "size": 2,
        "color": "#2ECC71"
      }
    ]
  },
  {
    "id": 1,
    "variant": "C",
    "grid": 4,
    "title": "Baby Steps",
    "arrows": [
      {
        "id": "a1",
        "direction": "right",
        "row": 0,
        "col": 0,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "up",
        "row": 1,
        "col": 1,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "up",
        "row": 0,
        "col": 2,
        "size": 2,
        "color": "#2ECC71"
      }
    ]
  },
  {
    "id": 2,
    "variant": "A",
    "grid": 4,
    "title": "Thoda Aur",
    "arrows": [
      {
        "id": "a1",
        "direction": "down",
        "row": 0,
        "col": 2,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "down",
        "row": 0,
        "col": 1,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "left",
        "row": 2,
        "col": 1,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "up",
        "row": 0,
        "col": 0,
        "size": 2,
        "color": "#F39C12"
      }
    ]
  },
  {
    "id": 2,
    "variant": "B",
    "grid": 4,
    "title": "Thoda Aur",
    "arrows": [
      {
        "id": "a1",
        "direction": "down",
        "row": 0,
        "col": 2,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "left",
        "row": 1,
        "col": 0,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "left",
        "row": 2,
        "col": 1,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "right",
        "row": 0,
        "col": 0,
        "size": 2,
        "color": "#F39C12"
      }
    ]
  },
  {
    "id": 2,
    "variant": "C",
    "grid": 4,
    "title": "Thoda Aur",
    "arrows": [
      {
        "id": "a1",
        "direction": "down",
        "row": 1,
        "col": 2,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "left",
        "row": 2,
        "col": 0,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "right",
        "row": 1,
        "col": 0,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "left",
        "row": 0,
        "col": 0,
        "size": 2,
        "color": "#F39C12"
      }
    ]
  },
  {
    "id": 3,
    "variant": "A",
    "grid": 5,
    "title": "Pick Up Speed",
    "arrows": [
      {
        "id": "a1",
        "direction": "up",
        "row": 2,
        "col": 3,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "left",
        "row": 1,
        "col": 1,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "right",
        "row": 0,
        "col": 1,
        "size": 3,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "down",
        "row": 2,
        "col": 0,
        "size": 2,
        "color": "#F39C12"
      }
    ]
  },
  {
    "id": 3,
    "variant": "B",
    "grid": 5,
    "title": "Pick Up Speed",
    "arrows": [
      {
        "id": "a1",
        "direction": "up",
        "row": 2,
        "col": 0,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "left",
        "row": 2,
        "col": 2,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "left",
        "row": 3,
        "col": 1,
        "size": 3,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "up",
        "row": 0,
        "col": 0,
        "size": 2,
        "color": "#F39C12"
      }
    ]
  },
  {
    "id": 3,
    "variant": "C",
    "grid": 5,
    "title": "Pick Up Speed",
    "arrows": [
      {
        "id": "a1",
        "direction": "down",
        "row": 2,
        "col": 0,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "left",
        "row": 0,
        "col": 1,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "up",
        "row": 0,
        "col": 3,
        "size": 3,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "down",
        "row": 1,
        "col": 2,
        "size": 2,
        "color": "#F39C12"
      }
    ]
  },
  {
    "id": 4,
    "variant": "A",
    "grid": 5,
    "title": "Chain It",
    "arrows": [
      {
        "id": "a1",
        "direction": "left",
        "row": 0,
        "col": 2,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "right",
        "row": 3,
        "col": 1,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "up",
        "row": 0,
        "col": 1,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "down",
        "row": 0,
        "col": 0,
        "size": 3,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "left",
        "row": 1,
        "col": 2,
        "size": 2,
        "color": "#9B59B6"
      }
    ]
  },
  {
    "id": 4,
    "variant": "B",
    "grid": 5,
    "title": "Chain It",
    "arrows": [
      {
        "id": "a1",
        "direction": "left",
        "row": 1,
        "col": 0,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "left",
        "row": 0,
        "col": 2,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "down",
        "row": 2,
        "col": 3,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "left",
        "row": 2,
        "col": 0,
        "size": 3,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "left",
        "row": 1,
        "col": 2,
        "size": 2,
        "color": "#9B59B6"
      }
    ]
  },
  {
    "id": 4,
    "variant": "C",
    "grid": 5,
    "title": "Chain It",
    "arrows": [
      {
        "id": "a1",
        "direction": "up",
        "row": 1,
        "col": 2,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "up",
        "row": 0,
        "col": 0,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "left",
        "row": 3,
        "col": 0,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "left",
        "row": 0,
        "col": 1,
        "size": 3,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "right",
        "row": 2,
        "col": 0,
        "size": 2,
        "color": "#9B59B6"
      }
    ]
  },
  {
    "id": 5,
    "variant": "A",
    "grid": 5,
    "title": "First Test",
    "arrows": [
      {
        "id": "a1",
        "direction": "right",
        "row": 1,
        "col": 0,
        "size": 3,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "right",
        "row": 0,
        "col": 2,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "left",
        "row": 2,
        "col": 1,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "right",
        "row": 3,
        "col": 1,
        "size": 2,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "left",
        "row": 0,
        "col": 0,
        "size": 2,
        "color": "#9B59B6"
      }
    ]
  },
  {
    "id": 5,
    "variant": "B",
    "grid": 5,
    "title": "First Test",
    "arrows": [
      {
        "id": "a1",
        "direction": "right",
        "row": 2,
        "col": 0,
        "size": 3,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "left",
        "row": 1,
        "col": 1,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "left",
        "row": 0,
        "col": 1,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "down",
        "row": 0,
        "col": 0,
        "size": 2,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "down",
        "row": 2,
        "col": 3,
        "size": 2,
        "color": "#9B59B6"
      }
    ]
  },
  {
    "id": 5,
    "variant": "C",
    "grid": 5,
    "title": "First Test",
    "arrows": [
      {
        "id": "a1",
        "direction": "left",
        "row": 2,
        "col": 1,
        "size": 3,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "down",
        "row": 2,
        "col": 0,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "right",
        "row": 1,
        "col": 2,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "right",
        "row": 0,
        "col": 0,
        "size": 2,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "left",
        "row": 3,
        "col": 2,
        "size": 2,
        "color": "#9B59B6"
      }
    ]
  },
  {
    "id": 6,
    "variant": "A",
    "grid": 5,
    "title": "Crossroads",
    "arrows": [
      {
        "id": "a1",
        "direction": "down",
        "row": 2,
        "col": 2,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "right",
        "row": 0,
        "col": 1,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "left",
        "row": 1,
        "col": 0,
        "size": 3,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "down",
        "row": 2,
        "col": 0,
        "size": 2,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "down",
        "row": 2,
        "col": 1,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "up",
        "row": 1,
        "col": 3,
        "size": 2,
        "color": "#1ABC9C"
      }
    ]
  },
  {
    "id": 6,
    "variant": "B",
    "grid": 5,
    "title": "Crossroads",
    "arrows": [
      {
        "id": "a1",
        "direction": "right",
        "row": 0,
        "col": 0,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "up",
        "row": 0,
        "col": 2,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "left",
        "row": 2,
        "col": 0,
        "size": 3,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "left",
        "row": 3,
        "col": 1,
        "size": 2,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "up",
        "row": 0,
        "col": 3,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "up",
        "row": 2,
        "col": 3,
        "size": 2,
        "color": "#1ABC9C"
      }
    ]
  },
  {
    "id": 6,
    "variant": "C",
    "grid": 5,
    "title": "Crossroads",
    "arrows": [
      {
        "id": "a1",
        "direction": "right",
        "row": 0,
        "col": 1,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "down",
        "row": 1,
        "col": 1,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "up",
        "row": 1,
        "col": 3,
        "size": 3,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "left",
        "row": 3,
        "col": 1,
        "size": 2,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "up",
        "row": 0,
        "col": 0,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "down",
        "row": 2,
        "col": 0,
        "size": 2,
        "color": "#1ABC9C"
      }
    ]
  },
  {
    "id": 7,
    "variant": "A",
    "grid": 6,
    "title": "Six Lane",
    "arrows": [
      {
        "id": "a1",
        "direction": "up",
        "row": 0,
        "col": 4,
        "size": 3,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "right",
        "row": 4,
        "col": 3,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "left",
        "row": 3,
        "col": 3,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "down",
        "row": 2,
        "col": 2,
        "size": 3,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "right",
        "row": 1,
        "col": 0,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "up",
        "row": 3,
        "col": 0,
        "size": 2,
        "color": "#1ABC9C"
      }
    ]
  },
  {
    "id": 7,
    "variant": "B",
    "grid": 6,
    "title": "Six Lane",
    "arrows": [
      {
        "id": "a1",
        "direction": "down",
        "row": 1,
        "col": 4,
        "size": 3,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "up",
        "row": 1,
        "col": 1,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "up",
        "row": 0,
        "col": 2,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "down",
        "row": 0,
        "col": 0,
        "size": 3,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "left",
        "row": 3,
        "col": 2,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "right",
        "row": 2,
        "col": 2,
        "size": 2,
        "color": "#1ABC9C"
      }
    ]
  },
  {
    "id": 7,
    "variant": "C",
    "grid": 6,
    "title": "Six Lane",
    "arrows": [
      {
        "id": "a1",
        "direction": "down",
        "row": 1,
        "col": 4,
        "size": 3,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "down",
        "row": 0,
        "col": 1,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "up",
        "row": 3,
        "col": 2,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "up",
        "row": 2,
        "col": 0,
        "size": 3,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "left",
        "row": 2,
        "col": 1,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "up",
        "row": 0,
        "col": 2,
        "size": 2,
        "color": "#1ABC9C"
      }
    ]
  },
  {
    "id": 8,
    "variant": "A",
    "grid": 6,
    "title": "Unblock Me",
    "arrows": [
      {
        "id": "a1",
        "direction": "left",
        "row": 3,
        "col": 1,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "right",
        "row": 4,
        "col": 0,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "left",
        "row": 0,
        "col": 0,
        "size": 3,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "left",
        "row": 1,
        "col": 0,
        "size": 2,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "up",
        "row": 0,
        "col": 4,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "left",
        "row": 3,
        "col": 3,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "left",
        "row": 2,
        "col": 2,
        "size": 3,
        "color": "#E67E22"
      }
    ]
  },
  {
    "id": 8,
    "variant": "B",
    "grid": 6,
    "title": "Unblock Me",
    "arrows": [
      {
        "id": "a1",
        "direction": "up",
        "row": 3,
        "col": 1,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "up",
        "row": 0,
        "col": 3,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "up",
        "row": 0,
        "col": 4,
        "size": 3,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "right",
        "row": 2,
        "col": 1,
        "size": 2,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "down",
        "row": 3,
        "col": 0,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "right",
        "row": 0,
        "col": 0,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "left",
        "row": 3,
        "col": 2,
        "size": 3,
        "color": "#E67E22"
      }
    ]
  },
  {
    "id": 8,
    "variant": "C",
    "grid": 6,
    "title": "Unblock Me",
    "arrows": [
      {
        "id": "a1",
        "direction": "up",
        "row": 0,
        "col": 3,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "right",
        "row": 4,
        "col": 3,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "up",
        "row": 0,
        "col": 2,
        "size": 3,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "up",
        "row": 2,
        "col": 1,
        "size": 2,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "left",
        "row": 3,
        "col": 3,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "up",
        "row": 2,
        "col": 0,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "up",
        "row": 0,
        "col": 4,
        "size": 3,
        "color": "#E67E22"
      }
    ]
  },
  {
    "id": 9,
    "variant": "A",
    "grid": 6,
    "title": "Think Twice",
    "arrows": [
      {
        "id": "a1",
        "direction": "left",
        "row": 0,
        "col": 2,
        "size": 3,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "right",
        "row": 4,
        "col": 2,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "left",
        "row": 1,
        "col": 2,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "left",
        "row": 2,
        "col": 1,
        "size": 3,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "left",
        "row": 4,
        "col": 0,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "right",
        "row": 3,
        "col": 0,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "down",
        "row": 3,
        "col": 4,
        "size": 2,
        "color": "#E67E22"
      }
    ]
  },
  {
    "id": 9,
    "variant": "B",
    "grid": 6,
    "title": "Think Twice",
    "arrows": [
      {
        "id": "a1",
        "direction": "left",
        "row": 1,
        "col": 2,
        "size": 3,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "up",
        "row": 0,
        "col": 1,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "up",
        "row": 2,
        "col": 2,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "down",
        "row": 2,
        "col": 4,
        "size": 3,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "left",
        "row": 4,
        "col": 1,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "up",
        "row": 3,
        "col": 3,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "down",
        "row": 3,
        "col": 0,
        "size": 2,
        "color": "#E67E22"
      }
    ]
  },
  {
    "id": 9,
    "variant": "C",
    "grid": 6,
    "title": "Think Twice",
    "arrows": [
      {
        "id": "a1",
        "direction": "left",
        "row": 2,
        "col": 1,
        "size": 3,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "right",
        "row": 0,
        "col": 1,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "left",
        "row": 3,
        "col": 2,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "right",
        "row": 4,
        "col": 2,
        "size": 3,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "down",
        "row": 1,
        "col": 4,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "down",
        "row": 3,
        "col": 0,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "up",
        "row": 0,
        "col": 0,
        "size": 2,
        "color": "#E67E22"
      }
    ]
  },
  {
    "id": 10,
    "variant": "A",
    "grid": 6,
    "title": "Gridlock",
    "arrows": [
      {
        "id": "a1",
        "direction": "right",
        "row": 2,
        "col": 3,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "left",
        "row": 0,
        "col": 0,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "right",
        "row": 4,
        "col": 0,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "right",
        "row": 4,
        "col": 2,
        "size": 3,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "down",
        "row": 1,
        "col": 0,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "left",
        "row": 3,
        "col": 2,
        "size": 3,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "left",
        "row": 2,
        "col": 1,
        "size": 2,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "down",
        "row": 0,
        "col": 3,
        "size": 2,
        "color": "#E91E63"
      }
    ]
  },
  {
    "id": 10,
    "variant": "B",
    "grid": 6,
    "title": "Gridlock",
    "arrows": [
      {
        "id": "a1",
        "direction": "right",
        "row": 3,
        "col": 0,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "up",
        "row": 0,
        "col": 3,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "down",
        "row": 3,
        "col": 4,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "down",
        "row": 1,
        "col": 2,
        "size": 3,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "down",
        "row": 1,
        "col": 4,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "down",
        "row": 0,
        "col": 1,
        "size": 3,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "down",
        "row": 3,
        "col": 3,
        "size": 2,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "up",
        "row": 0,
        "col": 0,
        "size": 2,
        "color": "#E91E63"
      }
    ]
  },
  {
    "id": 10,
    "variant": "C",
    "grid": 6,
    "title": "Gridlock",
    "arrows": [
      {
        "id": "a1",
        "direction": "right",
        "row": 3,
        "col": 0,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "right",
        "row": 1,
        "col": 0,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "down",
        "row": 0,
        "col": 2,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "right",
        "row": 3,
        "col": 2,
        "size": 3,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "left",
        "row": 2,
        "col": 1,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "down",
        "row": 0,
        "col": 3,
        "size": 3,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "left",
        "row": 4,
        "col": 3,
        "size": 2,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "left",
        "row": 4,
        "col": 0,
        "size": 2,
        "color": "#E91E63"
      }
    ]
  },
  {
    "id": 11,
    "variant": "A",
    "grid": 6,
    "title": "Rush Hour",
    "arrows": [
      {
        "id": "a1",
        "direction": "down",
        "row": 2,
        "col": 3,
        "size": 3,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "up",
        "row": 3,
        "col": 2,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "left",
        "row": 0,
        "col": 0,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "up",
        "row": 2,
        "col": 0,
        "size": 2,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "right",
        "row": 1,
        "col": 0,
        "size": 3,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "right",
        "row": 0,
        "col": 3,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "up",
        "row": 2,
        "col": 1,
        "size": 2,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "down",
        "row": 1,
        "col": 4,
        "size": 3,
        "color": "#E91E63"
      }
    ]
  },
  {
    "id": 11,
    "variant": "B",
    "grid": 6,
    "title": "Rush Hour",
    "arrows": [
      {
        "id": "a1",
        "direction": "down",
        "row": 0,
        "col": 4,
        "size": 3,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "up",
        "row": 1,
        "col": 2,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "up",
        "row": 0,
        "col": 1,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "down",
        "row": 3,
        "col": 2,
        "size": 2,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "up",
        "row": 0,
        "col": 0,
        "size": 3,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "left",
        "row": 3,
        "col": 3,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "right",
        "row": 0,
        "col": 2,
        "size": 2,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "down",
        "row": 2,
        "col": 1,
        "size": 3,
        "color": "#E91E63"
      }
    ]
  },
  {
    "id": 11,
    "variant": "C",
    "grid": 6,
    "title": "Rush Hour",
    "arrows": [
      {
        "id": "a1",
        "direction": "down",
        "row": 0,
        "col": 2,
        "size": 3,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "right",
        "row": 2,
        "col": 0,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "left",
        "row": 3,
        "col": 0,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "up",
        "row": 0,
        "col": 3,
        "size": 2,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "up",
        "row": 0,
        "col": 4,
        "size": 3,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "left",
        "row": 3,
        "col": 3,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "down",
        "row": 0,
        "col": 1,
        "size": 2,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "right",
        "row": 4,
        "col": 2,
        "size": 3,
        "color": "#E91E63"
      }
    ]
  },
  {
    "id": 12,
    "variant": "A",
    "grid": 6,
    "title": "Maze Runner",
    "arrows": [
      {
        "id": "a1",
        "direction": "up",
        "row": 3,
        "col": 0,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "left",
        "row": 3,
        "col": 1,
        "size": 3,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "up",
        "row": 1,
        "col": 4,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "left",
        "row": 4,
        "col": 1,
        "size": 2,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "up",
        "row": 0,
        "col": 3,
        "size": 3,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "up",
        "row": 0,
        "col": 0,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "right",
        "row": 4,
        "col": 3,
        "size": 2,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "down",
        "row": 0,
        "col": 2,
        "size": 2,
        "color": "#E91E63"
      },
      {
        "id": "a9",
        "direction": "left",
        "row": 2,
        "col": 0,
        "size": 3,
        "color": "#FF5722"
      }
    ]
  },
  {
    "id": 12,
    "variant": "B",
    "grid": 6,
    "title": "Maze Runner",
    "arrows": [
      {
        "id": "a1",
        "direction": "up",
        "row": 2,
        "col": 0,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "down",
        "row": 2,
        "col": 3,
        "size": 3,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "right",
        "row": 1,
        "col": 0,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "down",
        "row": 3,
        "col": 4,
        "size": 2,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "down",
        "row": 1,
        "col": 2,
        "size": 3,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "left",
        "row": 0,
        "col": 0,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "up",
        "row": 0,
        "col": 4,
        "size": 2,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "down",
        "row": 0,
        "col": 3,
        "size": 2,
        "color": "#E91E63"
      },
      {
        "id": "a9",
        "direction": "up",
        "row": 2,
        "col": 1,
        "size": 3,
        "color": "#FF5722"
      }
    ]
  },
  {
    "id": 12,
    "variant": "C",
    "grid": 6,
    "title": "Maze Runner",
    "arrows": [
      {
        "id": "a1",
        "direction": "up",
        "row": 2,
        "col": 4,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "right",
        "row": 1,
        "col": 0,
        "size": 3,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "right",
        "row": 3,
        "col": 1,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "right",
        "row": 0,
        "col": 2,
        "size": 2,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "right",
        "row": 4,
        "col": 1,
        "size": 3,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "left",
        "row": 0,
        "col": 0,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "up",
        "row": 0,
        "col": 4,
        "size": 2,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "right",
        "row": 2,
        "col": 0,
        "size": 2,
        "color": "#E91E63"
      },
      {
        "id": "a9",
        "direction": "up",
        "row": 1,
        "col": 3,
        "size": 3,
        "color": "#FF5722"
      }
    ]
  },
  {
    "id": 13,
    "variant": "A",
    "grid": 6,
    "title": "Master Flow",
    "arrows": [
      {
        "id": "a1",
        "direction": "left",
        "row": 4,
        "col": 0,
        "size": 3,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "left",
        "row": 1,
        "col": 0,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "right",
        "row": 2,
        "col": 3,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "right",
        "row": 2,
        "col": 0,
        "size": 3,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "right",
        "row": 3,
        "col": 3,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "left",
        "row": 0,
        "col": 3,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "left",
        "row": 0,
        "col": 0,
        "size": 3,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "left",
        "row": 1,
        "col": 3,
        "size": 2,
        "color": "#E91E63"
      },
      {
        "id": "a9",
        "direction": "right",
        "row": 4,
        "col": 3,
        "size": 2,
        "color": "#FF5722"
      }
    ]
  },
  {
    "id": 13,
    "variant": "B",
    "grid": 6,
    "title": "Master Flow",
    "arrows": [
      {
        "id": "a1",
        "direction": "left",
        "row": 4,
        "col": 0,
        "size": 3,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "up",
        "row": 2,
        "col": 3,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "up",
        "row": 1,
        "col": 0,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "right",
        "row": 1,
        "col": 2,
        "size": 3,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "down",
        "row": 0,
        "col": 1,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "right",
        "row": 3,
        "col": 0,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "down",
        "row": 2,
        "col": 4,
        "size": 3,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "right",
        "row": 2,
        "col": 1,
        "size": 2,
        "color": "#E91E63"
      },
      {
        "id": "a9",
        "direction": "right",
        "row": 0,
        "col": 3,
        "size": 2,
        "color": "#FF5722"
      }
    ]
  },
  {
    "id": 13,
    "variant": "C",
    "grid": 6,
    "title": "Master Flow",
    "arrows": [
      {
        "id": "a1",
        "direction": "up",
        "row": 0,
        "col": 1,
        "size": 3,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "right",
        "row": 0,
        "col": 3,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "down",
        "row": 1,
        "col": 0,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "down",
        "row": 1,
        "col": 2,
        "size": 3,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "left",
        "row": 3,
        "col": 0,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "down",
        "row": 3,
        "col": 4,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "up",
        "row": 1,
        "col": 3,
        "size": 3,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "left",
        "row": 4,
        "col": 2,
        "size": 2,
        "color": "#E91E63"
      },
      {
        "id": "a9",
        "direction": "down",
        "row": 1,
        "col": 4,
        "size": 2,
        "color": "#FF5722"
      }
    ]
  },
  {
    "id": 14,
    "variant": "A",
    "grid": 6,
    "title": "No Mercy",
    "arrows": [
      {
        "id": "a1",
        "direction": "right",
        "row": 1,
        "col": 2,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "left",
        "row": 0,
        "col": 1,
        "size": 3,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "left",
        "row": 4,
        "col": 1,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "up",
        "row": 2,
        "col": 3,
        "size": 2,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "up",
        "row": 0,
        "col": 0,
        "size": 3,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "right",
        "row": 3,
        "col": 1,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "right",
        "row": 2,
        "col": 1,
        "size": 2,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "up",
        "row": 1,
        "col": 4,
        "size": 3,
        "color": "#E91E63"
      },
      {
        "id": "a9",
        "direction": "up",
        "row": 3,
        "col": 0,
        "size": 2,
        "color": "#FF5722"
      }
    ]
  },
  {
    "id": 14,
    "variant": "B",
    "grid": 6,
    "title": "No Mercy",
    "arrows": [
      {
        "id": "a1",
        "direction": "right",
        "row": 1,
        "col": 3,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "up",
        "row": 2,
        "col": 1,
        "size": 3,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "right",
        "row": 0,
        "col": 2,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "up",
        "row": 2,
        "col": 2,
        "size": 2,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "right",
        "row": 4,
        "col": 2,
        "size": 3,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "right",
        "row": 1,
        "col": 1,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "left",
        "row": 3,
        "col": 3,
        "size": 2,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "up",
        "row": 0,
        "col": 0,
        "size": 3,
        "color": "#E91E63"
      },
      {
        "id": "a9",
        "direction": "up",
        "row": 3,
        "col": 0,
        "size": 2,
        "color": "#FF5722"
      }
    ]
  },
  {
    "id": 14,
    "variant": "C",
    "grid": 6,
    "title": "No Mercy",
    "arrows": [
      {
        "id": "a1",
        "direction": "left",
        "row": 2,
        "col": 2,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "right",
        "row": 0,
        "col": 2,
        "size": 3,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "left",
        "row": 1,
        "col": 1,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "up",
        "row": 0,
        "col": 0,
        "size": 2,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "up",
        "row": 1,
        "col": 4,
        "size": 3,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "left",
        "row": 3,
        "col": 2,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "left",
        "row": 2,
        "col": 0,
        "size": 2,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "left",
        "row": 4,
        "col": 2,
        "size": 3,
        "color": "#E91E63"
      },
      {
        "id": "a9",
        "direction": "down",
        "row": 3,
        "col": 1,
        "size": 2,
        "color": "#FF5722"
      }
    ]
  },
  {
    "id": 15,
    "variant": "A",
    "grid": 6,
    "title": "Legend",
    "arrows": [
      {
        "id": "a1",
        "direction": "down",
        "row": 2,
        "col": 0,
        "size": 3,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "up",
        "row": 0,
        "col": 0,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "up",
        "row": 3,
        "col": 1,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "up",
        "row": 2,
        "col": 4,
        "size": 3,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "up",
        "row": 3,
        "col": 2,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "up",
        "row": 3,
        "col": 3,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "right",
        "row": 0,
        "col": 2,
        "size": 3,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "right",
        "row": 2,
        "col": 2,
        "size": 2,
        "color": "#E91E63"
      },
      {
        "id": "a9",
        "direction": "right",
        "row": 1,
        "col": 3,
        "size": 2,
        "color": "#FF5722"
      },
      {
        "id": "a10",
        "direction": "up",
        "row": 1,
        "col": 1,
        "size": 2,
        "color": "#607D8B"
      }
    ]
  },
  {
    "id": 15,
    "variant": "B",
    "grid": 6,
    "title": "Legend",
    "arrows": [
      {
        "id": "a1",
        "direction": "down",
        "row": 2,
        "col": 1,
        "size": 3,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "down",
        "row": 2,
        "col": 4,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "left",
        "row": 0,
        "col": 2,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "right",
        "row": 1,
        "col": 1,
        "size": 3,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "down",
        "row": 3,
        "col": 3,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "down",
        "row": 3,
        "col": 2,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "up",
        "row": 1,
        "col": 0,
        "size": 3,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "right",
        "row": 2,
        "col": 2,
        "size": 2,
        "color": "#E91E63"
      },
      {
        "id": "a9",
        "direction": "down",
        "row": 0,
        "col": 4,
        "size": 2,
        "color": "#FF5722"
      },
      {
        "id": "a10",
        "direction": "left",
        "row": 0,
        "col": 0,
        "size": 2,
        "color": "#607D8B"
      }
    ]
  },
  {
    "id": 15,
    "variant": "C",
    "grid": 6,
    "title": "Legend",
    "arrows": [
      {
        "id": "a1",
        "direction": "right",
        "row": 0,
        "col": 0,
        "size": 3,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "up",
        "row": 1,
        "col": 1,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "right",
        "row": 4,
        "col": 2,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "left",
        "row": 3,
        "col": 0,
        "size": 3,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "down",
        "row": 2,
        "col": 3,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "up",
        "row": 0,
        "col": 3,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "up",
        "row": 0,
        "col": 4,
        "size": 3,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "down",
        "row": 1,
        "col": 2,
        "size": 2,
        "color": "#E91E63"
      },
      {
        "id": "a9",
        "direction": "up",
        "row": 1,
        "col": 0,
        "size": 2,
        "color": "#FF5722"
      },
      {
        "id": "a10",
        "direction": "up",
        "row": 3,
        "col": 4,
        "size": 2,
        "color": "#607D8B"
      }
    ]
  },
  {
    "id": 16,
    "variant": "A",
    "grid": 6,
    "title": "Pro Move",
    "arrows": [
      {
        "id": "a1",
        "direction": "up",
        "row": 0,
        "col": 1,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "left",
        "row": 2,
        "col": 0,
        "size": 3,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "down",
        "row": 3,
        "col": 4,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "left",
        "row": 4,
        "col": 1,
        "size": 3,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "down",
        "row": 2,
        "col": 3,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "right",
        "row": 3,
        "col": 1,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "left",
        "row": 0,
        "col": 2,
        "size": 3,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "down",
        "row": 3,
        "col": 0,
        "size": 2,
        "color": "#E91E63"
      },
      {
        "id": "a9",
        "direction": "up",
        "row": 0,
        "col": 0,
        "size": 2,
        "color": "#FF5722"
      },
      {
        "id": "a10",
        "direction": "right",
        "row": 1,
        "col": 3,
        "size": 2,
        "color": "#607D8B"
      }
    ]
  },
  {
    "id": 16,
    "variant": "B",
    "grid": 6,
    "title": "Pro Move",
    "arrows": [
      {
        "id": "a1",
        "direction": "down",
        "row": 2,
        "col": 0,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "down",
        "row": 2,
        "col": 4,
        "size": 3,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "left",
        "row": 1,
        "col": 3,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "up",
        "row": 2,
        "col": 2,
        "size": 3,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "left",
        "row": 0,
        "col": 1,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "left",
        "row": 1,
        "col": 1,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "down",
        "row": 2,
        "col": 3,
        "size": 3,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "left",
        "row": 0,
        "col": 3,
        "size": 2,
        "color": "#E91E63"
      },
      {
        "id": "a9",
        "direction": "down",
        "row": 2,
        "col": 1,
        "size": 2,
        "color": "#FF5722"
      },
      {
        "id": "a10",
        "direction": "down",
        "row": 0,
        "col": 0,
        "size": 2,
        "color": "#607D8B"
      }
    ]
  },
  {
    "id": 16,
    "variant": "C",
    "grid": 6,
    "title": "Pro Move",
    "arrows": [
      {
        "id": "a1",
        "direction": "down",
        "row": 0,
        "col": 2,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "right",
        "row": 4,
        "col": 2,
        "size": 3,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "left",
        "row": 4,
        "col": 0,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "right",
        "row": 2,
        "col": 0,
        "size": 3,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "right",
        "row": 2,
        "col": 3,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "left",
        "row": 3,
        "col": 0,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "right",
        "row": 3,
        "col": 2,
        "size": 3,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "left",
        "row": 1,
        "col": 3,
        "size": 2,
        "color": "#E91E63"
      },
      {
        "id": "a9",
        "direction": "left",
        "row": 1,
        "col": 0,
        "size": 2,
        "color": "#FF5722"
      },
      {
        "id": "a10",
        "direction": "right",
        "row": 0,
        "col": 3,
        "size": 2,
        "color": "#607D8B"
      }
    ]
  },
  {
    "id": 17,
    "variant": "A",
    "grid": 6,
    "title": "Speed Demon",
    "arrows": [
      {
        "id": "a1",
        "direction": "left",
        "row": 4,
        "col": 2,
        "size": 3,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "up",
        "row": 2,
        "col": 1,
        "size": 3,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "right",
        "row": 1,
        "col": 2,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "right",
        "row": 0,
        "col": 2,
        "size": 2,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "up",
        "row": 0,
        "col": 0,
        "size": 3,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "up",
        "row": 3,
        "col": 0,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "right",
        "row": 3,
        "col": 3,
        "size": 2,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "left",
        "row": 2,
        "col": 2,
        "size": 3,
        "color": "#E91E63"
      },
      {
        "id": "a9",
        "direction": "up",
        "row": 0,
        "col": 1,
        "size": 2,
        "color": "#FF5722"
      },
      {
        "id": "a10",
        "direction": "down",
        "row": 0,
        "col": 4,
        "size": 2,
        "color": "#607D8B"
      }
    ]
  },
  {
    "id": 17,
    "variant": "B",
    "grid": 6,
    "title": "Speed Demon",
    "arrows": [
      {
        "id": "a1",
        "direction": "up",
        "row": 0,
        "col": 4,
        "size": 3,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "left",
        "row": 2,
        "col": 1,
        "size": 3,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "up",
        "row": 3,
        "col": 3,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "left",
        "row": 1,
        "col": 2,
        "size": 2,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "right",
        "row": 0,
        "col": 1,
        "size": 3,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "right",
        "row": 4,
        "col": 1,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "down",
        "row": 3,
        "col": 4,
        "size": 2,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "up",
        "row": 2,
        "col": 0,
        "size": 3,
        "color": "#E91E63"
      },
      {
        "id": "a9",
        "direction": "up",
        "row": 0,
        "col": 0,
        "size": 2,
        "color": "#FF5722"
      },
      {
        "id": "a10",
        "direction": "left",
        "row": 3,
        "col": 1,
        "size": 2,
        "color": "#607D8B"
      }
    ]
  },
  {
    "id": 17,
    "variant": "C",
    "grid": 6,
    "title": "Speed Demon",
    "arrows": [
      {
        "id": "a1",
        "direction": "up",
        "row": 2,
        "col": 1,
        "size": 3,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "left",
        "row": 1,
        "col": 1,
        "size": 3,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "left",
        "row": 0,
        "col": 2,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "down",
        "row": 3,
        "col": 0,
        "size": 2,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "left",
        "row": 2,
        "col": 2,
        "size": 3,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "down",
        "row": 3,
        "col": 2,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "up",
        "row": 0,
        "col": 4,
        "size": 2,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "down",
        "row": 0,
        "col": 0,
        "size": 3,
        "color": "#E91E63"
      },
      {
        "id": "a9",
        "direction": "right",
        "row": 4,
        "col": 3,
        "size": 2,
        "color": "#FF5722"
      },
      {
        "id": "a10",
        "direction": "right",
        "row": 3,
        "col": 3,
        "size": 2,
        "color": "#607D8B"
      }
    ]
  },
  {
    "id": 18,
    "variant": "A",
    "grid": 6,
    "title": "Turbo Mode",
    "arrows": [
      {
        "id": "a1",
        "direction": "right",
        "row": 4,
        "col": 3,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "up",
        "row": 1,
        "col": 4,
        "size": 3,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "down",
        "row": 3,
        "col": 2,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "right",
        "row": 2,
        "col": 0,
        "size": 2,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "left",
        "row": 0,
        "col": 0,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "up",
        "row": 3,
        "col": 1,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "right",
        "row": 1,
        "col": 1,
        "size": 3,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "down",
        "row": 2,
        "col": 3,
        "size": 2,
        "color": "#E91E63"
      },
      {
        "id": "a9",
        "direction": "right",
        "row": 0,
        "col": 2,
        "size": 2,
        "color": "#FF5722"
      },
      {
        "id": "a10",
        "direction": "down",
        "row": 3,
        "col": 0,
        "size": 2,
        "color": "#607D8B"
      }
    ]
  },
  {
    "id": 18,
    "variant": "B",
    "grid": 6,
    "title": "Turbo Mode",
    "arrows": [
      {
        "id": "a1",
        "direction": "left",
        "row": 4,
        "col": 1,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "down",
        "row": 1,
        "col": 4,
        "size": 3,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "left",
        "row": 1,
        "col": 1,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "right",
        "row": 0,
        "col": 1,
        "size": 2,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "up",
        "row": 1,
        "col": 0,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "right",
        "row": 3,
        "col": 2,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "down",
        "row": 0,
        "col": 3,
        "size": 3,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "up",
        "row": 3,
        "col": 0,
        "size": 2,
        "color": "#E91E63"
      },
      {
        "id": "a9",
        "direction": "left",
        "row": 2,
        "col": 1,
        "size": 2,
        "color": "#FF5722"
      },
      {
        "id": "a10",
        "direction": "right",
        "row": 4,
        "col": 3,
        "size": 2,
        "color": "#607D8B"
      }
    ]
  },
  {
    "id": 18,
    "variant": "C",
    "grid": 6,
    "title": "Turbo Mode",
    "arrows": [
      {
        "id": "a1",
        "direction": "left",
        "row": 0,
        "col": 0,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "left",
        "row": 2,
        "col": 0,
        "size": 3,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "right",
        "row": 3,
        "col": 0,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "up",
        "row": 1,
        "col": 4,
        "size": 2,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "down",
        "row": 2,
        "col": 3,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "right",
        "row": 4,
        "col": 0,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "right",
        "row": 1,
        "col": 1,
        "size": 3,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "up",
        "row": 3,
        "col": 2,
        "size": 2,
        "color": "#E91E63"
      },
      {
        "id": "a9",
        "direction": "right",
        "row": 4,
        "col": 3,
        "size": 2,
        "color": "#FF5722"
      },
      {
        "id": "a10",
        "direction": "left",
        "row": 0,
        "col": 3,
        "size": 2,
        "color": "#607D8B"
      }
    ]
  },
  {
    "id": 19,
    "variant": "A",
    "grid": 6,
    "title": "Drift King",
    "arrows": [
      {
        "id": "a1",
        "direction": "right",
        "row": 1,
        "col": 1,
        "size": 3,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "up",
        "row": 3,
        "col": 3,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "up",
        "row": 1,
        "col": 4,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "down",
        "row": 2,
        "col": 2,
        "size": 2,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "left",
        "row": 4,
        "col": 1,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "left",
        "row": 0,
        "col": 0,
        "size": 3,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "right",
        "row": 2,
        "col": 0,
        "size": 2,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "left",
        "row": 0,
        "col": 3,
        "size": 2,
        "color": "#E91E63"
      },
      {
        "id": "a9",
        "direction": "down",
        "row": 3,
        "col": 4,
        "size": 2,
        "color": "#FF5722"
      },
      {
        "id": "a10",
        "direction": "left",
        "row": 3,
        "col": 0,
        "size": 2,
        "color": "#607D8B"
      }
    ]
  },
  {
    "id": 19,
    "variant": "B",
    "grid": 6,
    "title": "Drift King",
    "arrows": [
      {
        "id": "a1",
        "direction": "right",
        "row": 3,
        "col": 0,
        "size": 3,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "up",
        "row": 1,
        "col": 1,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "right",
        "row": 4,
        "col": 2,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "left",
        "row": 1,
        "col": 2,
        "size": 2,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "up",
        "row": 2,
        "col": 4,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "down",
        "row": 0,
        "col": 0,
        "size": 3,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "right",
        "row": 0,
        "col": 3,
        "size": 2,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "down",
        "row": 2,
        "col": 3,
        "size": 2,
        "color": "#E91E63"
      },
      {
        "id": "a9",
        "direction": "left",
        "row": 0,
        "col": 1,
        "size": 2,
        "color": "#FF5722"
      },
      {
        "id": "a10",
        "direction": "left",
        "row": 4,
        "col": 0,
        "size": 2,
        "color": "#607D8B"
      }
    ]
  },
  {
    "id": 19,
    "variant": "C",
    "grid": 6,
    "title": "Drift King",
    "arrows": [
      {
        "id": "a1",
        "direction": "right",
        "row": 2,
        "col": 2,
        "size": 3,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "left",
        "row": 3,
        "col": 3,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "up",
        "row": 3,
        "col": 2,
        "size": 2,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "left",
        "row": 1,
        "col": 0,
        "size": 2,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "left",
        "row": 1,
        "col": 3,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "left",
        "row": 0,
        "col": 1,
        "size": 3,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "up",
        "row": 2,
        "col": 0,
        "size": 2,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "down",
        "row": 2,
        "col": 1,
        "size": 2,
        "color": "#E91E63"
      },
      {
        "id": "a9",
        "direction": "right",
        "row": 4,
        "col": 3,
        "size": 2,
        "color": "#FF5722"
      },
      {
        "id": "a10",
        "direction": "right",
        "row": 4,
        "col": 0,
        "size": 2,
        "color": "#607D8B"
      }
    ]
  },
  {
    "id": 20,
    "variant": "A",
    "grid": 6,
    "title": "Highway Star",
    "arrows": [
      {
        "id": "a1",
        "direction": "down",
        "row": 2,
        "col": 1,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "up",
        "row": 0,
        "col": 1,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "left",
        "row": 1,
        "col": 2,
        "size": 3,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "up",
        "row": 3,
        "col": 4,
        "size": 2,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "up",
        "row": 2,
        "col": 3,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "right",
        "row": 4,
        "col": 1,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "up",
        "row": 2,
        "col": 2,
        "size": 2,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "left",
        "row": 0,
        "col": 2,
        "size": 3,
        "color": "#E91E63"
      },
      {
        "id": "a9",
        "direction": "up",
        "row": 0,
        "col": 0,
        "size": 2,
        "color": "#FF5722"
      },
      {
        "id": "a10",
        "direction": "up",
        "row": 3,
        "col": 0,
        "size": 2,
        "color": "#607D8B"
      }
    ]
  },
  {
    "id": 20,
    "variant": "B",
    "grid": 6,
    "title": "Highway Star",
    "arrows": [
      {
        "id": "a1",
        "direction": "down",
        "row": 0,
        "col": 0,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "right",
        "row": 0,
        "col": 3,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "right",
        "row": 3,
        "col": 0,
        "size": 3,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "right",
        "row": 4,
        "col": 1,
        "size": 2,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "up",
        "row": 1,
        "col": 4,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "left",
        "row": 2,
        "col": 1,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "right",
        "row": 1,
        "col": 2,
        "size": 2,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "down",
        "row": 2,
        "col": 3,
        "size": 3,
        "color": "#E91E63"
      },
      {
        "id": "a9",
        "direction": "up",
        "row": 0,
        "col": 1,
        "size": 2,
        "color": "#FF5722"
      },
      {
        "id": "a10",
        "direction": "up",
        "row": 3,
        "col": 4,
        "size": 2,
        "color": "#607D8B"
      }
    ]
  },
  {
    "id": 20,
    "variant": "C",
    "grid": 6,
    "title": "Highway Star",
    "arrows": [
      {
        "id": "a1",
        "direction": "down",
        "row": 3,
        "col": 1,
        "size": 2,
        "color": "#E74C3C"
      },
      {
        "id": "a2",
        "direction": "up",
        "row": 0,
        "col": 4,
        "size": 2,
        "color": "#3498DB"
      },
      {
        "id": "a3",
        "direction": "left",
        "row": 3,
        "col": 2,
        "size": 3,
        "color": "#2ECC71"
      },
      {
        "id": "a4",
        "direction": "right",
        "row": 4,
        "col": 2,
        "size": 2,
        "color": "#F39C12"
      },
      {
        "id": "a5",
        "direction": "down",
        "row": 0,
        "col": 0,
        "size": 2,
        "color": "#9B59B6"
      },
      {
        "id": "a6",
        "direction": "left",
        "row": 2,
        "col": 1,
        "size": 2,
        "color": "#1ABC9C"
      },
      {
        "id": "a7",
        "direction": "up",
        "row": 0,
        "col": 2,
        "size": 2,
        "color": "#E67E22"
      },
      {
        "id": "a8",
        "direction": "up",
        "row": 0,
        "col": 3,
        "size": 3,
        "color": "#E91E63"
      },
      {
        "id": "a9",
        "direction": "down",
        "row": 3,
        "col": 0,
        "size": 2,
        "color": "#FF5722"
      },
      {
        "id": "a10",
        "direction": "down",
        "row": 0,
        "col": 1,
        "size": 2,
        "color": "#607D8B"
      }
    ]
  }
];

export function getLevel(levelId: number): Level & { variant: string } {
  const variants = ALL_LEVELS.filter(l => l.id === levelId);
  if (!variants.length) return ALL_LEVELS[ALL_LEVELS.length - 1];
  return variants[Math.floor(Math.random() * variants.length)];
}

export const TOTAL_LEVELS = 20;
