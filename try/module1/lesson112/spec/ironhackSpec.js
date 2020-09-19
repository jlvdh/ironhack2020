describe("hello ironhacker function", function() {
    it("greets ironhacker", function() {
        expect(helloIronhack()).toEqual('hello')
    })
})

describe("Sum stuff", function() {
    it("should return 5 when passing 3 and 2", function() {
        expect(sumStuff(3, 2)).toEqual(5)
    })
})