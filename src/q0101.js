class Solution {
    allUniqueChars(s) {
        let chars = {},
            max = 0;

        for (let char of s) {
            if (!chars[char]) {
                chars[char] = 1;
            } else {
                chars[char]++;
            }
            max = chars[char] > max ? chars[char] : max;
        }
        return max < 2;
    }
}

class SolutionWithoutSymbolTable {
    allUniqueChars(s) {
        let max = 0;
        for (let i = 0; max < 2 && i < 256; i++) {
            let index = 0,
                count = 0;
            while (index > -1) {
                index = s.indexOf(String.fromCharCode(i), ++index);
                count++;
            }
            max = count > max ? count : max;
        }    
        return max < 2;
    }
}

export {Solution, SolutionWithoutSymbolTable};
