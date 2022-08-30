var Doc = /** @class */ (function () {
    function Doc(name) {
        this.doc = document.querySelector(name);
    }
    Doc.prototype.moveBg = function (x) {
        this.doc.style.backgroundPositionY = x;
    };
    return Doc;
}());
document.addEventListener('scroll', function (e) {
    var value = -document.scrollingElement.scrollTop * 0.2;
    new Doc('.gallery-top').moveBg(value + "px");
});
