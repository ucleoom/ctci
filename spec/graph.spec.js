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
