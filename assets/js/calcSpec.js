describe("Fact Section Question one function",function(){

    beforeEach(function() {
        guessOutput = new guessQuestionOne();
    });

    describe("Checks whether the function exists",function(){
        it("The function should exist", function() {
            expect(guessQuestionOne).toBeDefined();
        });
    })
})

describe("Fact Section Question two function",function(){

    beforeEach(function() {
        guessOutput = new guessQuestionTwo();
    });

    describe("Checks whether the function exists",function(){
        it("The function should exist", function() {
            expect(guessQuestionTwo).toBeDefined();
        });
    })
})

describe("Intiate Map function",function(){

    beforeEach(function() {
        mapOutput = new initMap();
    });

    describe("Checks whether the function exists",function(){
        it("The function should exist", function() {
            expect(initMap).toBeDefined();
        });
    })
})