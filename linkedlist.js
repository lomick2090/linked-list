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
}};

function createNode(value, next = null){ return {
    value,
    next
}};


list = createList();

list.append('value 1');
list.append('value 2');

console.log(list)



