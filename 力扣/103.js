function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var zigzagLevelOrder = function(root) {
  if (!root) {
      return [];
  }

  const ans = [];
  const nodeQueue = [root];

  let isOrderLeft = true;

  while (nodeQueue.length) {
      let levelList = [];
      const size = nodeQueue.length;
      for (let i = 0; i < size; ++i) {
          const node = nodeQueue.shift();
          if (isOrderLeft) {
              levelList.push(node.val);
          } else {
              levelList.unshift(node.val);
          }
          if (node.left !== null) {
              nodeQueue.push(node.left);
          }
          if (node.right !== null) {
              nodeQueue.push(node.right);
          }
      }            
      ans.push(levelList);
      isOrderLeft = !isOrderLeft;
  }

  return ans;
};
zigzagLevelOrder([3,9,20,null,null,15,7])