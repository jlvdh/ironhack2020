describe("Our user should be able to login", function() {
    it("Our Catname function should take an array and return all the strings in the array with mr. in front", function(){
        const catNames = ['Wiggles', 'Gizmo', 'Garfield', 'Miesje']
        expect(catName(catNames)[0]).toEqual('mr. Wiggles')
    })
})

