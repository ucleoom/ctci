class Solution {
    removeDuplicates(s) {
        for (let i = 0; i < s.length; i++) {
            for (let j = i + 1; j < s.length; j++) {
                if (s[i] === s[j]) {
                    s[j] = -1;
                }
            }
        }
        let shift = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === -1) {
                shift++;
            }
            s[i] = s[i + shift];
        }
        return s.slice(0, s.length - shift);
    }
}

export default Solution;
