// If you can't sleep, just count sheep

/* Given a non-negative integer, 3 for example,
 return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
 Input will always be valid, i.e. no negative integers.*/

var countSheep = function (num) {
  let sheepCount = "";
  for (let i = 1; i <= num; i++) {
    sheepCount += `${i} sheep...`;
  }
  return sheepCount;
};
countSheep(3);

var countSheep2 = function (number) {
  let sheepCount2 = [];
  for (let i = 1; i <= number; i++) {
    sheepCount2.push(`${i} sheep...`);
  }
  return sheepCount2.join();
};

countSheep2(3);
