class Solution {
    pathCount(n) {
        return doPathCount(0, 0, n);
    }
}

function doPathCount(i, j, n) {
    let res = 0;
    if (i === n - 1 && j === n - 1) {
        res = 1;
    } else {
        if (j < n - 1) {
            res += doPathCount(i, j + 1, n);
        }
        if (i < n - 1) {
            res += doPathCount(i + 1, j, n);
        }
    }     
    return res; 
}

export default Solution;
