function ListNode(val) {
    this.val = val;
    this.next = null;
}
function reverse(head) {
    if (!head || !head.next) {
        return head;
    }
    let current = head;
    let prev = null;
    while(current) {
        var next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return current;
}