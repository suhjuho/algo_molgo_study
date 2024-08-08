const INPUT_PATH = "../inputs/inputBoilerPlate.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const N = Number(inputArguments[0]);
  const stairs = [[0, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
  let count = 0;
  const mod = Number(1e9);

  while (++count < N) {
    const nextStairs = Array(10).fill(0);
    const prevStairs = stairs[stairs.length - 1];

    nextStairs.forEach((_, index) => {
      if (prevStairs[index - 1] !== undefined) {
        nextStairs[index] += prevStairs[index - 1];
      }

      if (prevStairs[index + 1] !== undefined) {
        nextStairs[index] += prevStairs[index + 1];
      }

      nextStairs[index] %= mod;
    });

    stairs.push(nextStairs);
  }

  return stairs[stairs.length - 1].reduce((acc, cur) => (acc + cur) % mod);
}

console.log(solution(input));
