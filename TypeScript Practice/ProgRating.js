var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
var Language = (function () {
    function Language(name) {
        this.name = name;
    }
    Language.prototype.rate = function () {
        var rating = 0 + Math.floor(Math.random() * (100 - 0 + 1));
        alert(this.name + " / " + rating);
    };
    return Language;
})();
var Programming = (function (_super) {
    __extends(Programming, _super);
    function Programming(name) {
        _super.call(this, name);
    }
    return Programming;
})(Language);
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
php.rate();// JavaScript source code
