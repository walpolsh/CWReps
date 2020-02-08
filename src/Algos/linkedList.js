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
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(value) {
//     const newNode = new Node(value);
//     //the new node is appended to the tail.
//     this.tail.next = newNode;
//     // the new tail is the new node
//     this.tail = newNode;
//     //increase the length by one
//     this.length++;
//   }
//   prepend(value) {
//     const newNode = new Node(value);
//     // the new node's next value is the head
//     newNode.next = this.head;
//     // the new head is the new node.
//     this.head = newNode;
//     //increase the length of the linked list by one
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
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
  traverseToIndex(index) {
    let currentNode = this.head;
    let count = 0;
    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  }
  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    const newNode = new Node(value);
    let leader = this.traverseToIndex(index - 1);
    let holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this.printList();
    }
    if (index >= this.length) {
      let leader = this.traverseToIndex(this.length - 1);
      leader.next = null;
      this.length--;
      return this.printList();
    }
    let leader = this.traverseToIndex(index - 1);
    let unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
    // 1 - 2 - 3
  }
}

const myLinkedList = new LinkedList(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert(0, "hello");
myLinkedList.insert(2, "hey hey");
myLinkedList.insert(9999, "goodbye");
myLinkedList.remove(2);
myLinkedList.remove(4);
myLinkedList.remove(3);
myLinkedList.remove(0);
myLinkedList.remove(991249);
