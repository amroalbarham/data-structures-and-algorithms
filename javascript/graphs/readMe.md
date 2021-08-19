# Graphs

## Graph Implementation

- **Implement Graphs and related methods. Implement getEdges function that returns true or false for whether a specified path through the graph is possible. Implement depthFirst function to do preorder traversal on a graph.**


## Challenge

- **Implement your own graph, should be represented as an adjacency list.**
- **addNode(): adds a new vertex to the graph, takes in the value of that vertex and returns the added vertex.**
- **addEdge(): adds a new edge between two nodes in the graph, include ability to have a "weight", takes in the two nodes to be connected by the edge.**
- **getNodes(): returns all of the nodes in the graph as a collection (set, list, or similar).**
- **getNeighbors(): returns collection of edges connected to the given node, takes in a given node, includes the weight of the connection in the returned collection.**
- **size(): returns the total number of nodes in the graph.**
- **Implement a breadth-first traversal on a graph.**
- **Write a business trip function, that takes in a graph and an array of city names. Return whether the full trip if possible , and if so how much it would cost.**

## Approach & Efficiency

- **Created Vertex, Edge, and Graph classes and constructors.**
- **Created methods for addVertex(vertex), addEdge(startVertex, endVertex, weight), getNeighbors(vertex).**
- **Also created methods for both breadth first traversal as well as depth first traversal.**
- **Created size method that traverses the graph and returns the number of vertices.**
- **Created a business trip function, that takes in a graph and an array of city names. Return whether the full trip if possible , and if so how much it would cost.**