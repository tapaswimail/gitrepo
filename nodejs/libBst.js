/*
Given a Binary Tree, find the In-Order Traversal of it.

Example 1:

Input:
       1
     /  \
    3    2
Output: 3 1 2

Example 2:

Input:
        10
     /      \ 
    20       30 
  /    \    /
 40    60  50
Output: 40 20 60 10 50 30

Your Task:
You don't need to read input or print anything. Your task is to complete the function inOrder() that takes root node of the tree as input and returns a list containing the In-Order Traversal of the given Binary Tree.

Expected Time Complexity: O(N).
Expected Auxiliary Space: O(N).

Constraints:
1 <= Number of nodes <= 105
0 <= Data of a node <= 105
*/

//read - https://medium.com/swlh/implement-binary-search-tree-in-javascript-897dcbcc5616
//read - https://www.educative.io/blog/tree-traversal-algorithms
//read - https://levelup.gitconnected.com/how-to-traverse-a-tree-using-javascript-c9a79826e819
 


var bst=class Node {
    constructor(val) {
      this.val = val;
      this.count=1;
      this.left = null;
      this.right = null;
    }  
    
    insert(val) {
      if(val < this.val && !this.left) {
        // create a new node at the left of the tree
        this.left = new Node(val);
      }
      else if(val < this.val && this.left) {
        this.left.insert(val)
      }
      else if(val > this.val && !this.right) {
        this.right = new Node(val)
      } 
      else if(val > this.val && this.right) {
        this.right.insert(val)
      }
      else if(val == this.val) {
        (this.count)++;
      }
    }  
    
    search(element){   
      if(this.val === element) {
        return true
      } else if(this.val > element && this.left){
        return this.left.search(element)
      } else if(this.val < element && this.right) {
        return this.right.search(element)
      }
      return false
    }

   
  };

  function inOrder(root) { 
    root.left && inOrder(root.left) 
    console.log(root.val+",") 
    root.right && inOrder(root.right) 
 } 

 function preOrder(node) { 
  console.log(node.val+",") 
  node.left && this.preOrder(node.left) 
  node.right && this.preOrder(node.right) 
} 

function postOrder(node) { 
  node.left && this.postOrder(node.left) 
  node.right && this.postOrder(node.right) 
  console.log(node.val+","); 
} 

  module.exports = {
    node: bst,
    inOrder:inOrder,
    preOrder:preOrder,
    postOrder:postOrder
  };
  
  