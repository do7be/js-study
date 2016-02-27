describe("TestSample>", function() {
    describe("Logic>", function() {
        it("multiNumber", function() {
            var target = new Logic();
            var num = 3;
            var expected = 9;

            var result = target.squaredNumber(num);

            expect(expected).toEqual(result);
        })
    });
});
