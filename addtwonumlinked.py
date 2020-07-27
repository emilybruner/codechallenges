/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// what happens if the lists are different lengths?
// we need to traverse backwards but it is a singly linked list, not doubly?

// for every given node, we need to grab the first values from both linked lists, add them together, and then calculate any carryover
// every node can only have a single digit number, so the max carryover is 1

// we need to add the nodes of two linked lists

var addTwoNumbers = function(l1, l2) {
    // create a new linked list using the preset listnode 
    let head = new ListNode(0)
    let node = head
    // we need a variable to record any carryover value
    carryover = 0
    
    
    // need to traverse through both linked lists
    while (l1 || l2){
        
        // need to grab the value/set default values
        // if l1/l2 is present, use value, else return 0
        let l1Value = l1 ? l1.val : 0
        let l2Value = l2 ? l2.val : 0
        
        
        // sum up l1 and l2, if it is greater than 9 then we need to record the carryover
        let sum = l1Value + l2Value + carryover
        // need to reset carryover to zero in case it was previously set to 1
        carryover = 0
        let newValue = sum
        
        if (sum > 9) {
            // setting new value by taking off the tenths place and then recording that there was a carryover
            newValue = sum % 10
            carryover = 1
        }
        
        node.next = new ListNode(newValue)
        node = node.next
        
        // this allows us to traverse the linked lists as long as either l1 or l2 is true
        if (l1) {
            l1 = l1.next
        }
        if (l2) {
            l2 = l2.next
        }
        
        // if there is a carry over we will need to create a node at the end
        if (carryover) {
            node.next = new ListNode(carryover)
        }
    }
    return head.next
};