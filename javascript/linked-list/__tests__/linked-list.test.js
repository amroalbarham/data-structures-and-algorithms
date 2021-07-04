'use strict';
// Require our linked list implementation
const LinkedLilst = require('../index');
describe('checks if it includes a value',()=>{
  test('insert',()=>{
    let ll = new LinkedLilst();
    expect(ll.head).toBe(null);
    ll.insert('a');
    expect(ll.head.value).toBe('a');
    ll.insert(false);
    ll.insert('c');
    ll.insert('d');
  });
  
  test('includes',()=>{
    let ll = new LinkedLilst();
    ll.insert('a');
    ll.insert(false);
    ll.insert('c');
    ll.insert('d');
    expect(ll.includes('d')).toBe(true);
    expect(ll.includes('a')).toBe(true);
    expect(ll.includes('h')).toBe(false);
  });
  test('read all node values',()=>{
    let ll = new LinkedLilst();
    ll.insert('a');
    ll.insert(false);
    ll.insert('c');
    ll.insert('d');
    expect(ll.toString()).toBe('{d} -> {c} -> {false} -> {a}');
  });
  test(' add a node to the end ',()=>{
    const ll = new LinkedLilst();
    ll.append('one');
    ll.append('two');
    expect(ll.head.next.value).toBe('two');
  });
  test(' add multiple nodes ',()=>{
    const ll = new LinkedLilst();
    ll.append('one');
    ll.append('two');
    ll.append('three');
    ll.append('four');
    expect(ll.head.next.next.next.value).toBe('four');
  });

  test('insert in the middle',()=>{
    const ll = new LinkedLilst();
    ll.append('one');
    ll.append('two');
    ll.append('three');
    ll.append('four');
    ll.insertBefore('amro','three');
    expect(ll.head.next.next.value).toBe('amro');
  })
  test('insert before first',()=>{
    const ll = new LinkedLilst();
    ll.append('one');
    ll.append('two');
    ll.append('three');
    ll.append('fourth');
    ll.insertBefore('amro','one');
    expect(ll.head.value).toBe('amro');
  })
  test('insert after a value',()=>{
    const ll = new LinkedLilst();
    ll.append('one');
    ll.append('two');
    ll.append('three');
    ll.append('four');
    ll.insertAfter('amro','three');
    expect(ll.head.next.next.next.value).toBe('amro');
  })
  test('insert after last',()=>{
    const ll = new LinkedLilst();
    ll.append('one');
    ll.append('two');
    ll.append('three');
    ll.append('four');
    ll.insertAfter('amro','four');
    expect(ll.head.next.next.next.next.value).toBe('amro');
  })

})