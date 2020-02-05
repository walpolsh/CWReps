// class LinkedList {
//   constructor(value) {
//     this.head = { value: value, next: null };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(value) {
//     const newNode = {
//       value: value,
//       next: null
//     };
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//   }
//   prepend(value) {
//     const newNode = {
//       value: value,
//       next: null
//     };
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//   }
// }
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    //the new node is appended to the tail.
    this.tail.next = newNode;
    // the new tail is the new node
    this.tail = newNode;
    //increase the length by one
    this.length++;
  }
  prepend(value) {
    const newNode = new Node(value);
    // the new node's next value is the head
    newNode.next = this.head;
    // the new head is the new node.
    this.head = newNode;
    //increase the length of the linked list by one
    this.length++;
  }
}

const myLinkedList = new LinkedList(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.prepend(1);
console.log(myLinkedList);
