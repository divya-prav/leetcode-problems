class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

let head = new Node(1);
let n1 = new Node(2);
let n2 = new Node(3);
let n3 = new Node(4);
let n4 = new Node(5);

head.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = n4;


// print all the elements in the list - using loop

function printElement(head){
    let node = head;
    while(node !== null){
        console.log(node.value);
        node = node.next;
    }
}
//printElement(head);
// print all the elements in the list - use recursion

function printElementRecursive(node){
   if(node === null) return

   console.log(node.value);
   printElementRecursive(node.next)
}  

//printElementRecursive(head);
// find the middle node in the list 

function findMiddleNode(head){
     if(head === null) return null;
     let pointer1 = head;
     let pointer2 = head.next;

     while(pointer2 !== null){
        pointer1 = pointer1.next;
        pointer2 =pointer2.next.next;
     }

     return pointer1.value;
}

console.log(findMiddleNode(null));

//Reverse the linked list in-place reversal

function reverseLinkedList(head){
   let prev = null;
   let next = null;
   let curr = head;

   while(curr !== null){
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
   }
    head = prev;
   return head;

}

let reverse = reverseLinkedList(head);
console.log(reverse)

//Reverse node in k-group


