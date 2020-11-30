describe("Fact Section Guess Function",function(){

    beforeEach(function() {
        guessOutput = new guess();
    });

    describe("Provides feedback to user",function(){
        it("The function should exist", function() {
            expect(guess).toBeDefined();
        });
    })
})