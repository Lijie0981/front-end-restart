function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
function traversal(root) {
  if (!root || (!root.left && !root.right)) {
    return root;
  }
  while (root) {
    console.log(root);
    traversal(root.left);
    traversal(root.right);
  }
}
// 先序遍历代码实现 根 左 右
function traversal2(root) {
  if (!root || (!root.left && !root.right)) {
    return root;
  }
  let stack = [root];
  while (stack.length) {
    let now = stack.shift();
    console.log(now);
    if (root.left) {
      stack.push(now.left);
    }
    if (root.right) {
      stack.push(now.right);
    }
  }
}

function mid(root) {
  if (root) {
    let stack = [];
    // 中序遍历是先左再根最后右
    // 所以首先应该先把最左边节点遍历到底依次 push 进栈
    // 当左边没有节点时，就打印栈顶元素，然后寻找右节点
    // 对于最左边的叶节点来说，可以把它看成是两个 null 节点的父节点
    // 左边打印不出东西就把父节点拿出来打印，然后再看右节点
    while (stack.length > 0 || root) {
      if (root) {
        stack.push(root);
        root = root.left;
      } else {
        root = stack.pop();
        console.log(root);
        root = root.right;
      }
    }
  }
}

function pos(root) {
  if (root) {
    let stack1 = [];
    let stack2 = [];
    // 后序遍历是先左再右最后根
    // 所以对于一个栈来说，应该先 push 根节点
    // 然后 push 右节点，最后 push 左节点
    stack1.push(root);
    while (stack1.length > 0) {
      root = stack1.pop();
      stack2.push(root);
      if (root.left) {
        stack1.push(root.left);
      }
      if (root.right) {
        stack1.push(root.right);
      }
    }
    while (stack2.length > 0) {
      console.log(s2.pop());
    }
  }
}
