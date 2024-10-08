export function generateRandomArray() {
    const arr = [0, 1, 2, 3, 4];
    
    // Fisher-Yates Shuffle Algorithm
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [arr[i], arr[j]] = [arr[j], arr[i]]; // swap elements
    }
    
    return arr;
  }
  
