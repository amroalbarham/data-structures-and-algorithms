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
        this.counter = 0;
    }
    insert(value) {
        this.counter = this.counter + 1;
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
        try {

            while (current.next) {
                if (current.value == null || current.value == undefined) {
                    outPut = outPut + `NULL -> `;
                } else {
                    outPut = outPut + `{${current.value}} -> `;
                }
                current = current.next;
                if (current.next == null) {
                    outPut = outPut + `{${current.value}}`;
                }
            }
            return outPut;
        } catch (e) {
            console.log('error...');
        }
    }
    append(value) {
        this.counter = this.counter + 1;
        let addNode = new Node(value);
        if (!this.head) {
            this.head = addNode;
        } else {
            let currnt = this.head;
            while (currnt.next) {
                currnt = currnt.next;
            }
            currnt.next = addNode
        }
    }

    insertAfter(newValue, value) {
        this.counter = this.counter + 1;
        let addNew = new Node(newValue);
        let current = this.head;
        while (current) {
            if (current.value == value) {
                addNew.next = current.next;
                current.next = addNew;
                break;
            }
            console.log(current.value);
            current = current.next;
        }
    }

    insertBefore(newValue, value) {
        this.counter = this.counter + 1;
        let addNew = new Node(newValue);
        let current = this.head;
        if (value == this.head.value) {
            addNew.next = this.head;
            this.head = addNew;
        } else {
            while (current) {
                if (current.next.value == value) {
                    addNew.next = current.next;
                    current.next = addNew;
                    break;
                }
                console.log(current.value);
                current = current.next;
            }
        }
    }
    kthFromEnd(k) {
        let current = this.head;
        let cnt = 1;
        if (k >= this.counter || k < 0) {
            return 'Exception';
        }
        while (current) {
            if (cnt == this.counter - k) {
                return current.value;
            }
            cnt = cnt + 1;
            current = current.next;
        }
    }


}
function linkedListzip(list1, list2) {
    let hand1 = list1.head;
    let hand2 = list2.head;
    let ll3 = new LinkedList();
    while (hand1 || hand2) {
        if (hand1 != null) {
            ll3.append(hand1.value);
            hand1 = hand1.next;
        }
        if (hand2 != null) {
            ll3.append(hand2.value);
            hand2 = hand2.next;
        }
    }
    return ll3.toString();
}

module.exports = {LinkedList,linkedListzip};