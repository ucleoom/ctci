class Solution {
    makeChange(n) {
        return doMakeChange(n, 25);
    }
}
let coins = [1, 5, 10, 25];
function doMakeChange(n, denom) {
    //console.log('n='+n+ ' den='+denom);
    let c = 0;
    if (n <= 1 || denom === 1) {
        c = 1;
    } else {
        for (let m = 0; m * denom <= n; m++) {
            c += doMakeChange(n - m * denom, coins[coins.indexOf(denom) - 1]);
        }
    }
    return c;
}
export default Solution;
