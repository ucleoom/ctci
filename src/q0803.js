class Solution {
    subsets(set) {
        let res = [];
        for (let i = 0; i <= set.length; i++) {
            res = res.concat(doSubsets(set, i));
        }
        return res;
    }
}

function doSubsets(set, size) {
    let r = [];
    if (size === 0) {
        r.push([]);
    } else {
        for (let i = 0; i < set.length; i++) {
            let ss = doSubsets(set.slice(i + 1), size - 1);
            for(let elem of ss) {
                r.push([set[i]].concat(elem));
            }
        }
    }
    return r;
}

export default Solution;
