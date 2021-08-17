// import { Node, LinkedList, Hashmap } from "../index";
const Hashmap =require('../index').Hashmap;
const repeatedWord =require('../index').repeatedWord;
const hash = require('../index');
const leftJoin = require('../index').leftJoin;  
// const LinkedList =require('../index').LinkedList;
// const Node =require('../index').Node;

describe('Hashtable test ...', () => {
  let hash = new Hashmap(4000);
  it('Adding a key/value to your hashtable results in the value being in the data structure ', () => {
    hash.add('amro','97');
    expect(hash.contains('amro')).toBe(true);
  });
  it('Retrieving based on a key returns the value stored ', () => {
    expect(hash.get('amro')).toEqual("97");
  });
  it('Successfully returns null for a key that does not exist in the hashtable ', () => {
    // expect(hash.get('amroz')).toBe(null);
  });
  it('Successfully handle a collision within the hashtable ', () => {
    expect(hash.add('amor','93')).toBe('93');
  })
  it('Successfully retrieve a value from a bucket within the hashtable that has a collision ', () => {
    hash.add('aomr','37');
    expect(hash.get('amro')).toEqual("97");
  });
  test('Successfully hash a key to an in-range value ', () => {
    expect(hash.hash('amro')).toBe(2169);
  })
  describe('test repeated word',()=>{
    test('test for repeated word 1',()=>{
        let test = '';
        expect(repeatedWord(test)).toBe('cannot find words in an empty string');
    })
    test('test for repeated word 2',()=>{
        let test = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";
        expect(repeatedWord(test)).toBe('it');
    })
    test('test for repeated word 3',()=>{
        let test = 'some string with no repeated words';
        expect(repeatedWord(test)).toBe('cannot find words in an empty string');
    })
})
})


let hashOne = new hash.Hashmap(50);
let hashTwo = new hash.Hashmap(50);
let hashThree = new hash.Hashmap(50);

hashOne.add('fond', 'enamored');
hashOne.add('wrath', 'anger');
hashOne.add('diligent', 'employed');
hashOne.add('outfit', 'garb');
hashOne.add('guide', 'usher');

hashTwo.add('fond', 'averse');
hashTwo.add('wrath', 'delight');
hashTwo.add('diligent', 'idle');
hashTwo.add('guide', 'follow');
hashTwo.add('flow', 'jam');

hashThree.add('amro', 'averse');
hashThree.add('daeed', 'delight');
hashThree.add('barah', 'idle');
hashThree.add('batool', 'follow');
hashThree.add('yazan', 'jam');

describe('testing the leftJoin function', () => {

  it('should successfully join two hashmaps into a single data structure', () => {

    expect(leftJoin(hashOne, hashTwo)).toEqual([
      ['wrath', 'anger', 'delight'],
      ['diligent', 'employed', 'idle'],
      ['guide', 'usher', 'follow'],
      ['fond', 'enamored', 'averse'],
      ['outfit', 'garb', null],
    ]);
  });

  it('should successfully return data structure with two values for each key if the same table is passed twice', () => {

    expect(leftJoin(hashOne, hashOne)).toEqual([
      ['wrath', 'anger', 'anger'],
      ['diligent', 'employed', 'employed'],
      ['guide', 'usher', 'usher'],
      ['fond', 'enamored', 'enamored'],
      ['outfit', 'garb', 'garb'],
    ]);
  });

  it('should successfully return data structure with null as third element in every array for two tables with no matching keys', () => {
      
    expect(leftJoin(hashOne, hashThree)).toEqual([
      ['wrath', 'anger', null],
      ['diligent', 'employed', null],
      ['guide', 'usher', null],
      ['fond', 'enamored', null],
      ['outfit', 'garb', null],
    ]);
  });
});
  
  
  
  
