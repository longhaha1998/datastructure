function CircleList() {
    this.head = new Node('head');
    this.head.next = new Node('haha');
    this.head.next.next = new Node('xixi');
    this.head.next.next.next = this.head.next;
    this.checkCircle = linkedListCheckCircle;
}

function Node(element){
    this.element = element;
    this.next = null;
}

function LinkedList(){
    this.head = new Node("head");

    this.find = linkedListFind;

    this.findPres = linkedListFindPres;

    this.insert = linkedListInsert;

    this.display = linkedListDisplay;

    this.remove = linkedListRemove;

    this.findByIndex = linkedListFindByIndex;

    this.insertByIndex = linkedListInsertByIndex;

    this.reverseList = linkedListReverse;

    this.checkCircle = linkedListCheckCircle;

    this.findMiddleNode = linkedListFindMiddleNode;

    this.ifPalindrome = ifPalindrome;
}

function linkedListFind(item){
    let currentNode = this.head;
    while(currentNode !== null && currentNode.element !== item){
        currentNode = currentNode.next;
    }
    return currentNode;
}

function linkedListFindPres(item){
    let currentNode = this.head;
    while(currentNode.next !== null){
        if(currentNode.next.element === item){
            return currentNode;
        }
        currentNode = currentNode.next;
    }
    return null;
}

function linkedListInsert(newElement, item){
    let newNode = new Node(newElement);
    let tempNode = this.find(item);
    if (tempNode !== null) {
        newNode.next = tempNode.next;
        tempNode.next = newNode;
    }
}

function linkedListDisplay(){
    let displayArr = [];
    let currentNode = this.head;
    while(currentNode.next != null){
        currentNode = currentNode.next;
        displayArr.push(currentNode.element);
    }
    return displayArr;
}

function linkedListRemove(item){
    let tempPreNode = this.findPres(item);
    if (tempPreNode !== null) {
        tempPreNode.next = tempPreNode.next.next;
    }
}

function linkedListFindByIndex(index){
    let num = 0;
    let currentNode = this.head;
    if (index<0) {
        return;
    }
    while(num !== index && currentNode !== null){
        num++;
        currentNode = currentNode.next;
    }
    return currentNode;
}

function linkedListInsertByIndex(index, element){
    let newNode = new Node(element);
    if (index<=0) {
        return false;
    }
    let num = 0;
    let currentNode = this.head;
    while (true) {
        if (num+1 === index) {
            newNode.next = currentNode.next;
            currentNode.next = newNode;
            return true;
        }
        num++;
        if (currentNode.next === null) {
            currentNode.next = newNode;
            return true;
        }
        currentNode = currentNode.next;
    }
}

function linkedListReverse() {
    let root = new Node('head');
    let currentNode = this.head.next;
    while (currentNode !== null) {
        let next = currentNode.next;
        currentNode.next = root.next;
        root.next = currentNode;
        currentNode = next;
    }
    this.head = root;
}

function linkedListCheckCircle() {
    let fast = this.head.next;
    let slow = this.head;
    if (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if (slow === fast) {
            return true;
        }
    };
    return false;
}

function linkedListFindMiddleNode() {
    let fast = this.head;
    let slow = this.head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}

function linkedListMergeSortList(listA, listB) {
    let a = listA;
    let b = listB;
    while (listA !== null && listA.next !== null) {
        if (listA.next.element < listA.element) {
            return false;
        }
        listA = listA.next;
    }
    while (listB !== null && listB.next !== null) {
        if (listB.next.element < listB.element) {
            return false;
        }
        listB = listB.next;
    }
    let resultList = new Node('head');
    let currentNode = null;
    if (a.element > b.element) {
        resultList.next = b;
        currentNode = b;
        b = b.next;
    } else {
        resultList.next = a;
        currentNode = a;
        a = a.next;
    }
    while (a !==null && b !== null) {
        if (a.element > b.element) {
            currentNode.next = b;
            b = b.next;
        } else {
            currentNode.next = a;
            a = a.next;
        }
        currentNode = currentNode.next;
    }
    if (a === null) {
        currentNode.next = b;
    } else {
        currentNode.next = a;
    }
    return resultList;
}


// 判断回文最简单的方式就是倒序之后看看是不是跟之前的一样
// 这是第二种方法，快慢指针
function ifPalindrome() {
    let fast = this.head;
    let slow = this.head;
    let root = new Node("root");
    while (fast !=null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        let currentNode = new Node(slow.element);
        currentNode.next = root.next;
        root.next = currentNode;
    }
    if (fast !== null) {
        slow = slow.next;
    }
    while (slow !== null) {
        if (slow.element !== root.next.element) {
            return false
        }
        slow = slow.next;
        root = root.next;
    }
    return true;
}
