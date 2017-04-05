class Graph {
    constructor() {
        this.vertices = [];
        this.edges = [];
    }

    v() {
        return this.vertices.length;
    }

    e() {
        let res = 0;
        for (let es of this.edges) {
            res += es.length;
        }
        return res;
    }
}

export default Graph;
