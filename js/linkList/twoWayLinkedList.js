function TwoWayNode(element){
    this.element = element;
    this.next = null;
    this.previous = null;
}

function TwoWayLinkedList(){
    this.head = new TwoWayNode("head");
    this.find = twoWayFind;
    this.insert = twoWayInsert;
    this.display = twoWayDisplay;
    this.remove = twoWayRemove;
    this.findLast = twoWayFindLast;
    this.displayReverse = twoWayDisplayReverse;
}

function twoWayFind(item){
    let currentNode = this.head;
    while(currentNode !== null && currentNode.element !== item){
        currentNode = currentNode.next;
    }
    return currentNode;
}

function twoWayInsert(newElement, item){
    let newNode = new TwoWayNode(newElement);
    let tempNode = this.find(item);
    if (tempNode !== null) {
        newNode.next = tempNode.next;
        newNode.previous = tempNode;
        tempNode.next = newNode;
    }
}

function twoWayDisplay(){
    let displayArr = [];
    let currentNode = this.head;
    while (currentNode.next !== null) {
        currentNode = currentNode.next;
        displayArr.push(currentNode.element);
    }
    return displayArr;
}

function twoWayRemove(item){
    let removeNode = this.find(item);
    if (removeNode !== null) {
        removeNode.previous.next = removeNode.next;
        removeNode.nex.previous = removeNode.previous;
        removeNode.next = null;
        removeNode.previous = null;
    }
}

function twoWayFindLast(){
    let currentNode = this.head;
    while (currentNode.next !== null) {
        currentNode = currentNode.next;
    }
    return currentNode;
}

function twoWayDisplayReverse(){
    let displayArr = [];
    let currentNode = this.findLast();
    while (currentNode.previous !== null) {
        displayArr.push(currentNode.element);
        currentNode = currentNode.previous;
    }
    return displayArr;
}