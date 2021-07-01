'use strict';


class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    insert(value) {
        let addNode = new Node(value);
        if (!this.head) {
            this.head = addNode;
        } else {
            addNode.next = this.head;
            this.head = addNode;
        }
    }
    includes(value) {
      
        let current = this.head;
        if (!this.head) {
            return false;
        }
        while (current.next) {
            if (current.value == value) {
                return true;
            }
            current = current.next;
            if ((current.next == null) && (value == current.value)) {
                return true;
            }
        }
        return false;
    }
    toString() {
        let outPut = '';
        let current = this.head;
        try{

          while (current.next) {
              if(current.value==null||current.value==undefined){
                  outPut = outPut + `NULL -> `;
              }else{
                  outPut = outPut + `{${current.value}} -> `;
              }
              current = current.next;
              if (current.next == null) {
                  outPut = outPut + `{${current.value}}`;
              }
          }
          return outPut;
        }catch(e){
          console.log('error...');
        }
    }
}
module.exports = LinkedList;