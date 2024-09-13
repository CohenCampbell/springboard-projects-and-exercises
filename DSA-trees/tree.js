/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if(!this.root) return 0;

    let sum = this.root.val;

    function childSum(node){
      for(let child of node.children){
        sum += child.val;

        if(child.children.length > 0){
          childSum(child);
        }
      }
    }

    childSum(this.root);
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(!this.root) return 0;

    let evens;
    this.root.val % 2 === 0 ? evens = 1 : evens = 0;

    function evenCounter(node){
      for(let child of node.children){
        child.val % 2 === 0 ? evens +=1 : evens+=0

        if(child.children.length > 0){
          evenCounter(child);
        }
      }
    }
    evenCounter(this.root);
    return evens
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(!this.root) return 0;

    let count;
    this.root.val > lowerBound ? count = 1 : count = 0;

    function greaterCounter(node){
      for(let child of node.children){
        child.val > lowerBound ? count +=1 : count+=0

        if(child.children.length > 0){
          greaterCounter(child);
        }
      }
    }
    greaterCounter(this.root);
    return count
  }
}

module.exports = { Tree, TreeNode };
