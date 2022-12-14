/**
 * Have the function SeatingStudents(noOfDesks, arrOccupiedDesks) read the input arguments where noOfDesks represents the number of desks in a classroom, and the argument occupiedDesks, will be a sorted array of the desks that are already occupied.
 *
 * All of the desks will be arranged in 2 columns, where desk #1 is at the top left, desk #2 is at the top right, desk #3 is below #1, desk #4 is below #2, etc.
 *
 * Your program should return the number of ways 2 students can be seated next to each other. This means 1 student is on the left and 1 student on the right, or 1 student is directly above or below the other student. Desks 1,3 are adjacent but 2,3 are not adjacent.
 *
 * Testcase 1:
 * Input: 12, [2, 6, 7, 11]
 * Output: 6
 *
 * Explanation:
 * Seating arrangement picture.
 * https://i.imgur.com/rvP5cjj.jpeg
 *
 * The possible adjacent arrangements from the above picture are
 * - 1,3
 * - 3,4
 * - 3,5
 * - 8,10
 * - 9,10
 * - 10,12
 * Hence the answer 6.
 */
exports.SeatingStudents = function (noOfDesks, occupiedDesks) {
  let prebook = {};
  occupiedDesks.forEach((sheet) => {
    prebook[sheet] = true;
  });
  let evenSheet = [];
  let oddSheet = [];
  for (let i = 1; i <= noOfDesks; i++) {
    i % 2 == 0 ? evenSheet.push(i) : oddSheet.push(i);
  }
  let count = 0;
  count += checkSheet(evenSheet, oddSheet, prebook);
  count += checkSheet(oddSheet, evenSheet, prebook);
  return count;
};

function checkSheet(evenSheet, oddSheet, prebook) {
  let count = 0;
  for (let i = 0; i < evenSheet.length - 1; i++) {
    if (!prebook[evenSheet[i]]) {
      if (!prebook[evenSheet[i + 1]]) {
        count++;
        console.log(evenSheet[i], evenSheet[i + 1]);
      } else if (!prebook[evenSheet[i]] && !prebook[oddSheet[i]]) {
        count++;
        console.log(evenSheet[i], oddSheet[i]);
      }
    }
  }
  return count;
}

console.log(this.SeatingStudents(12, [2, 6, 7, 11]));
//console.log(this.SeatingStudents(12, [2, 3, 6, 7, 10, 11]));

// 1, /3, 5, /7, 9,  /11
// /2, 4, /6, 8, /10, 12
