'use strict';

const graph = require('../index');

describe('Graphs.....', () => {

  it('add vertex', () => {
    let testGraph = new graph.Graph();
    const one = new graph.Vertex('one');
    testGraph.addVertex(one);

    expect(testGraph.adjacencyList).toBeTruthy();
    expect(testGraph.adjacencyList.get(one)).toEqual([]);
  });

  it('add edge', () => {
    let testGraph = new graph.Graph();
    const one = new graph.Vertex('one');
    const two = new graph.Vertex('two');
    testGraph.addVertex(one);
    testGraph.addVertex(two);
    testGraph.addEdge(one, two);
    const testValue = testGraph.adjacencyList.get(one);
    const expectedValue = [{ 'vertex': { 'value': 'two' }, 'weight': 0 }];

    expect(testValue).toEqual(expectedValue);
  });

  it('retreive all vertices from graph', () => {
    let testGraph = new graph.Graph();
    const one = new graph.Vertex('one');
    const two = new graph.Vertex('two');
    testGraph.addVertex(one);
    testGraph.addVertex(two);
    testGraph.addEdge(one, two);
    testGraph.addEdge(two, one);
    const testValue = testGraph.adjacencyList.get(one);
    const testValueTwo = testGraph.adjacencyList.get(two);
    const expectedValue = [{ 'vertex': { 'value': 'two' }, 'weight': 0 }];
    const expectedValueTwo = [{ 'vertex': { 'value': 'one' }, 'weight': 0 }];

    expect(testValue).toEqual(expectedValue);
    expect(testValueTwo).toEqual(expectedValueTwo);
  });

  it('retrteive neighbors', () => {
    let testGraph = new graph.Graph();
    const one = new graph.Vertex('one');
    const two = new graph.Vertex('two');
    const three = new graph.Vertex('three');
    testGraph.addVertex(one);
    testGraph.addVertex(two);
    testGraph.addVertex(three);
    testGraph.addEdge(one, two);
    testGraph.addEdge(one, three);

    const testValue = testGraph.getNeighbors(one);
    const expectedValue = [{ 'vertex': { 'value': 'two' }, 'weight': 0 }, { 'vertex': { 'value': 'three' }, 'weight': 0 }];

    expect(testValue).toEqual(expectedValue);
  });

  it('return neighbors with weight', () => {
    let testGraph = new graph.Graph();
    const one = new graph.Vertex('one');
    const two = new graph.Vertex('two');
    const three = new graph.Vertex('three');
    testGraph.addVertex(one);
    testGraph.addVertex(two);
    testGraph.addVertex(three);
    testGraph.addEdge(one, two);
    testGraph.addEdge(one, three);
    const testValue = testGraph.getNeighbors(one);
    const testWeight = testValue[0]['weight'];
    const testWeightTwo = testValue[1]['weight'];

    expect(testWeight).toEqual(0);
    expect(testWeightTwo).toEqual(0);
  });

  it('return size', () => {
    let testGraph = new graph.Graph();
    const one = new graph.Vertex('one');
    const two = new graph.Vertex('two');
    testGraph.addVertex(one);
    testGraph.addVertex(two);
    testGraph.addEdge(one, two);

    expect(testGraph.size(one)).toEqual(2);
  });

  it('A graph with only one node and edge can be properly returned', () => {
    let testGraph = new graph.Graph();
    const one = new graph.Vertex('one');
    testGraph.addVertex(one);
    testGraph.addEdge(one);
    const testValue = testGraph.adjacencyList.get(one);
    const expectedValue = [{ 'vertex': undefined, 'weight': 0 }];


    expect(testValue).toEqual(expectedValue);
  });

  it('empty graph returns null', () => {
    let testGraph = new graph.Graph();
    let testValue = testGraph.adjacencyList.values();

    expect(testValue).not.toBeUndefined();
  });
});