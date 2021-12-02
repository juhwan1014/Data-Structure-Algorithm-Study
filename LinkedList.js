class Node {
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    
    insertFirst(val){
    this.head = new Node(val, this.head);
    this.size++;
    }

    insertLast(val){
        let node = new Node(val);
        let current;

        if(!this.head){
            this.head = node;
        } else {
            current = this.head;

             while(current.next){
                 current = current.next
             }

            current.next = node;
        }

        this.size++;
    }

    insertAt(val, index){
      // If index is out of range
      if(index > 0 && index > this.size){
          return
      }
     

      //If first index
      if(index === 0){
          this.insertFirst(val);
          return
      } 
      
      const node = new Node(val);
      let current, previous;

      //Set current to first
      current = this.head;
      let count = 0;



      while (count < index){
          previous = current; // Node before index
          count++;
          current = current.next
      }

      node.next = current;
      previous.next = node;
      

    }


    

}

const list = new LinkedList();

list.insertFirst(1);
list.insertAt(2, 1);
list.insertLast(4);



console.log("list")
let temp = list.head
list.head = list.head.next
console.log(temp)
console.log(list.head)