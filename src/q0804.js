class Solution {
    permutations(string) {
        return doPermutations(string, string.length);
    }
}

function doPermutations(string, size) {
    let r = [];
    if (size === 0) {
        r.push([]);
    } else {
        for (let i = 0; i < string.length; i++) {
            let ss = doPermutations(string.substr(0, i) + string.substr(i + 1), size - 1);
            for(let elem of ss) {
                r.push(string.charAt(i) + elem);
            }
        }
    }
    return r;
}

export default Solution;
