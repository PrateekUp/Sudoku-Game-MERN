import { Util } from "./Util.js";

const SudokuUtil = {
  isValidPuzzle: function (grid) {
    for (let i = 0; i < grid.length; i++) {
      //row validation
      if (!isValidRow(grid, i)) {
        return false;
      }
      //col validation
      if (!isValidCol(grid, i)) {
        return false;
      }
    }
    //inner box validation
    if (!isValidBox(grid)) {
      return false;
    }

    return true;
  },

  isValidPlace: function (grid, row, column, number) {
    for (let i = 0; i < 9; i++) {
      if (grid[i][column] === number) {
        return false;
      }
    }
    for (let i = 0; i < 9; i++) {
      if (grid[row][i] === number) {
        return false;
      }
    }
    let localBoxRow = row - (row % 3);
    let localBoxCol = column - (column % 3);
    for (let i = localBoxRow; i < localBoxRow + 3; i++) {
      for (let j = localBoxCol; j < localBoxCol + 3; j++) {
        if (grid[i][j] === number) {
          return false;
        }
      }
    }
    return true;
  },
};

function isValidRow(grid, row) {
  let set = new Set();
  for (let i = 0; i < 9; i++) {
    let num = grid[row][i];

    if (num < 0 || num > 9) {
      return false;
    }
    if (set.has(num)) {
      return false;
    } else {
      num !== 0 && set.add(num);
    }
  }
  return true;
}

function isValidCol(grid, col) {
  let set = new Set();
  for (let i = 0; i < 9; i++) {
    let num = grid[i][col];

    if (num < 0 || num > 9) {
      return false;
    }
    if (set.has(num)) {
      return false;
    } else {
      num !== 0 && set.add(num);
    }
  }
  return true;
}

function isValidBox(grid) {
  for (let row = 0; row < grid.length; row += 3) {
    for (let column = 0; column < grid.length; column += 3) {
      let set = new Set();
      for (let subRow = 0; subRow < 3; subRow++) {
        for (let subCol = 0; subCol < 3; subCol++) {
          let number = grid[subRow][subCol];
          if (number < 0 || number > 9) {
            return false;
          }
          if (set.has(number)) {
            return false;
          } else {
            number !== 0 && set.add(number);
          }
        }
      }
    }
  }
  return true;
}

export { SudokuUtil };
