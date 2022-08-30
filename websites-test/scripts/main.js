// Just some random class, nothing to see here
var Doc = /** @class */ (function () {
    function Doc(name) {
        this.doc = document.querySelector(name);
    }
    Doc.prototype.changeBackground = function (arg) {
        this.doc.style.background = arg;
    };
    Doc.prototype.setActive = function () {
        this.doc.classList.add('active');
    };
    Doc.prototype.unsetActive = function () {
        this.doc.classList.remove('active');
    };
    Doc.prototype.hide = function () {
        this.doc.style.transition = "all 2s ease-in-out";
        this.doc.style.opacity = "0";
    };
    Doc.prototype.show = function () {
        this.doc.style.transition = "none";
        this.doc.style.opacity = "1";
    };
    return Doc;
}());
// Defining variables
var x = 1;
var shouldTimeout = true;
var bg = new Doc('.main-background');
var main = new Doc('.main');
// Change background photo
function changePhoto(selected) {
    x = selected;
    if (x === 0)
        x = 5;
    else if (x === 6)
        x = 1;
    main.changeBackground("url('/websites-test/images/photo-" + x + ".jpg') center no-repeat");
    bg.hide();
    setTimeout(function () {
        bg.changeBackground("url('/websites-test/images/photo-" + x + ".jpg') center no-repeat");
        bg.show();
    }, 2000);
    new Doc('.slider-dots_item.active').unsetActive();
    new Doc(".slider-dots_item.dot_" + x).setActive();
}
// Completely cleared interval because of the Firefox issues
function resetInterval() {
    clearInterval(interval);
}
// After clicking side arrows
function changePhotoByOne(type) {
    resetInterval();
    switch (type) {
        case '+':
            changePhoto(x + 1);
            break;
        case '-':
            changePhoto(x - 1);
            break;
        default:
            break;
    }
}
// Clear interval after clicking bottom dots
document.querySelectorAll('.slider-dots_item').forEach(function (item) {
    item.addEventListener('click', function () {
        resetInterval();
    });
});
// Prepare interval for photo sliding
var interval = window.setInterval(function () {
    changePhoto(x + 1);
}, 7000);
interval;
