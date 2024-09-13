/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */
/*colors = new LinkedList;
colors.push("red");
colors.push("green");
colors.push("yellow");
colors.unshift("blue");*/
class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length +=1;
    return this.length;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    
    newNode.next = this.head;
    this.head = newNode;
    this.length +=1;
    return this.length;
  }
  /** pop(): return & remove last item. */

  pop() {
    if(this.length == 2){
      let popNode = this.tail.val;
      this.tail = this.head;
      this.length--;
      return `removed ${popNode}`
    }
    
    if(this.length == 1){
      let popNode = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return `removed ${popNode}`
    }

    let popNode = this.tail;
    let currentNode = new Node(this.head.val);
    currentNode.next = this.head.next;

    while(currentNode.next !== this.tail){
      currentNode = currentNode.next;
    
    }
      this.tail = currentNode;
      this.tail.next = null;

    this.length -=1;
    return `removed ${popNode.val}`
  }
  /** shift(): return & remove first item. */

  shift() {
    const shiftedNode = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return `removed ${shiftedNode.val}`
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = new Node(this.head.val);
    currentNode.next = this.head.next;
    if(idx < -1){
      return "Index must be greater than or equal to zero"
    }
    for(let i=idx-1; i >= 0; i--){
      currentNode = currentNode.next;
    }
      return currentNode;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentNode = new Node(this.head.val);
    currentNode.next = this.head.next;
    if(idx < -1){
      return "Index must be greater than or equal to zero"
    }
    for(let i=idx; i >= 0; i--){
      currentNode = currentNode.next;
    }
      currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(prevIdx, val) {
    if(prevIdx == 0){
      this.unshift(val)
      return
    }
    let currentNode = new Node(this.head.val);
    currentNode.next = this.head.next;
    if(prevIdx < -1){
      return "Index must be greater than or equal to zero"
    }
    for(let i=(prevIdx-2); i >= 0; i--){
      currentNode = currentNode.next;
    }
      const newNode = new Node(val);
      newNode.next=currentNode.next;
      newNode.next = newNode.next;
      currentNode.next = newNode;
      if(!newNode.next){
        this.tail = newNode;
      }   
      this.length++;
  }

  

  /** removeAt(idx): return & remove item at idx, */

  removeAt(prevIdx) {
    if(prevIdx == 0){
      this.pop()
    }
    let currentNode = new Node(this.head.val);
    currentNode.next = this.head.next;
    if(prevIdx < -1){
      return "Index must be greater than or equal to zero"
    }
    for(let i=(prevIdx-1); i >= 0; i--){
      currentNode = currentNode.next;
    }
      currentNode.next = currentNode.next.next;      
  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.head == null){
      return 0
    }
    let count = 0;
    let total = 0;
    let currentNode = this.head
    for(let i=this.length; i >= 1; i--){
      total += currentNode.val;
      currentNode = currentNode.next;
      count++;
    }
    
    return total/count
  }
}

module.exports = LinkedList;
