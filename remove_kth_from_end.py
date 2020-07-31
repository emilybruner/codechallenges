# Singly-linked lists are already defined with this interface:
# class ListNode(object):
#   def __init__(self, x):
#     self.value = x
#     self.next = None
#
def remove_kth_from_end(head, k):
    # find index k based from start of list (instead of end)
    node = head
    size = 1
    # edge case if k = 0
    if k == 0:
        return head
        
    while node.next:
        node = node.next
        size += 1
    
    # edge case if k is out of bounds of the array
    if k > size:
        return head
    # if deleting the first element
    if k == size:
        head = head.next
        return head
    
    k = size - k
    # create new counter to keep track of k 
    counter = 1
       
    #find the node to remove
    prev = head
    node = head.next
    
    while counter < k:
        prev = node
        node = node.next
        counter+=1
        
    # remove node by reassigning pointers
    prev.next = node.next
    return head
