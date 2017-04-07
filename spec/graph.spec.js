import Graph from '../src/graph.js';

describe('Graph', function() {
    let graph;

    beforeEach(function() {
        graph = new Graph();
    });

    it('v() should return the number of vertices.', function() {
        expect(graph.v()).toBe(0);
    });

    it('e() should return the number of edges.', function() {
        expect(graph.e()).toBe(0);
    });
});

describe('Graph(n)', function() {
    let vcount = 6,
        graph;
    beforeEach(function() {
        graph = new Graph(vcount);
    });

    it('v() should return number of vertices defined in the constructor', function() {
        expect(graph.v()).toBe(vcount);

        for(let i = 0; i < vcount; i++) {
            expect(graph.adj(i)).toEqual([]);
        }

        expect(graph.e()).toBe(0);
    });

    it('addEdge(1, 2) should add edge', function() {
        graph.addEdge(1, 2);

        expect(graph.e()).toBe(1);
    });
});
