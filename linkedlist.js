function createList(head = null) { return {
    head,
    append: function append(value) {
        let node = createNode(value);
        let current = this.head;
        if (this.head === null) {
            this.head = node;
        } else {
            while (current.next) {
                current = current.next;
            }
            current.next = node
        }
    },
    prepend: function prepend(value) {
        node = createNode(value, this.head);
        this.head = node;
    },
    size: function size() {
        let node = this.head;
        let count = 0;
        while (node) {
            node=node.next
            count++
        }
        return count;
    },
    tail: function tail() {
        let node = this.head 
        while (node.next){
            node = node.next;
        }
        return node;
    },
    at: function at(index) {
        let node = this.head 
        for (let i = 0; i < index; i ++) {
            if (node.next) {
                node = node.next
            } else {
                return null;
            }
        }
        return node;
    },
    pop: function pop() {
        let l = this.size();
        let current = this.head;
        for (let i = 0; i < (l-2); i++) {
            current = current.next
        }
        console.log(current.next)
        current.next = null
    },
    contains: function contains(search) {
        let current = this.head;
        while (current) {
            if (current.value == search) {
                return true;
            }
            current = current.next
        }
        return false;
    },
    find: function find(search) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.value == search) {
                return index;
            }
            current = current.next;
            index++;
        }
        return null;
    },
    toString: function toString() {
        let string = '';
        let current = this.head;
        while(current) {
            string = string + `( ${current.value} ) -> `
            current = current.next;
        } 
        string = string + `null`;
        return string;
    },
    insertAt: function insertAt(value, index) {
        if (index == 0){
            this.prepend(value);
        } else {
            let current = this.head;
            let node = createNode(value);
            for (i=0; i < index-1; i++) {
                current = current.next;
            }
            node.next = current.next;
            current.next = node;
        }
    },
    removeAt: function removeAt(index) {
        let current = this.head;
        if (index == 0 ) {
            this.head = current.next;
        } else {
            
            for (i=0; i < index-1; i++) {
                current = current.next
            }
            current.next = current.next.next;
        }
    }
}};

function createNode(value, next = null) { return {
    value,
    next
}};


list = createList();

list.append('value 1');
list.append('value 2');
list.prepend('value 0');

console.log(list.toString())
list.insertAt('value -1', 0)
console.log(list.toString())
list.removeAt(0)
console.log(list.toString())