// ================================== Dynamic oprator=================================

let instance = new ConstructorFunction();


function person(name, age) {
    this.name = name
    this.age = age
}

let person1=new person("Alice",30)
console.log(person1.name)
console.log(person1.age)


delete object.property;

let person ={
    name:"alice",
    age:30,
}
console.log(person.name);
delete person.age
console.log(person.age);


let arr=[1,2,3,4,"ssss"]
arr.shift()

for(let item of arr){
    console.log(item);
}



Input: nums = [1,15,6,3]
Output: 9
Explanation: 
The element sum of nums is 1 + 15 + 6 + 3 = 25.
The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
The absolute difference between the element sum and digit sum is |25 - 16| = 9.


var differenceOfSum = function (nums) {
    let sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum += nums[i]
    }


    let sum1 = 0;
    let splitDigit = nums.join('').split('').map(Number);

    for (i = 0; i < splitDigit.length; i++) {
        sum1 += splitDigit[i]

    }

    return sum - sum1;
}
console.log(differenceOfSum ([1,15,6,3]));


let arr = [1, 2, 3, 3, 4, 5, 6]

var newArr = []

function removeElement(arr, element) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] != element) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(removeElement(arr, 3));

// ========================// sum of the Array========================


let array = [1, 2, 3, 3, 4, 5, 6, 7]

function sumofArray(array) {

    let sum = 0;

    for (i = 0; i < array.length; i++) {
        sum+=array[i]
    }
    return sum
}

console.log(sumofArray(array));

// ===============String=======================

Palindrome or not

function Palindrome(str) {
    if (str.length == 0) {
        return true;
    }
    if (str[0] != str[str.length - 1]) {
        return false;
    }
    return Palindrome(str.slice(1, str.length - 1))
}
console.log(Palindrome("MALAYALAM"))

// ====================================// valid palindrom==================

var isPalindrome = function(s) {
    if(s.length===0)
    return true
    s=s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()


console.log(s)

     return s===s.split("").reverse("").join("")



};
console.log(isPalindrome("A man, a plan, a canal: Panama"));


// =================// find longest word==========================

function findLongestword(str) {
    let words = str.split(' ')
    let longWord = "";

    console.log(words);
    for (let word of words) {
        if (word.length > longWord.length) {
            longWord = word

        }
    }
    return longWord;

}
console.log(findLongestword("a bb cc ddd"));


//  array to linkdlist 

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function arrayToLinkedlist(array) {
    if (array.length === 0) {
        return null;
    }
    let head = new Node(array[0]);
    let current = head;
    for (let i = 1; i < array.length; i++) {
        current.next = new Node(array[i]);
        current = current.next;
    }
    return head;
}

function printList(head) {
    let current = head;
    while (current != null) {
        console.log(current.value)
        current = current.next
    }
}

const array = [3, 4, 6, 8, 5, 4, 5];
printList(arrayToLinkedlist(array));


// Given the head of a singly linked list, reverse the list, and return the reversed list.

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function arrayToLinkedList(array) {
    if (array.length === 0) {
        return null;
    }
    let head = new Node(array[0]);
    let current = head;
    for (let i = 1; i < array.length; i++) {
        current.next = new Node(array[i]);
        current = current.next;
    }
    return head;
}

function printList(head) {
    let current = head;
    const values = [];
    while (current !== null) {
        values.push(current.value);
        current = current.next;
    }
    console.log(values.join(' -> '));
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}


const array = [1, 2, 3, 4, 5];
const linkedList = arrayToLinkedList(array);
console.log("Original List:");
printList(linkedList);

const reversedLinkedList = reverseLinkedList(linkedList);
console.log("Reversed List:");
printList(reversedLinkedList);

// =======================================================================================================
// Given a linked list and a value, append the value to the end of the linked list

// Example:

// Input: Linked list: 1 -> 2 -> 3, Value to append: 4
// Output: Linked list: 1 -> 2 -> 3 -> 4



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

    // Method to append a value to the end of the linked list
    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Method to print the linked list
    printList() {
        let current = this.head;
        while (current !== null) {
            process.stdout.write(current.value.toString() + ' -> ');
            current = current.next;
        }
        console.log('null');
    }
}


const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.printList(); 

linkedList.append(4);
linkedList.printList(); 

