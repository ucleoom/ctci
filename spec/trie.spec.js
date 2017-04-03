import Trie from '../src/trie.js';

describe('Trie', function() {
    it('should be defined', function() {
        expect(typeof Trie).toBe('function');
    });
    it('put(key, val) should be defined', function() {
        expect(typeof new Trie().put).toBe('function');
    });
    it('get(key) should be defined', function() {
        expect(typeof new Trie().get).toBe('function');
    });
    it('put(key, value) should add the key value pair', function() {
        let trie = new Trie();
        trie.put('pepe', 1);

        expect(trie.get('pepe')).toBe(1);
    });
    it('get(key, value) should return null if key does not exist', function() {
        expect(new Trie().get('pepe')).toBe(null);
    });

    it('delete(key) should remove the value', function() {
        let trie = new Trie();
        trie.put('pepe', 1);

        expect(trie.get('pepe')).toBe(1);
        trie.delete('pepe');
        expect(trie.get('pepe')).toBe(null);
    });
});
