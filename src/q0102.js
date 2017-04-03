class Solution {
    revert(arr) {
        let res = new Array(arr.length);
        res[arr.length - 1] = 0;
        for(let i = 0; i < (arr.length - 1) / 2; i++) {
            let opp = arr.length - 2 - i;
            res[i] = arr[opp];
            res[opp] = arr[i];
        }
        return res;
    }
}

export default Solution;
