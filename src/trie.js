class Node {
    constructor() {
        this.chars = new Array(26);
    }

    isEmpty() {
        return this.chars.findIndex((v) => ( typeof v !== 'undefined')) === -1;
    }

}

let a = 'a'.charCodeAt(0);
class Trie {

    put(key, value) {
        this.root = this.doPut(this.root, key.toLowerCase(), value);
    }

    get(key) {
        return this.doGet(this.root, key.toLowerCase());
    }

    delete(key) {
        this.doDelete(this.root, key.toLowerCase());
    }

    doPut(subtrie, key, value) {
        //console.log('key=' + key);
        if (!subtrie) {
            subtrie = new Node();
        }

        if (key.length > 0) {
            subtrie.chars[key.charCodeAt(0) - a] = this.doPut(subtrie.chars[key.charCodeAt(0) - a], key.substr(1), value);
        } else {
            subtrie.value = value;
        }

        return subtrie;
    }

    doGet(subtrie, key) {
        let res = null;
        if (subtrie) {
            if (key.length === 0) {
                res = subtrie.value;
            } else {
                res = this.doGet(subtrie.chars[key.charCodeAt(0) - a], key.substr(1));
            }
        }

        return res;
    }

    doDelete(subtrie, key) {
        let res = subtrie;
        if (subtrie) {
            if (key.length === 0) {
                subtrie.value = void 0;
                if (subtrie.isEmpty()) {
                    res = null;
                }
            } else {
                subtrie.chars[key.charCodeAt(0) - a] = this.doDelete(subtrie.chars[key.charCodeAt(0) - a], key.substr(1));
            }
        }
        return res;
    }
}

export default Trie;
