class Graph {
    constructor(vcount) {
        this.adjlist = new Array(vcount || 0).fill([]);
        this.edges = 0;
    }

    v() {
        return this.adjlist.length;
    }

    e() {
        return this.edges;
    }

    adj(v) {
        return this.adjlist[v];
    }

    addEdge(v, w) {
        this.adjlist[v].push(w);
        this.adjlist[w].push(v);
        this.edges++;
    }

    addVertex() {
        let res = this.v();

        this.adjlist.push([]);
        return res;
    }
}

export default Graph;
