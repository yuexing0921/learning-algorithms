var fourSumCount = function (nums1, nums2, nums3, nums4) {
  const twoSumMap = new Map();
  let count = 0;
  for (const n1 of nums1) {
    for (const n2 of nums2) {
      const sum = n1 + n2;
      twoSumMap.set(sum, (twoSumMap.get(sum) || 0) + 1);
    }
  }

  for (const n3 of nums3) {
    for (const n4 of nums4) {
      const sum = n3 + n4;
      const result = twoSumMap.get(0 - sum) || 0;
      count += result;
    }
  }

  return count;
};
console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]));
