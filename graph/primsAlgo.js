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