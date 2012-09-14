describe("StringCalc", function () {

	describe("Logical tests", function() {
		check("", 0);
		check("0", 0);
	});

	describe("Comma Separation", function() {
		check("0,1", 1);
		check("0,0,0,1", 1);
		check("-1,0,1", 0);
	});

	describe("Newlines", function() {
	    check("0\n1", 1);
	    check("0\n1\n0", 1);
	    check("0\n1\n0\n0\n1\n-1\n0", 1);
	});

	function check(exp, result) {
		it('should eval "' + exp.replace(/\n/g,"\\n") + '" to ' + result, function() {
			expect(StringCalc.Add(exp)).toEqual(result)
		});
	}
});