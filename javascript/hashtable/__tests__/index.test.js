// import { Node, LinkedList, Hashmap } from "../index";
const Hashmap =require('../index').Hashmap;
// const LinkedList =require('../index').LinkedList;
// const Node =require('../index').Node;

describe('Hashtable test ...', () => {
  let hash = new Hashmap(4000);
  it('Adding a key/value to your hashtable results in the value being in the data structure ', () => {
    hash.add('amro','97');
    expect(hash.contains('amro')).toBe(true);
  });
  it('Retrieving based on a key returns the value stored ', () => {
    expect(hash.get('amro')).toEqual(["97"]);
  });
  it('Successfully returns null for a key that does not exist in the hashtable ', () => {
    expect(hash.get('amroz')).toBe(null);
  });
  it('Successfully handle a collision within the hashtable ', () => {
    expect(hash.add('amor','93')).toBe('93');
  })
  it('Successfully retrieve a value from a bucket within the hashtable that has a collision ', () => {
    hash.add('aomr','37');
    expect(hash.get('amro')).toEqual(["97"]);
  });
  test('Successfully hash a key to an in-range value ', () => {
    expect(hash.hash('amro')).toBe(189);
  })
  
  
  
  
  
  
})
