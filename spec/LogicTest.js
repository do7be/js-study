describe("TestSample>", function() {
  describe("Logic>", function() {
    beforeEach(function() {
      console.log('test ready >>>');
    });

    afterEach(function() {
      console.log("<<< test end");
    });

    it("multiNumber plus", function() {
      var target = new Logic();
      var num = 3;
      var expected = 9;

      var result = target.squaredNumber(num);

      console.log(`input:${num} expected:${expected} result:${result}`);
      expect(expected).toEqual(result);
    })

    it("multiNumber minus", function() {
      var target = new Logic();
      var num = -3;
      var expected = 9;

      var result = target.squaredNumber(num);

      console.log(`input:${num} expected:${expected} result:${result}`);
      expect(expected).toEqual(result);
    })
  });
});
