describe("StringCalc", function () {
	it('should eval "" to 0', function() {
    var Add;
    expect(StringCalc.Add("")).toEqual(0);
	});
	check("", 0);


	function check(exp, result) {
		it('should eval "' + exp + '" to ' + result, function() {
			expect(StringCalc.Add(exp)).toEqual(result)
		});
	}
});