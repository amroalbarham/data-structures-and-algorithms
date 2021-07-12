'use strict';

// const AnimalShelter = require('../index').AnimalShelter;
const AnimalShelter = require('../index').AnimalShelter;
describe('Queue', () => {
  let queue;
  beforeEach(() => {
    queue = new AnimalShelter();
  });
  describe('Can only enqueue into a dog or a cat', () => {
    it('enqueue for dog or a cat', () => {
      queue.enqueue('cats');
      queue.enqueue('dog');
      queue.enqueue('dog');
      expect(queue.top.value).toEqual('cats');
    });
    
    it('enqueue anything other than a dog or a cat gives an error', () => {
      expect(queue.enqueue(3)).toEqual("must value: dogs or cats");
    });
    it('can enqueue a cat or a dog succesfully', () => {
      queue.enqueue('dog');
      queue.enqueue('cats');
      queue.enqueue('dog');
      expect(queue.dequeue()).toEqual("dog");
      expect(queue.dequeue()).toEqual("cats");
      expect(queue.dequeue()).toEqual("dog");
      expect(queue.dequeue()).toEqual("cant dequeue an empty queue");

    });
  });
});