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
    
}};

function createNode(value, next = null) { return {
    value,
    next
}};


list = createList();

list.append('value 1');
list.append('value 2');
list.prepend('value 0')
console.log(list.size())

console.log(list)