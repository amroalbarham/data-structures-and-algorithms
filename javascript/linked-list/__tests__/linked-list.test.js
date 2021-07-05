'use strict';
// Require our linked list implementation
const LinkedLilst = require('../index');
describe('checks if it includes a value', () => {
  test('insert', () => {
    let ll = new LinkedLilst();
    expect(ll.head).toBe(null);
    ll.insert('a');
    expect(ll.head.value).toBe('a');
    ll.insert(false);
    ll.insert('c');
    ll.insert('d');
  });

  test('includes', () => {
    let ll = new LinkedLilst();
    ll.insert('a');
    ll.insert(false);
    ll.insert('c');
    ll.insert('d');
    expect(ll.includes('d')).toBe(true);
    expect(ll.includes('a')).toBe(true);
    expect(ll.includes('h')).toBe(false);
  });
  test('read all node values', () => {
    let ll = new LinkedLilst();
    ll.insert('a');
    ll.insert(false);
    ll.insert('c');
    ll.insert('d');
    expect(ll.toString()).toBe('{d} -> {c} -> {false} -> {a}');
  });
  test(' add a node to the end ', () => {
    const ll = new LinkedLilst();
    ll.append('one');
    ll.append('two');
    expect(ll.head.next.value).toBe('two');
  });
  test(' add multiple nodes ', () => {
    const ll = new LinkedLilst();
    ll.append('one');
    ll.append('two');
    ll.append('three');
    ll.append('four');
    expect(ll.head.next.next.next.value).toBe('four');
  });

  test('insert in the middle', () => {
    const ll = new LinkedLilst();
    ll.append('one');
    ll.append('two');
    ll.append('three');
    ll.append('four');
    ll.insertBefore('amro', 'three');
    expect(ll.head.next.next.value).toBe('amro');
  })
  test('insert before first', () => {
    const ll = new LinkedLilst();
    ll.append('one');
    ll.append('two');
    ll.append('three');
    ll.append('fourth');
    ll.insertBefore('amro', 'one');
    expect(ll.head.value).toBe('amro');
  })
  test('insert after a value', () => {
    const ll = new LinkedLilst();
    ll.append('one');
    ll.append('two');
    ll.append('three');
    ll.append('four');
    ll.insertAfter('amro', 'three');
    expect(ll.head.next.next.next.value).toBe('amro');
  })
  test('insert after last', () => {
    const ll = new LinkedLilst();
    ll.append('one');
    ll.append('two');
    ll.append('three');
    ll.append('four');
    ll.insertAfter('amro', 'four');
    expect(ll.head.next.next.next.next.value).toBe('amro');
  })
  test('Where k is greater than the length of the linked list', () => {
    const ll = new LinkedLilst();
    ll.append('one');
    ll.append('two');
    ll.append('three');
    ll.append('four');
    ll.insertAfter('amro', 'four');
    expect(ll.kthFromEnd(9)).toBe('Exception');
  })
  test('Where k and the length of the list are the same', () => {
    const ll = new LinkedLilst();
    ll.append('one');
    ll.append('two');
    ll.append('three');
    ll.append('four');
    ll.insertAfter('amro', 'four');
    expect(ll.kthFromEnd(5)).toBe('Exception');
  })
  test('Where k is not a positive integer', () => {
    const ll = new LinkedLilst();
    ll.append('one');
    ll.append('two');
    ll.append('three');
    ll.append('four');
    ll.insertAfter('amro', 'four');
    expect(ll.kthFromEnd(-5)).toBe('Exception');
  })
  test('Where the linked list is of a size 1', () => {
    const ll = new LinkedLilst();
    ll.append('first');
    expect(ll.kthFromEnd(0)).toBe('first');
  });
  test('Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    const ll = new LinkedLilst();
    ll.append('first');
    ll.append('sec');
    ll.append('thir');
    ll.append('fourth');
    expect(ll.kthFromEnd(2)).toBe('sec');
  });

})