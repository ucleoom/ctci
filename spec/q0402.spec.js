import Graph from '../src/graph.js'
import Solution from '../src/q0402.js'

describe('Solution', function() {
    let solution;
    beforeEach(function() {
        solution = new Solution();
    });
    it('easiest should work', function() {
        let graph = new Graph(6);
        graph.addEdge(0, 1);
        
        expect(solution.areConnected(graph, 0, 1)).toBe(true);
    });

    it('same vertex should work', function() {
        let graph = new Graph(3);
        expect(solution.areConnected(graph, 0, 0)).toBe(true);
    });

    it('path > 1 should work', function() {
        let graph = new Graph(3);
        graph.addEdge(0, 1);
        graph.addEdge(1, 2);

        expect(solution.areConnected(graph, 0, 2)).toBe(true);
        expect(solution.areConnected(graph, 2, 0)).toBe(true);
    });

    it('graph with no edges should work', function() {
        let graph = new Graph(3);

        expect(solution.areConnected(graph, 0, 1)).toBe(false);
        expect(solution.areConnected(graph, 0, 2)).toBe(false);
        expect(solution.areConnected(graph, 1, 2)).toBe(false);
    });
});
