const Util = {
  //printing grid function
  print2DArray: function (arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(...arr[i]);
    }
    console.log();
  },

  //copying grid function to do solution
  copyGrid: function (from, to) {
    for (let i = 0; i < from.length; i++) {
      to[i] = [...from[i]];
    }
  },
  //error handling sleep

  sleep: async function (ms) {
    if (ms === 0) return;
    if (!ms) throw new Error("Speed parameter not defined!");
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });
  },
};

export { Util };
