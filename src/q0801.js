class Solution {
    fibonacci(n) {
        let res;
        if (n === 0) {
            res = 0;
        } else if (n === 1) {
            res = 1;
        } else {
            res = this.fibonacci(n - 1) + this.fibonacci(n - 2);
        }
        return res;
    }
}

export default Solution;
