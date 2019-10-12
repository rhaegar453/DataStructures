class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(data) {
        this.items.push(data);
    }
    dequeue() {
        return this.items.shift();
    }
    isEmpty() {
        return this.items.length == 0;
    }
}


class Graph {
    constructor(noofvertices) {
        this.noofvertices = noofvertices;
        this.AdjList = new Map();
    }

    addVertex(vertex) {
        this.AdjList.set(vertex, []);
    }

    addEdge(v, w) {
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
    }

    printGraph() {
        let get_keys = this.AdjList.keys();
        for (let i of get_keys) {
            let values = this.AdjList.get(i);
            let conc = "";
            for (let j of values) {
                conc += j + " "
            }
            console.log(i + " => " + conc);
        }
    }

    bfs(startingNode) {
        let visited = [];
        let total="";
        for (let i = 0; i < this.noofvertices; i++) {
            visited[i] = false;
        }
        visited[startingNode] = true;
        let q = new Queue();
        q.enqueue(startingNode);
        while (!q.isEmpty()) {
            let getQueueElement = q.dequeue();
            // console.log(getQueueElement);
            total+=getQueueElement+" ";
            let get_neigs = this.AdjList.get(getQueueElement);
            for (let i in get_neigs) {
                let neigh = get_neigs[i];
                if (!visited[neigh]) {
                    visited[neigh] = true;
                    q.enqueue(neigh);
                }
            }
        }
        console.log(total);
    }

    dfs(startingNode) {
        let visited = [];
        for (let i = 0; i < this.noofvertices; i++) {
            visited[i] = false;
        }
        this.DFSUtil(startingNode, visited);
    }
    DFSUtil(vertex, visited) {
        visited[vertex] = true;
        console.log(vertex);
        let get_neigs = this.AdjList.get(vertex);
        for (let i in get_neigs) {
            let get_element = get_neigs[i];
            if (!visited[get_element]) {
                this.DFSUtil(get_element, visited);
            }
        }
    }
}


let g = new Graph(6);
let nodes = ['A', 'B', 'C', 'D', 'E', 'F'];
nodes.map(item => {
    g.addVertex(item);
})


g.addEdge('A', 'C')
g.addEdge('A', 'B')
g.addEdge('A', 'D')
g.addEdge('B', 'C')
g.addEdge('B', 'E')
g.addEdge('C', 'E')
g.addEdge('E', 'F')
g.addEdge('F', 'D')


g.dfs('A');

