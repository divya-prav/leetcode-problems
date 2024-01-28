class Graph {
    constructor() {
      this.vertices = new Set(); // set of unique vertices
      this.edges = {}; // adjacency list - map of vertices to their neighbors
    }
  
    //function add vertex
    addVertex(v) {
      this.vertices.add(v);
      this.edges[v] = [];
    }
  
    // function add edge
    addEdge(v1, v2) {
      this.edges[v1].push(v2);
      this.edges[v2].push(v1);
    }
  
    // prints out the structutre of the graph
    getGraphStructure() {
      let graphStructure = "";
      for (const vertex of this.vertices) {
        const connections = this.edges[vertex].join(" => ");
        graphStructure += `${vertex} => ${connections}\n`;
      }
      console.log(graphStructure);
    }
}
const unweightedGraph = new Graph();

// Add vertices
unweightedGraph.addVertex("A");
unweightedGraph.addVertex("B");
unweightedGraph.addVertex("C");
unweightedGraph.addVertex("D");
unweightedGraph.addVertex("E");
unweightedGraph.addVertex("F");
unweightedGraph.addVertex("G");

// Add edges
unweightedGraph.addEdge("A", "B");
unweightedGraph.addEdge("A", "C");
unweightedGraph.addEdge("B", "D");
unweightedGraph.addEdge("B", "E");
unweightedGraph.addEdge("C", "F");
unweightedGraph.addEdge("E", "G");

// Display the graph structure
// console.log("\nGraph structure:");
// console.log(unweightedGraph.getGraphStructure());

function depthfirst(graph, start) {
    const visit = new Set(); // unique nodes visited
    const stack = [start]; // push start node to stack
    while (stack.length > 0) {
      // while stack is not empty
      const current = stack.pop(); // pop node from stack
      console.log(current.value); // print node
      if (!visit.has(current)) {
        // if node has not been visited
        visit.add(current); // add node to visit set
        stack.push(...graph[current].neighbors); // push neighbors to stack so we will attempt to visit them in the next iterations
      }
    }
  }

  depthfirst(unweightedGraph,'A');