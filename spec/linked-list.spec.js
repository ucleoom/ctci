import LinkedList from '../src/linked-list.js';

describe('LinkedList', function() {
    it('should be a constructor', function() {
        expect(typeof LinkedList).toEqual('function');
    });

    it('should define add method', function() {
        expect(new LinkedList().add).not.toBeUndefined();
    });

    it('should define length property', function() {
        expect(new LinkedList().length).toBe(0);
    });

    it('first call to add() should increase length', function() {
        let list = new LinkedList();
        expect(list.length).toBe(0);
        list.add(1);
        expect(list.length).toBe(1);
    });

    it('next calls to add() should increase length', function() {
        let list = new LinkedList();
        list.add(1);
        list.add(1);
        list.add(1);
        expect(list.length).toBe(3);        
    });

    it('forEach() should allow to traverse the whole list.', function() {
        let list = new LinkedList();
        list.add(2);
        list.add(3);
        list.add(1);

        expect(list.forEach((val, acc) => (acc + val), "")).toEqual("231");
    });

});