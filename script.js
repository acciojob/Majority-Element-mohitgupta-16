//your code here
function majorityElement(arr) {
  let count = 1;
  let majority = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === majority) {
      count++;
    } else {
      count--;
      if (count === 0) {
        majority = arr[i];
        count = 1;
      }
    }
  }

  // Count the occurrences of majority element
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === majority) {
      count++;
    }
  }

  // Check if majority element appears more than floor(n/2) times
  if (count > Math.floor(arr.length / 2)) {
    return majority;
  } else {
    return -1;
  }
}