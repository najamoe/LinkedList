class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    add(data){
        this.head = new Node(data, this.head)
    }

    addFirst(data) {
        this.head = new Node(data, this.head)
    }

    addLast(data) {
        let node = new Node(data);
        let current;

        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next){
                current = current.next;
            }
            current.next = node;
        } 
    }

    clear() {
        this.head = null;
        this.tail = null;
    }

    getAt(index) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (count === index) {
                console.log(current.data)
                return current.data;
            }
            count++;
            current = current.next;
        }
        return null; // index out of range
    }

    indexOf(data) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.data === data) {
                return index;
            }
            index++;
            current = current.next;
        }

        return -1; // data not found
    }

    insertAfter(index, data) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (count === index) {
                const newNode = new Node(data, current.next);
                current.next = newNode;
                return;
            }
            count++;
            current = current.next;
        }
        // If index is out of range, you can throw an error or handle it as needed
    }

    insertBefore(index, data) {
        if (index === 0) {
            this.addFirst(data);
            return;
        }

        let current = this.head;
        let count = 0;
        let previous = null;

        while (current) {
            if (count === index) {
                const newNode = new Node(data, current);
                previous.next = newNode;
                return;
            }
            count++;
            previous = current;
            current = current.next;
        }
        // If index is out of range, you can throw an error or handle it as needed
    }

    first() {
        return this.head ? this.head.data : null;
    }

    last() {
        if (!this.head) return null;

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        return current.data;
    }

    remove(index) {
        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        let count = 0;
        let previous = null;

        while (current) {
            if (count === index) {
                previous.next = current.next;
                return;
            }
            count++;
            previous = current;
            current = current.next;
        }
        return null;
    }

    removeFirst() {
        if (!this.head) return;

        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) return;

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let current = this.head;
        let previous = null;

        while (current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
    }

    dumpList() {
        let current = this.head;

        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

//Testing for terminal

const ll = new LinkedList();

ll.addFirst(100);
ll.addFirst(200);
ll.addFirst(300)
ll.addLast(400);

