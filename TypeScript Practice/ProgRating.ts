class Language {
    constructor(public name) { }
	rate() {
		var rating = 0 + Math.floor(Math.random() * (100 - 0 + 1));
		alert(this.name + " / " + rating);
	}
}

class Programming extends Language {
    constructor(name) { super(name); }
}

var spanish = new Language("Spanish");
var js = new Programming("TypeScript");
var ts = new Programming("JavaScript");
var cs = new Programming("C#");
var rb = new Programming("Ruby");
var cpp = new Programming("C++");
var php = new Programming("PHP");

js.rate();
ts.rate();
cs.rate();
rb.rate();
cpp.rate();
php.rate();