// =================================binary search===============================
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (arr[middle] === target) {
            return middle;
        }

        if (arr[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1; 
}

// Test the function
const arr1 = [-1, 0, 3, 5, 9, 12];
const target1 = 9;
console.log(binarySearch(arr1, target1)); 

// =========================liner Search======================


const arry=[1,2,3,2,5,58,8]

function linerSearch(arry,value){
    for(let i=0;i<arry.length;i++){
        if(arry[i]==value){
            return i
        }
    }
    return -1
}

console.log(linerSearch(arry,58));

// ===================Factorial Recursion===========

function FactorialRecursion(n) {
    if (n <= 1) {
        return 1;
    }
    return n * FactorialRecursion(n - 1)
}

console.log(FactorialRecursion(5));

// ==========Fibnocci Recursion==========

function FibnocciRecursion(n) {
    if (n < 2) return n;

    return FibnocciRecursion(n-1)+FibnocciRecursion(n-2)
}

console.log(FibnocciRecursion(8));

// ==============array sum recursion========
let array = [1, 2, 3, 6, 7, 8]

function add(array) {
    if (array.length == 0) {
        return 0;
    }

    return array.shift() + add(array)
}
console.log(add(array));


// ===========secondLargest in array==============

let array = [1, 2, 10, 3, 9, 5, 6]

function secondLargest(array) {
    let firstlargest = Infinity
    let secondLargest = Infinity

    for (i = 0; i < array.length; i++) {
        if (array[i] > firstlargest) {
            secondLargest = firstlargest
            firstlargest = array[i]
        } else if (array[i] > secondLargest && array[i] !== firstlargest) {
            secondLargest = array[i]
        }
    }

    return secondLargest
}

console.log(secondLargest(array));

// =========split string balanced string==========

let s="RLRRRLLLRLRL"


function balancedsplitString(s){

let count=0;
let res=0;
for(let val of s){
    val==="L" ? count++:count--
    if (count===0){
        res++
    }
}
 return res
}

console.log(balancedsplitString(s));

let a=[1,2,5,4,47,8,54]
a.splice(1,1,"three")
console.log(a);

// insert value array end=======================

function insert(a,element){
    a[a.length]=element
}
    let a=[1,23,33,3,5,5]

    insert(a,16)

console.log(a);

// =========beginning=========

let arr = [1, 2, 3, 4, 5]
function beginning(arr, element) {
    for (i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1]
    }
    arr[0] = element
    return arr
}
console.log(beginning(arr, 10));

let a=[1,23,33,3,5,5]

function insert(a,element){
    a[a.length]=element

    return a
}
console.log(insert(a,6));


// ==============specific index=========

let a = [1, 23, 33, 3, 5, 5]

function specific(a, index, element) {
    for (i = a.length; i > index; i--) {
        a[i] = a[i - 1]
    }
    a[index] = element

    return a
}

console.log(specific(a, 2, 6));


let arr=[6,5,4,3,5,9]

function result(arr,target){
    var newArr=[]
    for(i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length-1;j++){
            if(arr[i]+arr[j]==target){
                return [arr[i],arr[j]]
            }
        }
    }
}
console.log(result(arr,10));


function moveNumber(nums, target) {
    let pos = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== target) {
            nums[pos] = nums[i];
            pos++;
        }
    }
    for (let i = pos; i < nums.length; i++) {
        nums[i] = target;
    }
}

let nums = [0, 1, 0, 3, 12];
let target = 0;
moveNumber(nums, target);
console.log(nums);  

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

}

class Slinkedlist {
    constructor() {
        this.head = null
        this.tail = null
    
}
addNode(data){
    const newnode = new Node(data)
    if (this.head == null) {
        this.head = newnode
    } else {
        this.tail.next = newnode
    }
    this.tail = newnode
}

display(){
    if(this.head==null){
        console.log("empty");
        return
    }
    let temp=this.head
    while(temp!=null){
        console.log(temp.data);
        temp=temp.next
    }
}
}

const list=new Slinkedlist()
list.display()
list.addNode(10)
list.addNode(20)
list.addNode(30)
list.display()

// =======insert the value in linked list=========

class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class Slinkedlist{
    constructor(){
        this.head=null;
        this.tail=null;
    }


addNode(data){
    const newNode=new Node(data)
    if(this.head==null){
        this.head=newNode
    }else{
        this.tail.next=newNode
    }
    this.tail=newNode

}

display(){
    if(this.head==null){
        console.log("empty");
        return;
    }
    let temp=this.head
    while(temp!=null){
        console.log(temp.data);
        temp=temp.next
    }

    
}
}

const list =new Slinkedlist()

list.addNode(1)
list.addNode(2)
list.addNode(3)
list.addNode(4)
list.display()

// ==============// insert value in 5th position in Linkedlist=======





class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class Slinkedlist{
    constructor(){
        this.head=null
        this.tail=null
    }


addNode(data){
    const newNode=new Node(data)
    if(this.head==null){
        this.head=newNode

    }else{
        this.tail.next=newNode
    }
    this.tail=newNode


}






insertAdd(data,postion){
    let temp =this.head
   let i=0
    let pervece=null

    while(temp!=null){
        if(i==postion){
            break
        }
        pervece=temp
        temp=temp.next
        i++
       
       

    }

    const newNode=new Node(data)
    pervece.next=newNode
    newNode.next=temp
}



display(){
    let temp=this.head
    while(temp!=null){
        console.log(temp.data);
        temp=temp.next
    }
}
}

const list=new Slinkedlist()
list.addNode(10)
list.addNode(20)
list.addNode(30)
list.addNode(40)


list.insertAdd(10,5)
list.display()



// ===========add the value head==========

class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}

class Slinkedlist{
    constructor(){
        this.head=null
        this.tail=null
    }


    addNode(data){
        const newNode=new Node(data)
        if(this.head==null){
            this.head=newNode
        }else{
            this.tail.next=newNode
        }
        this.tail=newNode
    }

    inserValue(data){
        const newNode=new Node(data)
        newNode.next=this.head
        this.head=newNode
    }


display(){
    let temp=this.head
    while(temp!=null){
        console.log(temp.data);
        temp=temp.next
    }
}

}

const list =new Slinkedlist()
list.addNode(10)
list.addNode(20)
list.addNode(10)
list.inserValue(5)
list.display()



