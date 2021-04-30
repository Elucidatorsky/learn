var zigzagLevelOrder = function(root, d, r = []) {
  return d = (root, l) => (root === null || (r[l] = (l & 1) === 0 ? (r[l] || []).concat([root.val]) : [root.val].concat(r[l] || []), d(root.left, l + 1), d(root.right, l + 1))), d(root, 0), r
};

console.log(zigzagLevelOrder([3,9,20,null,null,15,7]))