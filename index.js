// code your solution here


function superbowlWin(recordArray) {
  // Use find to get the first object with result "W"
  const win = recordArray.find(record => record.result === "W");

  // If a win is found, return the year; otherwise return undefined
  return win ? win.year : undefined;
}
