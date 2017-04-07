class Solution {
    
    areConnected(g, v1, v2) {
        let visited = new Array(g.v()).fill(false);

        return dfs(g, v1, visited, (v) => (v === v2));
    }
}

function dfs(g, v, visited, fn) {
    let res = fn(v);
    visited[v] = true;
    
    if (!res) {
        for(let vi of g.adj(v)) {
            if (!visited[vi]) {
                res = dfs(g, vi, visited, fn);
            }
        }
    }
    return res;
}

export default Solution;
