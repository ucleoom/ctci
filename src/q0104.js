class Solution {
    anagrams(s1, s2) {
        let m1 = charCount(s1.toLowerCase()),
            m2 = charCount(s2.toLowerCase()),
            allGood = false,
            it,
            current;
        
        if (m1.size === m2.size) {
            allGood = true;
            it = m1[Symbol.iterator]();
            current = it.next();
            while (!current.done && allGood) {
                allGood = current.value[1] === m2.get(current.value[0]);
                current = it.next();
            }
        }
        return allGood;
    }
}

function charCount(phrase) {
    let map = new Map();
    for (let char of phrase) {
        let count = map.get(char);
        if (count === void 0) {
            count = 0;
        }
        map.set(char, count + 1);
    }
    return map;
}

export default Solution;
